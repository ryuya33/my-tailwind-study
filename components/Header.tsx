import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white py-4 px-6 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link href="/">Okumo 百貨おくも</Link>
      </h1>
      <nav className="flex gap-4 text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  );
}
