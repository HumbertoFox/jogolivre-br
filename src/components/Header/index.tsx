'use client';

import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Icon from '@/components/Icons';

export default function HeaderComponents() {
    const currentYear = new Date().getFullYear();
    const startYear = 2017;
    const yearsActive = currentYear - startYear;
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    useEffect(() => {
        const logo = document.querySelector('.logo');
        const links = document.querySelectorAll('.link');

        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        };

        if (logo) {
            gsap.fromTo(
                logo,
                {
                    scale: 1,
                    opacity: 1,
                },
                {
                    scale: 1.1,
                    opacity: 0.8,
                    repeat: -1,
                    yoyo: true,
                    duration: 0.8,
                    ease: 'power1.inOut',
                }
            );
        };

        links.forEach((link) => {
            link.addEventListener('mouseenter', () => {
                gsap.to(link, {
                    scale: 1.2,
                    color: '#FFA500',
                    textShadow: '0 0 8px #FFA500, 0 0 15px #FFA500',
                    rotationX: '10deg',
                    rotationY: '10deg',
                    duration: 0.3,
                    ease: 'power1.out',
                });
            });

            link.addEventListener('mouseleave', () => {
                gsap.to(link, {
                    scale: 1,
                    color: isDarkMode ? '#ffffff' : '#000000',
                    textShadow: 'none',
                    rotationX: '0deg',
                    rotationY: '0deg',
                    duration: 0.3,
                    ease: 'power1.out',
                });
            });
        });
    }, [isDarkMode]);
    return (
        <div className='w-full flex justify-center'>
            <header
                className='w-full max-w-screen-2xl flex justify-between items-center px-4 py-2'
            >
                <Image
                    className='logo'
                    src={'/images/logotipo.avif'}
                    alt='Logo Jogo Livre'
                    width={110}
                    height={110}
                />
                <div>
                    <button
                        className='flex items-center gap-3 ml-auto'
                        type='button'
                        onClick={toggleDarkMode}
                    >
                        {isDarkMode ? 'Branco' : 'Preto'}
                        <Icon
                            className='w-4 h-4'
                            icon={isDarkMode
                                ? 'fa-solid fa-sun'
                                : 'fa-solid fa-moon'
                            }
                        />
                    </button>
                    <h2 className='text-base text-center font-bold md:text-2xl cursor-default'>
                        A {yearsActive} Anos o Canal da Família!
                    </h2>
                    <nav className='gap-4 justify-center hidden md:flex'>
                        <Link
                            className='link'
                            href={'#youtube'}
                        >
                            Vídeos
                        </Link>

                        <Link
                            className='link'
                            href={'#sobre'}
                        >
                            Sobre Nós
                        </Link>

                        <Link
                            className='link'
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