// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    // スクロールしても上部に固定 + すりガラス効果 (backdrop-blur)
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ロゴ部分 */}
        <Link href="/" className="group flex items-center gap-2">
          {/* アイコン的な装飾（四角いロゴ） */}
          <span className="flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-lg font-bold text-sm group-hover:bg-indigo-600 transition duration-300">
            S
          </span>
          {/* サイトタイトル */}
          <span className="text-xl font-bold text-gray-800 tracking-tight font-sans">
            Syamoji<span className="text-indigo-600">.works</span>
          </span>
        </Link>

        {/* ナビゲーションメニュー */}
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition"
          >
            Blog
          </Link>

          {/* お問い合わせ/GitHubボタンなど（将来用） */}
          <Link
            href="https://github.com/ryuya33/my-tailwind-study"
            target="_blank"
            className="hidden md:inline-block bg-gray-900 text-white text-xs px-4 py-2 rounded-full font-bold hover:bg-gray-700 transition"
          >
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  );
}
