import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
        <section className="max-w-2xl bg-white shadow-md rounded-xl p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
          <p className="text-gray-600 leading-relaxed">
            丹波篠山でWeb開発を学んでいます。Next.jsとTailwind CSSを使って、
            デザイン性と使いやすさを両立したサイトづくりを目指しています。
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
