// This file is now a minimal root layout
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
};

export default function RootLayout({ children }) {
  return children;
}
