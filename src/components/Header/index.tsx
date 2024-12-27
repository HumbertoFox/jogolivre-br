import Image from 'next/image';
import Link from 'next/link';

const ClassBorderLinks = 'font-semibold hover:text-orange-500 px-2 border-b-2 border-white hover:border-yellow-300 duration-500'

export default function HeaderComponents() {
    const currentYear = new Date().getFullYear();
    const startYear = 2017;
    const yearsActive = currentYear - startYear;
    return (
        <div className='w-full flex justify-center'>
            <header
                className='w-full max-w-screen-2xl flex justify-between items-center px-4 py-2'
            >
                <Image
                    src={'/images/logotipo.avif'}
                    alt='Logo Jogo Livre'
                    width={110}
                    height={110}
                />
                <div>
                    <h2 className='text-base text-center font-bold md:text-2xl'>
                        A {yearsActive} Anos o Canal da Família!
                    </h2>
                    <nav className='gap-3 justify-center hidden md:flex'>
                        <Link
                            className={ClassBorderLinks}
                            href={'#youtube'}
                        >
                            Vídeos
                        </Link>

                        <Link
                            className={ClassBorderLinks}
                            href={'#sobre'}
                        >
                            Sobre Nós
                        </Link>

                        <Link
                            className={ClassBorderLinks}
                            href={'#social'}
                        >
                            Redes Sociais
                        </Link>
                    </nav>
                </div>
            </header>
        </div>
    );
}