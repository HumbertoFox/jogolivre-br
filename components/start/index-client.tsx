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
    const divImageRef = useRef<(HTMLDivElement)[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number>(2);
    const positionClass = [
        'absolute flex w-lg h-full left-1/12 top-1/12',
        'absolute flex w-lg h-full left-1/2 -translate-x-1/2 top-1/2',
        'absolute flex w-lg h-full right-1/12 top-3/4',
    ];
    const imageClass = [
        'object-[-900px]',
        'object-[-300px]',
        'object-[-600px]',
    ];
    const handleClickDivImage = (index: number) => {
        setSelectedIndex(index);

        divImageRef.current.forEach((element, i) => {
            if (!element) return;

            if (i === index) {
                const isScaledUp = element.dataset.scaled === 'true';
                gsap.to(element, {
                    scale: isScaledUp ? 1 : 1.2,
                    duration: 0.5,
                    ease: "power2.out",
                });
                element.dataset.scaled = isScaledUp ? 'false' : 'true';
            } else {
                gsap.to(element, {
                    scale: 1,
                    duration: 0.5,
                    ease: "power2.out",
                });
                element.dataset.scaled = 'false';
            }
        });
    };
    useGSAP(() => {
        gsap.from(divImageRef.current, {
            opacity: 0,
            y: -300,
            duration: 3,
            stagger: 0.3,
            ease: "power3.out",
        });
    });
    return (
        <section
            style={{ backgroundImage: `url(${images[selectedIndex].url})` }}
            className={`relative min-w-full min-h-screen bg-cover bg-center transition-all duration-500`}
        >
            {images.map((img, index) => {
                return (
                    <div
                        key={img.url}
                        onClick={() => handleClickDivImage(index)}
                        ref={(el) => { divImageRef.current[index] = el! }}
                        className={`cursor-pointer ${positionClass[index]}`}
                    >
                        <Image
                            src={img.url}
                            alt={img.name}
                            width={1920}
                            height={1080}
                            className={`w-full object-cover ${imageClass[index]}`}
                        />
                    </div>
                );
            })}
        </section>
    );
}