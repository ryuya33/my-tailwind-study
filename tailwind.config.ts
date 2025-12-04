import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    // Next.jsの App Router で使われる標準的なパス
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    // 記事ファイルなどを置く場合
    "./posts/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      // ✅ サイト全体のフォントを Geist に統一する設定
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      // カスタムカラー設定（そのままでOK）
      colors: {
        primary: "#4F46E5", // Indigo-600と同じ色
      },
    },
  },
  plugins: [
    typography, // 記事の文章をきれいに表示するためのプラグイン
  ],
};

export default config;
