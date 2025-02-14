import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import NavLinks from "@/components/NavLinks";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Olx - Buy and Sell for free",
  description: "Olx - Buy and Sell for free",
  icons:{
    icon: 'https://www.olx.com.pk/assets/favicon-16x16.ec663eb59c14f769c42c1a2beed283ca.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html style={{scrollbarGutter: "auto"}} className="scrollbar scrollbar-thumb-[#686868] scrollbar-track-[#424242] scrollbar-[20px]" lang="en">
        <body
        >
          <Header />
          <NavLinks/>
          {children}
          <Footer />
        </body>
      </html>
  );
}
