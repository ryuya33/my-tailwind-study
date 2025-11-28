import Image from "next/image";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
      {/* プロフィール画像 */}
      <div className="relative w-24 h-24 mb-4">
        <Image
          src="/syamoji.png"
          alt="田舎在住のAI好きキャラ「しゃもじぃ」"
          fill
          className="rounded-full object-cover border-2 border-indigo-50"
        />
      </div>

      {/* 名前 */}
      <h2 className="text-xl font-bold text-gray-800 mb-1">しゃもじぃ</h2>

      {/* 肩書き */}
      <p className="text-xs text-indigo-600 font-bold bg-indigo-50 px-3 py-1 rounded-full mb-4">
        現場職 × AIエンジニア
      </p>

      {/* 自己紹介文 */}
      <p className="text-sm text-gray-600 leading-relaxed mb-6 text-left">
        ド田舎在住、40歳手前。
        <br />
        普段はアナログで体育会系な仕事をしています。
        <br />
        <br />
        エンジニア転職は叶いませんでしたが、AI（Gemini/ChatGPT）という最強の相棒と共に、自分だけのWebサービスを作ることに挑戦中。
      </p>

      {/* SNSリンクなど（必要なら） */}
      <div className="flex gap-4 w-full">
        <Link
          href="/about"
          className="flex-1 bg-gray-800 text-white text-sm py-2 rounded-lg hover:bg-gray-700 transition"
        >
          詳しいプロフィール
        </Link>
      </div>
    </div>
  );
}
