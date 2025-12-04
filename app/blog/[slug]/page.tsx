// app/blog/[slug]/page.tsx
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
// Imageコンポーネントを使うためにインポートを追加
import Image from "next/image";
import { getPostBySlug, getAllPosts } from "../../../lib/microcms";

export const revalidate = 60;

type Params = {
  params: Promise<{ slug: string }>;
};

// 画像がない時のデフォルト画像（publicフォルダに配置済みのもの）
const DEFAULT_IMAGE_URL = "/syamoji.png";

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const siteUrl = "http://localhost:3000"; // 本番公開時に変更

  return {
    title: `${post.title} | Syamoji.works`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: "Syamoji.works",
      locale: "ja_JP",
      type: "article",
      images: post.eyecatch ? [post.eyecatch.url] : ["/ogp-default.png"],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    // 親要素に font-sans を指定してフォントを統一
    <div className="flex flex-col min-h-screen pt-16 font-sans">
      <Header />

      <main className="grow max-w-4xl mx-auto w-full px-6 py-12">
        <article className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">

          {/* アイキャッチ画像があれば表示 */}
          <div className="aspect-video relative bg-gray-100 mb-8 rounded-xl overflow-hidden">
             <Image
               src={post.eyecatch?.url || DEFAULT_IMAGE_URL}
               alt={post.title}
               fill
               className="object-cover"
             />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100 text-center">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-4 mb-10 text-sm text-gray-500">
            <time>{new Date(post.publishedAt).toLocaleDateString("ja-JP")}</time>
            {/* カテゴリがあれば表示 */}
            {post.category && (
              <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-bold text-xs">
                {post.category.name}
              </span>
            )}
          </div>

          {/* ✅ ここを修正！ classNameに "prose" などを追加しました */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-indigo-600 prose-img:mx-auto prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </article>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="text-indigo-600 underline hover:text-indigo-800 font-medium"
          >
            ← ブログ一覧へ戻る
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
