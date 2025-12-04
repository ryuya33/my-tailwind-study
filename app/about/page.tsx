import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-16 font-sans">
      <Header />

      {/* flex-grow を grow に変更 */}
      <main className="grow max-w-4xl mx-auto w-full px-6 py-12">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Me</h1>

          <div className="space-y-4 text-gray-600 leading-relaxed text-left">
            <p>
              はじめまして。ド田舎に住む「しゃもじぃ」です。
            </p>
            <p>
              普段は現場で体を動かす仕事をしていますが、
              「自分の力で何かを作り出したい」という思いからWeb開発の世界に足を踏み入れました。
            </p>
            <p>
              エンジニアへの転職活動は厳しい結果に終わりましたが、
              「それなら自分で作ればいい」と開き直り、AI（GeminiやChatGPT）を相棒に独学を続けています。
            </p>
            <p>
              このブログでは、現場職の視点から見た技術のキャッチアップや、
              AIを活用した開発のノウハウを発信していきます。
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
