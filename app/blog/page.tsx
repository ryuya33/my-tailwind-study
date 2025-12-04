import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getAllPosts } from "../../lib/microcms";

const DEFAULT_IMAGE_URL = "/syamoji.png";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col min-h-screen pt-16 font-sans">
      <Header />

      {/* grow を使用してフッターを下に押し下げる */}
      <main className="grow max-w-6xl mx-auto w-full px-6 py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-indigo-600 pl-4">
          記事一覧
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300 flex flex-col h-full"
            >
              <div className="aspect-video relative bg-gray-100">
                <Image
                  src={post.eyecatch?.url || DEFAULT_IMAGE_URL}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* flex-grow を grow に変更 */}
              <div className="p-5 flex flex-col grow">
                <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 grow">
                  {post.description || "本文をご覧ください..."}
                </p>
                <div className="mt-auto text-xs text-gray-400">
                  {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
