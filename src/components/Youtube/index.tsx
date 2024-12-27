'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    useEffect,
    useRef
} from 'react';

export default function YoutubeComponents() {
    const divRef = useRef(null);
    const h1Ref = useRef(null);
    const iframeRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

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
    }, []);
    return (
        <div
            className='w-full min-h-screen flex justify-center'
            id='youtube'
            ref={divRef}
        >
            <section className='w-full max-w-screen-2xl min-h-full flex flex-col justify-around'>
                <h1
                    className='text-5xl text-center text-red-500 uppercase'
                    ref={h1Ref}
                >
                    <div>
                        Jogos e Diversões Para o Público
                    </div>
                    <div>
                        Brasileiro
                    </div>
                </h1>
                <div className='flex justify-around'>
                    <iframe
                        width='940'
                        height='485'
                        src='https://www.youtube.com/embed/XyR75OhMfjA'
                        title='Crônicas de Nárnia (GBA)-PT-BR First play#01'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        referrerPolicy='strict-origin-when-cross-origin'
                        allowFullScreen
                        ref={iframeRef}
                    />
                </div>
            </section>
        </div>
    );
}