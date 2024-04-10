import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Favicon from "/public/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shiori Ueda",
  description:
    "I am a Ph.D. student advised by Prof. Hideo Saito at Keio University, Japan. My research interests include computer vision and machine learning.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="{inter.className} w-screen min-h-screen">
        {children}
      </body>
      <Footer />
    </html>
  );
}
