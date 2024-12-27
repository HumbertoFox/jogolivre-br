import HeaderComponents from '@/components/Header';
import Icon from '@/components/Icons';
import SobreComponents from '@/components/Sobre';
import YoutubeComponents from '@/components/Youtube';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='w-full min-h-screen'>
      <HeaderComponents />
      <main className='flex flex-col items-center gap-12'>
        <div className='w-full h-[calc(50vh-94.2px)] sm:h-[calc(70vh-94.2px)] md:h-[calc(100vh-94.2px)] lg:h-[calc(100vh-94.2px)] flex items-start justify-center bg-[url("/images/background.avif")] lg:bg-[url("/images/background_all.avif")] bg-fixed bg-contain bg-no-repeat 2xl:bg-cover'>
          <Link
            className='flex items-center gap-2 text-center text-2xl font-semibold text-red-600 hover:text-red-400 mt-8 duration-500 bg-black px-3 py-1 rounded-lg hover:bg-slate-700 border border-red-700 hover:border-yellow-400'
            href={'https://www.youtube.com/channel/UCz4oJ57gaGz48TbwTwFvS6w'}
            target='_blank'
          >
            <Icon
              className='w-9'
              icon={'fa-brands fa-youtube'}
            />
            YouTube
          </Link>
        </div>
        <YoutubeComponents />
        <SobreComponents />
      </main>
      <footer
        className='w-full flex flex-col justify-between pb-3'
        id='social'
      >
        <h4 className='text-5xl text-red-500 text-center py-14 uppercase'>
          Redes Sociais
        </h4>
        <div className='w-full min-h-96 flex'>
          <div className='w-full flex items-start justify-center bg-[url("/images/backgroun_footer_0.avif")] bg-cover bg-no-repeat'>
            <Link
              className='flex items-center gap-2 text-center text-sm font-semibold text-blue-600 hover:text-blue-400 mt-8 duration-500 bg-black px-3 py-1 rounded-lg hover:bg-slate-700 border border-blue-700 hover:border-yellow-400'
              href={'https://www.facebook.com/jogolivreBR'}
              target='_blank'
            >
              <Icon
                className='w-7'
                icon='fa-brands fa-square-facebook'
              />
              Jogo Livre BR
            </Link>
          </div>
          <div className='w-full flex items-start justify-center bg-[url("/images/backgroun_footer_1.avif")] bg-cover bg-no-repeat'>
            <Link
              className='flex items-center gap-2 text-center text-sm font-semibold text-green-600 hover:text-green-400 mt-8 duration-500 bg-black px-3 py-1 rounded-lg hover:bg-slate-700 border border-green-700 hover:border-yellow-400'
              href={'https://api.whatsapp.com/send/?phone=5519992354659&text&type=phone_number&app_absent=0'}
              target='_blank'
            >
              <Icon
                className='w-7'
                icon='fa-brands fa-square-whatsapp'
              />
              Jogo Livre BR
            </Link>
          </div>
          <div className='w-full flex items-start justify-center bg-[url("/images/backgroun_footer_2.avif")] bg-cover bg-no-repeat'>
            <Link
              className='flex items-center gap-2 text-center text-sm font-semibold text-violet-600 hover:text-violet-400 mt-8 duration-500 bg-black px-3 py-1 rounded-lg hover:bg-slate-700 border border-violet-700 hover:border-yellow-400'
              href={'https://www.facebook.com/jogolivreBR'}
              target='_blank'
            >
              <Icon
                className='w-7'
                icon='fa-brands fa-twitch'
              />
              Jogo Livre BR
            </Link>
          </div>
        </div>
        <div>
        </div>
      </footer>
    </div>
  );
}