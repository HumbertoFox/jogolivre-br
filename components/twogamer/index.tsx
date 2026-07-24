'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

const IMAGES = [
    {
        url: '/images/twogamer/2itrqjabvit41.jpg',
        name: 'Imagem Residente 1',
    },
    {
        url: '/images/twogamer/825FgcpyYGSvg6JLNxmy6D.jpg',
        name: 'Imagem Residente 2',
    },
    {
        url: '/images/twogamer/801-1674075896-1508425083.webp',
        name: 'Imagem Residente 3',
    },
    {
        url: '/images/twogamer/RE4HDProject Original.jpg',
        name: 'Imagem residente 4',
    },
    {
        url: '/images/twogamer/Resi-5.webp',
        name: 'Imagem Residente 5',
    },
    {
        url: '/images/twogamer/sielsfdhk1pa1.jpg',
        name: 'Imagem Residente 6',
    },
    {
        url: '/images/twogamer/1_tTDi7Q6rrQvUTGPV0XCljg.jpg',
        name: 'Imagem Residente 7',
    },
    {
        url: '/images/twogamer/re-village-main-menu-is-beautiful-v0-liv3tkl1gzlc1.webp',
        name: 'Imagem Residente 8',
    },
    {
        url: '/images/twogamer/ResidentEvilRequiemBanner-2.jpg',
        name: 'Imagem Residente 9',
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
        'mt-40',
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
        'object-[-550px]',
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