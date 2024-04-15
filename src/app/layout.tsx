import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';

import { SpeedInsights } from '@vercel/speed-insights/next';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:{
    default : "Dev naukri",
    template : "%s | Dev Naukri"
  },
  description: "Find your dream developer job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-55J2QQM62D"></Script>
        <Script id="google-analytics">
          {
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-55J2QQM62D');
            `
          }
        </Script>
      </head>
       <body className={`${inter.className} min-w-[350px]`}>
        <Navbar/>
        {children}
        <Footer/>
        <Analytics />
        <SpeedInsights />
        </body>
    </html>
  );
}
