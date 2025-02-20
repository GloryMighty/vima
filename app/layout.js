import "@css/font-awesome-pro.css";
import "@css/plugin.css";
import "@css/responsive.css";
import "@css/scroll_top.css";
import "@css/spacing.css";
import "@css/style.css";
import "@istiIcon/style.css";
import "../styles/social-links.css";
import { Poppins, Spline_Sans } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLinksWidget from '../components/widgets/SocialLinks';
import dynamic from 'next/dynamic';

const ChatWidget = dynamic(() => import('../components/widgets/ChatWidget'), { ssr: false });

export const metadata = {
  title: "VIMA Web Development",
  description: "Professional developers with unique approach and exceptional sense of style",
  keywords: [
    "web development", 
    "AI-powered websites", 
    "custom web solutions", 
    "full-stack development", 
    "responsive design", 
    "Next.js", 
    "React", 
    "multilingual websites"
  ],
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'tr': '/tr',
      'fi': '/fi',
      'ar': '/ar',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    title: "VIMA Web Development",
    description: "Professional developers with unique approach and exceptional sense of style",
    url: "https://vima.dev",
    siteName: "VIMA Web Solutions",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "VIMA Web Development",
    description: "Professional developers with unique approach and exceptional sense of style",
    images: ["/images/twitter-image.jpg"]
  },
  alternates: {
    canonical: "https://vima.dev"
  }
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--secondaryFont",
  display: "swap",
});
const splineSans = Spline_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--bodyFont",
  display: "swap",
});

const fontFamily = `${poppins.variable} ${splineSans.variable}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontFamily}>
        {children}
        <SocialLinksWidget />
        <ToastContainer />
        <ChatWidget />
      </body>
    </html>
  );
}
