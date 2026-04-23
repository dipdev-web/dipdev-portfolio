import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './navbar'
import Footer from './footer'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Dip Dev",
  icons: {
    icon: "/logo1.png", 
  },
  description:
    "Dip Dev builds high-end, fast, and conversion-focused websites for modern brands worldwide. We turn ideas into premium digital experiences.",
  keywords: [
    "web development",
    "dip dev",
    "portfolio",
    "agency",
    "nextjs developer",
    "frontend developer",
    "ui ux design",
    "premium websites",
  ],
  authors: [{ name: "Dip Dev" }],
  creator: "Dip Dev",
  openGraph: {
    title: "Dip Dev | Premium Web Development Agency",
    description:
      "We design and build high-end websites that convert ideas into money.",
   
    siteName: "Dip Dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dip Dev | Premium Web Development Agency",
    description:
      "High-end websites for modern brands. Fast, clean, and conversion-focused.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <Navbar/>
      {children}
     <Footer/>
      </body> 
    </html>
  );
}
