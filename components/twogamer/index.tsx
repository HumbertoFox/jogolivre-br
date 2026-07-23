'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

const IMAGES = [
    {
        url: '/images/twogamer/PREVIEW_SCREENSHOT4_153785.webp',
        name: 'Imagem PREVIEW_SCREENSHOT4_153785',
    },
    {
        url: '/images/twogamer/re_hd_remaster1_chamada.webp',
        name: 'Imagem re_hd_remaster1_chamada',
    },
    {
        url: '/images/twogamer/re2_by_jhonyhebert-dc0i9kf.jpg',
        name: 'Imagem re2_by_jhonyhebert-dc0i9kf',
    },
    {
        url: '/images/twogamer/resident-evil-revelations-walkthrough-guide-4873-1504023451023.webp',
        name: 'Imagem resident-evil-revelations-walkthrough-guide-4873-1504023451023',
    },
    {
        url: '/images/twogamer/resident558456.jpg',
        name: 'Imagem Lucia resident558456',
    },
    {
        url: '/images/twogamer/residente1115.jpg',
        name: 'Imagem residente1115',
    },
];

export default function TwoGamerComponentClient() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);

    const positionClass = [
        '-mt-40',
        'mt-40',
        '-mt-60',
        '-mt-40',
        'mt-40',
        '-mt-60',
        'mt-40',
        '-mt-40',
    ];
    const imageClass = [
        'object-[-400px]',
        'object-[-30px]',
        'object-[-550px]',
        'object-[-400px]',
        'object-[-30px]',
        'object-[-550px]',
        'object-[-400px]',
        'object-[-30px]',
    ];
    const activeImageClass = [
        'absolute top-0 left-0 object-center animate-image-left',
        'absolute top-0 left-0 object-center animate-image-center',
        'absolute top-0 left-0 object-center animate-image-right',
        'absolute top-0 left-0 object-center animate-image-left',
        'absolute top-0 left-0 object-center animate-image-center',
        'absolute top-0 left-0 object-center animate-image-right',
        'absolute top-0 left-0 object-center animate-image-left',
        'absolute top-0 left-0 object-center animate-image-center',
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
                                min-w-full min-h-full object-cover
                                ${isActive ? activeImageClass[index] : imageClass[index]}
                            `}
                        />
                    </div>
                );
            })}
        </section>
    );
}