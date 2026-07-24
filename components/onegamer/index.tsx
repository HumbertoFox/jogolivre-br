'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

const IMAGES = [
    {
        url: '/images/onegamer/Brian_Heder_05.webp',
        murl: '/images/mobile/onegamer/Brian_Heder_Mobile_05.jpg',
        name: 'Imagem Brian Heder',
    },
    {
        url: '/images/onegamer/Jason_Duval_03.webp',
        murl: '/images/mobile/onegamer/Jason_Duval_Mobile_03.jpg',
        name: 'Imagem Jason Duval',
    },
    {
        url: '/images/onegamer/Lucia_Caminos_02.webp',
        murl: '/images/mobile/onegamer/Lucia_Caminos_Mobile_02.jpg',
        name: 'Imagem Lucia Caminos',
    },
];

export default function OneGamerComponentClient() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);

    const positionClass = [
        '-mt-40',
        'mt-40',
        '-mt-60',
    ];
    const imageClass = [
        'object-[-400px]',
        'object-[-30px]',
        'object-[-550px]',
    ];
    const activeImageClass = [
        'absolute top-0 left-0 object-center animate-image-left',
        'absolute top-0 left-0 object-center animate-image-center',
        'absolute top-0 left-0 object-center animate-image-right',
    ];
    function handleClick(index: number) {
        setActiveIndex(prev => (prev === index ? null : index));
    };
    return (
        <section
            ref={sectionRef}
            className='relative flex gap-6 justify-center min-w-full min-h-screen bg-[url("/images/background.avif")] lg:bg-[url("/images/background_all.avif")] bg-fixed bg-no-repeat 2xl:bg-cover'
        >
            {IMAGES.map((img, index) => {
                const isActive = activeIndex === index;
                return (
                    <div
                        key={img.url}
                        onClick={() => handleClick(index)}
                        className={`
                            flex w-lg h-[924px] cursor-pointer transition-transform
                            ${isActive ? 'z-10' : 'z-0'}
                            ${positionClass[index]}
                        `}
                    >
                        <Image
                            src={img.url}
                            alt={img.name}
                            width={1920}
                            height={1080}
                            className={`
                                hidden md:block min-w-full min-h-full object-cover
                                ${isActive ? activeImageClass[index] : imageClass[index]}
                            `}
                        />

                        <Image
                            src={img.murl}
                            alt={img.name}
                            width={1920}
                            height={1080}
                            className={`
                                md:hidden min-w-full min-h-full object-cover
                                ${isActive ? activeImageClass[index] : imageClass[index]}
                            `}
                        />
                    </div>
                );
            })}
        </section>
    );
}