// ChatWidget.tsx - AI Chat Widget with dynamic and engaging design

"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"
import { motion as m, AnimatePresence } from "framer-motion"
import { ResizableBox } from 'react-resizable'
import 'react-resizable/css/styles.css'
type MotionDivProps = React.ComponentProps<typeof m.div>
import { Loader2, XCircle, MessageSquare, Send } from "lucide-react"
import '../../public/css/chatWidget.css';

// Message interface for type-safe chat communication
interface Message {
  id: string
  role: 'user' | 'ai'
  content: string
  timestamp: number
}

const ChatWidget: React.FC = () => {
  // Initial welcome message
  const initialMessage: Message = {
    id: 'initial-message',
    role: 'ai',
    content: "How can Target Reached help you today?",
    timestamp: Date.now()
  }

  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [initialMessageShown, setInitialMessageShown] = useState(false)
  const [dimensions, setDimensions] = useState({
    width: 350,
    height: 500
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const widgetRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  // Show initial message when chat is opened
  useEffect(() => {
    if (isOpen && !initialMessageShown) {
      setMessages([initialMessage])
      setInitialMessageShown(true)
    }
  }, [isOpen, initialMessageShown])

  const handleResize = (event: any, { size }: any) => {
    setDimensions({
      width: size.width,
      height: size.height
    })
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      id: `msg-${Date.now()}-user`,
      role: 'user',
      content: inputMessage,
      timestamp: Date.now()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    try {
      const response = await fetch(`/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [userMessage] })
      })

      const data = await response.json()

      if (data.message) {
        const aiMessage: Message = {
          id: `msg-${Date.now()}-ai`,
          role: 'ai',
          content: data.message,
          timestamp: Date.now()
        }
        setMessages(prev => [...prev, aiMessage])
      }
    } catch (error) {
      console.error("Chat error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-[9999] viewport-fixed-right">
      <AnimatePresence>
        {!isOpen ? (
          <m.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            className="chat-widget-button"
            onClick={() => setIsOpen(true)}
          >
            <MessageSquare className="w-6 h-6 text-[#32CD32]" />
          </m.button>
        ) : (
          <ResizableBox
            width={dimensions.width}
            height={dimensions.height}
            minConstraints={[300, 400]}
            maxConstraints={[600, 800]}
            resizeHandles={['nw']}
            onResize={handleResize}
            className="chat-widget-resizable"
          >
            <div className="chat-widget-container-wrapper">
              <m.div 
                ref={widgetRef}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="chat-widget-container"
                style={{ width: '100%', height: '100%' }}
              >
              {/* Header */}
              <div 
                className="chat-widget-header"
              >
                <div className="title-container">
                  <MessageSquare className="w-6 h-6 text-[#32CD32]" />
                  <h3 className="text-lg font-semibold text-[#32CD32]">Target AI</h3>
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="chat-widget-close-button"
                >
                  <XCircle className="w-6 h-6 text-[#32CD32]" />
                </button>
              </div>

              {/* Messages Container */}
              <div className="chat-widget-body">
                {messages.map((msg) => (
                  <m.div key={msg.id} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`message-container ${msg.role === 'user' ? 'user-message' : 'ai-message'}`}
                  >
                    <div 
                      className={`message-bubble ${msg.role === 'user' ? 'user-bubble' : 'ai-bubble'}`}
                    >
                      {msg.content}
                    </div>
                  </m.div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="chat-widget-footer">
                <div className="input-container">
                  <input 
                    type="text" 
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="chat-widget-input"
                    disabled={isLoading}
                  />
                  <button 
                    onClick={handleSendMessage} 
                    disabled={isLoading}
                    className="chat-widget-send-button"
                  >
                    {isLoading ? 
                      <Loader2 className="w-5 h-5 animate-spin text-[#32CD32]" /> : 
                      <Send className="w-5 h-5 text-[#32CD32]" />
                    }
                  </button>
                </div>
              </div>
            </m.div>
            </div>
          </ResizableBox>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ChatWidget
