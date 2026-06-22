import FooterPage from '@/components/footer/footer';
import OneGamerComponentPage from '@/components/onegamer';
import StartComponentPage from '@/components/start';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen min-w-full max-w-3xl flex-col justify-between">
        <StartComponentPage />
        <OneGamerComponentPage />
        <FooterPage />
      </main>
    </>
  );
}