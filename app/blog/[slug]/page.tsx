// app/blog/[slug]/page.tsx
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "../../../lib/microcms";

export const revalidate = 60;

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const siteUrl = "http://localhost:3000"; // 本番公開時に変更

  return {
    title: `${post.title} | Okumo 百貨おくも`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: "Okumo 百貨おくも",
      locale: "ja_JP",
      type: "article",
      images: post.eyecatch ? [post.eyecatch.url] : [], // アイキャッチがあればOGPに設定
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
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
        <article className="prose prose-lg max-w-3xl bg-white p-8 rounded-2xl shadow text-gray-800">
          {/* アイキャッチ画像があれば表示 */}
          {post.eyecatch && (
            <img
              src={post.eyecatch.url}
              alt={post.title}
              className="w-full h-auto rounded-lg mb-6 object-cover"
              style={{ maxHeight: "400px" }}
            />
          )}

          <h1 className="text-3xl font-bold text-gray-900 border-b pb-2 mb-6 text-center">
            {post.title}
          </h1>

          {/* カテゴリがあれば表示 */}
          {post.category && (
            <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded mb-4 inline-block">
              {post.category.name}
            </span>
          )}

          <div
            className="prose-img:mx-auto prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <Link
          href="/blog"
          className="text-indigo-600 underline mt-8 inline-block hover:text-indigo-800"
        >
          ← ブログ一覧へ戻る
        </Link>
      </main>
      <Footer />
    </>
  );
}
