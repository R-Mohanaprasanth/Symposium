import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import BootLayout from "@/components/BootLayout";

export const metadata = {
  title: "Neuronex 2K26",
  description: "National Level Technical Symposium",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020b13]`}
      >
        <BootLayout>{children}</BootLayout>
      </body>
    </html>
  ); 
}
