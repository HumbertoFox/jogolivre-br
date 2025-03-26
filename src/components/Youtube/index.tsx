'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef } from 'react';
import { EffectCoverflow, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

interface VideosItems {
    src: string;
    title: string;
};

const videosSlides: VideosItems[] = [
    { src: 'https://www.youtube.com/embed/mZIK9hg6irs', title: 'Jogo Livre BR Ediçao e Video (DANIEL Grupo Gameplays-MG)divulgação Canal' },
    { src: 'https://www.youtube.com/embed/XyR75OhMfjA', title: 'Crônicas de Nárnia (GBA)-PT-BR First play#01' },
    { src: 'https://www.youtube.com/embed/ixwzIbFT4WA', title: 'Como Testar Controle Joystick PS3 Original e Paralelo' },
    { src: 'https://www.youtube.com/embed/nu3Ep_oy_Ok', title: 'Como instalar e configurar TeamSpeak (2025).' },
    { src: 'https://www.youtube.com/embed/1YU_p3YmoaU', title: 'DIABLO 3 - COOP - PTBR CAÇADAS #01.' },
    { src: 'https://www.youtube.com/embed/QNxUvnleNzM', title: 'Borderlands 2 - COOP - PTBR #01.' },
    { src: 'https://www.youtube.com/embed/Vzjb5BxBK0c', title: 'Chasm The Rift - PTBR #01.' },
];

export default function YoutubeComponents() {
    const divRef = useRef(null);
    const h1Ref = useRef(null);
    const iframeRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const isMobile = window.matchMedia('(max-width: 640px)').matches;

        if (!isMobile) {
            const divYouTube = divRef.current;
            const h1YouTube = h1Ref.current;
            const iframeYouTube = iframeRef.current;

            gsap.fromTo(h1YouTube, {
                opacity: 0,
                y: 300,
                color: '#000',
            }, {
                opacity: 1,
                y: 0,
                color: '#ef4444',
                duration: 1,
                scrollTrigger: {
                    trigger: divYouTube,
                    start: 'top center',
                },
            });

            gsap.fromTo(iframeYouTube, {
                opacity: 0,
                y: -300,
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: divYouTube,
                    start: 'top center',
                },
            });
        };
    }, []);
    return (
        <div
            className='w-full min-h-[70vh] sm:min-h-screen flex justify-center'
            id='youtube'
            ref={divRef}
        >
            <section className='w-full max-w-screen-2xl min-h-full flex flex-col justify-around'>
                <h1
                    className='text-2xl sm:text-5xl text-center text-red-500 uppercase cursor-default'
                    ref={h1Ref}
                >
                    <div>
                        Jogos e Diversões Para o Público
                    </div>
                    <div>
                        Brasileiro
                    </div>
                </h1>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    keyboard={{
                        enabled: true,
                    }}
                    loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[
                        EffectCoverflow,
                        Keyboard,
                    ]}
                    className='w-full'
                    ref={iframeRef}
                >
                    {videosSlides.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex justify-center px-3 sm:px-0'>
                                <iframe
                                    width='940'
                                    height='485'
                                    src={item.src}
                                    title={item.title}
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                    referrerPolicy='strict-origin-when-cross-origin'
                                    allowFullScreen
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
}