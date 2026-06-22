'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);

type ImageBlob = {
    url: string;
    name: string;
};

type Props = {
    images: ImageBlob[];
};

export default function StartComponentClient({ images }: Props) {
    const divImageRef = useRef<(HTMLDivElement | null)[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number>(2);
    const positionClass = [
        'mt-20',
        'mt-[512px] -mb-20',
        'mt-60',
    ];
    const imageClass = [
        'object-[-900px]',
        'object-[-300px]',
        'object-[-600px]',
    ];
    const preloadImage = (src: string) => {
        return new Promise((resolve) => {
            const img = new window.Image();
            img.src = src;
            img.onload = () => resolve(true);
        });
    };

    const handleClickDivImage = async (index: number) => {
        const url = images[index].url;
        await preloadImage(url);
        setSelectedIndex(index);

        divImageRef.current.forEach((element, i) => {
            if (!element) return;

            if (i === index) {
                const isScaledUp = element.dataset.scaled === 'true';
                gsap.to(element, {
                    scale: isScaledUp ? 1 : 1.2,
                    zIndex: 2,
                    duration: 0.5,
                    ease: "power2.out",
                });
                element.dataset.scaled = isScaledUp ? 'false' : 'true';
            } else {
                gsap.to(element, {
                    scale: 1,
                    zIndex: 1,
                    duration: 0.5,
                    ease: "power2.out",
                });
                element.dataset.scaled = 'false';
            }
        });
    };
    useGSAP(() => {
        gsap.fromTo(divImageRef.current, {
            opacity: 0,
            y: -300,
        }, {
            opacity: 1,
            y: 0,
            duration: 3,
            stagger: 0.3,
            ease: "power3.out"
        });
    });
    return (
        <section
            style={{ backgroundImage: `url(${images[selectedIndex].url})` }}
            className="relative flex flex-row-reverse gap-6 justify-center min-w-full min-h-screen bg-cover bg-fixed transition-all duration-500 ease-in-out"
        >
            {images.map((img, index) => {
                return (
                    <div
                        key={img.url}
                        onClick={() => handleClickDivImage(index)}
                        ref={(el) => { divImageRef.current[index] = el }}
                        className={`flex w-lg h-[924px] cursor-pointer z-1 opacity-0 ${positionClass[index]}`}
                    >
                        <Image
                            src={img.url}
                            alt={img.name}
                            width={1920}
                            height={1080}
                            className={`w-full object-cover opacity-40 ${imageClass[index]}`}
                        />
                    </div>
                );
            })}
        </section>
    );
}