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
  title: {
    default: "Okumo 百貨おくも",
    template: "%s | Okumo 百貨おくも",
  },
  description: "Next.js + Tailwind CSSで作る個人開発ブログ。",
  openGraph: {
    title: "Okumo 百貨おくも",
    description: "Next.js + Tailwind CSSで作る個人開発ブログ。",
    url: "https://your-domain.com", // ← あなたのURL
    siteName: "Okumo 百貨おくも",
    images: [
      {
        url: "https://your-domain.com/ogp-default.png", // デフォルトOGP画像
        width: 1200,
        height: 630,
        alt: "Okumo 百貨おくも",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@your_twitter_id", // 任意
    images: ["https://your-domain.com/ogp-default.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
