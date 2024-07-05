
import { GeistSans } from 'geist/font/sans';
import { ViewTransitions } from 'next-view-transitions'
import "./globals.css";




export const metadata = {
  title: "Ahmed Saber",
  description: "  Robotics Engineer with a robust foundation in AI and IoT portfolio",
  openGraph: {
     images: ['https://avatars.githubusercontent.com/u/171610171?v=4'],
    title: 'Ahmed Saber',
    description: '  Robotics Engineer with a robust foundation in AI and IoT portfolio',
  },
  title: {
    default: 'Ahmed Saber | software blogs',
    template: `%s - Ahmed Saber`,
  },
  keywords: [
    "Ahmed Saber",
    "software engineer",
    "  Robotics Engineer with a robust foundation in AI and IoT",
  ],
  description: 'Ahmed Saber',
  creator: "Sharmo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: 'https://ahmed-saber.vercel.app/',
    title: 'Ahmed Saber',
    description: ' Ahmed Saber',
    siteName: 'Ahmed Saber',
    images: [
      {
        url: 'https://ahmed-saber.vercel.app/og',
        width: 1200,
        height: 630,
        alt: 'Ahmed Saber',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Ahmed Saber',
    description: 'Ahmed Saber',
    images: 'https://ahmed-saber.vercel.app/og',
    creator: "@scoopsahoykid",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
<html lang="en">
        <body className={GeistSans.className}>
        
          {children}
        </body>
    </html>
    </ViewTransitions>
    
  );
}