import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "个人作品集-YSevenK",
  description: "个人作品展示集合",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} antialiased
          min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white
        `}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {children}
        </div>
        <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 border-t pt-6 border-gray-200 dark:border-gray-700">
          © 2025 个人作品集 · YSevenK
        </footer>
      </body>
    </html>
  );
}
