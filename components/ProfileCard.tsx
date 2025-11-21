import Button from "./Button";

export default function ProfileCard() {
  return (
    <section className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center md:max-w-3xl md:flex md:items-center md:text-left">
      <img
        src="/my-icon.png"
        alt="Ryuya Tanbaのプロフィール画像"
        className="mx-auto md:mx-0 rounded-full mb-4 md:mb-0 md:mr-8 w-36 h-36"
      />
      <div>
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Ryuya Tanba</h1>
        <p className="text-gray-600 mb-6">
          丹波篠山のWeb開発者。Next.jsとTailwind CSSで地域に役立つサイトを制作中。
        </p>
        <div className="flex justify-center gap-4">
          <Button label="GitHub" href="https://github.com/ryuya-okumo" />
          <Button label="Blog" href="https://okumo-blog.vercel.app" variant="outline" />
        </div>
      </div>
    </section>
  );
}
