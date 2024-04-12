import Footer from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";
import Favicon from "/public/favicon.ico";

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
      <GoogleTagManager gtmId="G-JH07603538" />
      <body className="{inter.className} w-full min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
