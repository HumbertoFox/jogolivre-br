'use client';

import Link from 'next/link';
import Icon from '@/components/Icons';
import {
    useEffect,
    useRef
} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FooterComponents() {
    const footerRef = useRef(null);
    const h4Ref = useRef(null);
    const divFaceRef = useRef(null);
    const divWhatsRef = useRef(null);
    const divTwichRef = useRef(null);
    const linkFaceRef = useRef(null);
    const linkWhatsRef = useRef(null);
    const linkTwichRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const footer = footerRef.current;
        const h4Footer = h4Ref.current;
        const divFace = divFaceRef.current;
        const divWhats = divWhatsRef.current;
        const divTwich = divTwichRef.current;
        const linkFace = linkFaceRef.current;
        const linkWhats = linkWhatsRef.current;
        const linkTwich = linkTwichRef.current;

        gsap.fromTo(h4Footer, {
            opacity: 0,
            y: 300,
            color: '#000',
        }, {
            opacity: 1,
            y: 0,
            color: '#ef4444',
            duration: 1,
            scrollTrigger: {
                trigger: footer,
                start: 'top center'
            },
        });

        gsap.fromTo(divFace, {
            opacity: 0,
            x: 300,
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: footer,
                start: 'top center'
            },
        });

        gsap.fromTo(divWhats, {
            opacity: 0,
            y: -300,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: footer,
                start: 'top center'
            },
        });

        gsap.fromTo(divTwich, {
            opacity: 0,
            x: -300,
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: footer,
                start: 'top center'
            },
        });

        gsap.fromTo(linkFace, {
            opacity: 0,
            y: -300,
            x: 100,
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: footer,
                start: 'top center'
            },
        });

        gsap.fromTo(linkWhats, {
            opacity: 0,
            y: -300,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: footer,
                start: 'top center'
            },
        });

        gsap.fromTo(linkTwich, {
            opacity: 0,
            y: -300,
            x: -100,
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: footer,
                start: 'top center'
            },
        });
    }, []);
    return (
        <footer
            className='w-full flex flex-col justify-between pb-3'
            id='social'
            ref={footerRef}
        >
            <h4
                className='text-5xl text-red-500 text-center py-14 uppercase'
                ref={h4Ref}
            >
                Redes Sociais
            </h4>
            <div className='w-full min-h-[640px] flex'>
                <div
                    className='w-full flex items-start justify-center bg-[url("/images/backgroun_footer_0.avif")] bg-cover bg-no-repeat'
                    ref={divFaceRef}
                >
                    <Link
                        className='flex items-center gap-2 text-center text-sm font-semibold text-blue-600 hover:text-blue-400 mt-8 duration-500 bg-black px-3 py-1 rounded-lg hover:bg-slate-700 border border-blue-700 hover:border-yellow-400'
                        href={'https://www.facebook.com/jogolivreBR'}
                        target='_blank'
                        ref={linkFaceRef}
                    >
                        <Icon
                            className='w-7 h-7'
                            icon='fa-brands fa-square-facebook'
                        />
                        Jogo Livre BR
                    </Link>
                </div>
                <div
                    className='w-full flex items-start justify-center bg-[url("/images/backgroun_footer_1.avif")] bg-cover bg-no-repeat'
                    ref={divWhatsRef}
                >
                    <Link
                        className='flex items-center gap-2 text-center text-sm font-semibold text-green-600 hover:text-green-400 mt-8 duration-500 bg-black px-3 py-1 rounded-lg hover:bg-slate-700 border border-green-700 hover:border-yellow-400'
                        href={'https://api.whatsapp.com/send/?phone=5519992354659&text&type=phone_number&app_absent=0'}
                        target='_blank'
                        ref={linkWhatsRef}
                    >
                        <Icon
                            className='w-7 h-7'
                            icon='fa-brands fa-square-whatsapp'
                        />
                        Jogo Livre BR
                    </Link>
                </div>
                <div
                    className='w-full flex items-start justify-center bg-[url("/images/backgroun_footer_2.avif")] bg-cover bg-no-repeat'
                    ref={divTwichRef}
                >
                    <Link
                        className='flex items-center gap-2 text-center text-sm font-semibold text-violet-600 hover:text-violet-400 mt-8 duration-500 bg-black px-3 py-1 rounded-lg hover:bg-slate-700 border border-violet-700 hover:border-yellow-400'
                        href={'https://www.facebook.com/jogolivreBR'}
                        target='_blank'
                        ref={linkTwichRef}
                    >
                        <Icon
                            className='w-7 h-7'
                            icon='fa-brands fa-twitch'
                        />
                        Jogo Livre BR
                    </Link>
                </div>
            </div>
            <div>
            </div>
        </footer>
    );
}