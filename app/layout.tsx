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
  // サイトのベースURLを設定（VercelのURLなどが決まったら書き換えてください）
  metadataBase: new URL("https://syamoji.works"), // ← 仮でも良いのでURL形式にしておくとエラーが消えます
  title: {
    default: "Syamoji.works | 現場職パパのAI×Web開発記録",
    template: "%s | Syamoji.works",
  },
  description: "地方在住の現場職パパが、AIと共に学ぶモダンWeb開発の記録ブログ。",

  openGraph: {
    title: "Syamoji.works",
    description: "地方在住の現場職パパが、AIと共に学ぶモダンWeb開発の記録ブログ。",
    siteName: "Syamoji.works",
    images: [
      {
        url: "/ogp-default.png", // publicフォルダの画像
        width: 1200,
        height: 630,
        alt: "Syamoji.works",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ogp-default.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {/* デザイン統一の要：背景色(bg-gray-50)と文字色(text-gray-800)をここで強制適用 */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-gray-50 text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
