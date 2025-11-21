import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import ProfileCard from '../components/ProfileCard';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-start min-h-[calc(100vh-120px)] p-6 gap-6">

        <Card
        title="お知らせ"
        description="明日はメンテナンスのため、サービスが一時停止します。"
        />
        <Card
        title="開発進捗"
        description="新しいタスク管理機能を追加しました。"
        />
        <ProfileCard />
      </main>
      <Footer />
    </>
  );
}
