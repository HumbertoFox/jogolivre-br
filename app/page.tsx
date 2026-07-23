import StartComponentClient from '@/components/start';
import OneGamerComponentClient from '@/components/onegamer';
import TwoGamerComponentClient from '@/components/twogamer';
import ThreeGamerComponentClient from '@/components/threegamer';
import FooterComponentClient from '@/components/footer';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen min-w-full max-w-3xl flex-col justify-between">
        <StartComponentClient />
        <OneGamerComponentClient />
        <TwoGamerComponentClient />
        <ThreeGamerComponentClient />
        <FooterComponentClient />
      </main>
    </>
  );
}