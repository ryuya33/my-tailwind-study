import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import { getAllPosts } from "../lib/microcms";

// revalidate設定（60秒ごとに更新チェック）
export const revalidate = 60;

// 画像がない時は、publicフォルダにあるこの画像を表示します
const DEFAULT_IMAGE_URL = "/syamoji.png";

export default async function Home() {
  // microCMSから記事データを取得
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans pt-16">
      <Header />

      {/* 🔹 ヒーローセクション（サイトの顔） */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            現場職パパ、<br className="md:hidden" />
            <span className="text-indigo-600">AI</span> とWebを作る。
          </h1>
          <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            40歳手前、地方在住、ITとは無縁の肉体労働。
            <br />
            それでも「自分の城」は作れる。AIと共に学ぶモダンWeb開発の記録。
          </p>
        </div>
      </section>

      {/* 🔹 メインコンテンツエリア */}
      <main className="max-w-6xl mx-auto px-6 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* 左側：記事一覧エリア (2カラム分) */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-indigo-600 rounded-full"></span>
              新着記事
            </h2>

            {/* 記事グリッド */}
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300 flex flex-col h-full"
                >
                  {/* サムネイル画像（あれば表示、なければグレー） */}
                  {/* eyecatchがあればそのURL、なければDEFAULT_IMAGE_URLを使う */}
                  <div className="aspect-video relative bg-gray-100">
                    <Image
                      src={post.eyecatch?.url || DEFAULT_IMAGE_URL}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* 記事テキスト情報 */}
                  <div className="p-5 flex-1 flex flex-col">
                    {/* カテゴリ (あれば) */}
                    {post.category && (
                      <span className="text-xs font-bold text-indigo-600 mb-2 block">
                        {post.category.name}
                      </span>
                    )}

                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition">
                      {post.title}
                    </h3>

                    {/* 日付 */}
                    <time className="text-xs text-gray-400 mt-auto">
                      {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
                    </time>
                  </div>
                </Link>
              ))}
            </div>

            {/* 記事がない場合の表示 */}
            {posts.length === 0 && (
              <p className="text-gray-500 text-center py-10">記事はまだありません。</p>
            )}

            <div className="mt-10 text-center">
              <Link href="/blog" className="inline-block border border-gray-300 px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition">
                すべての記事を見る
              </Link>
            </div>
          </div>

          {/* 右側：サイドバーエリア (1カラム分) */}
          <aside className="lg:col-span-1 space-y-8">
            {/* プロフィールカード */}
            <ProfileCard />

            {/* ここに将来的に「人気記事」や「カテゴリー一覧」を追加できます */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h3 className="font-bold text-gray-800 mb-4">開発環境</h3>
               <div className="flex flex-wrap gap-2">
                 <span className="px-3 py-1 bg-gray-100 text-xs rounded-full">Next.js</span>
                 <span className="px-3 py-1 bg-gray-100 text-xs rounded-full">Tailwind CSS</span>
                 <span className="px-3 py-1 bg-gray-100 text-xs rounded-full">microCMS</span>
                 <span className="px-3 py-1 bg-gray-100 text-xs rounded-full">Vercel</span>
                 <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full font-bold">Gemini</span>
                 <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full font-bold">ChatGPT</span>
                 <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full font-bold">Copilot</span>
               </div>
            </div>
          </aside>

        </div>
      </main>

      <Footer />
    </div>
  );
}
