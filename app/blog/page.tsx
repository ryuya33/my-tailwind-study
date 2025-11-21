import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getAllPosts } from "../../lib/microcms";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">ブログ記事一覧</h1>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.description}</p>

              <p className="text-sm text-gray-400 mt-2">
                {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
              </p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
