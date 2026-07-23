'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import ThreeBgImg from '@/public/images/backgroun_three.png';
import ThreeBgImgMobile from '@/public/images/mobile/backgroun_three_mobile.png';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

const IMAGES = [
    {
        url: '/images/threegamer/535693-vermintide-2-ps4.webp',
        name: '535693-vermintide-2-ps4',
    },
    {
        url: '/images/threegamer/maxresdefault.jpg',
        name: 'Imagem 2',
    },
    {
        url: '/images/threegamer/MV5BMDIzZjQ4MTctZjdmYy00NjE4LTllN2MtYzU5ZDg5MDU5NWZlXkEyXkFqcGc@._V1_.jpg',
        name: 'Imagem 3',
    },
];

export default function ThreeGamerComponentClient() {
    const sectionDivRef = useRef<HTMLDivElement>(null);
    const bgThreeRef = useRef<HTMLDivElement>(null);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionDivRef.current) return;

        const validImages = imageRefs.current.filter(Boolean);

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 800px)", () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionDivRef.current,
                        start: 'top top',
                        end: '+=180%',
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                    },
                });

                tl.fromTo(
                    validImages,
                    { opacity: 0, scale: 0.5, y: 100 },
                    { opacity: 1, scale: 1, y: 0, duration: 1, stagger: 0.2 }
                );

                tl.to(bgThreeRef.current, {
                    scale: 1.05,
                    opacity: 0.25,
                    ease: 'power1.inOut',
                }, 0);

                if (validImages.length >= 3) {
                    tl.to(validImages[0], { xPercent: -110, duration: 1 }, '<');
                    tl.to(validImages[2], { xPercent: 110, duration: 1 }, '<');
                }
            });

            mm.add("(max-width: 799px)", () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionDivRef.current,
                        start: 'top top',
                        end: '+=180%',
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                    },
                });

                tl.fromTo(
                    validImages,
                    { opacity: 0, scale: 0.5, y: 50 },
                    { opacity: 1, scale: 1, y: 0, duration: 1, stagger: 0.2 }
                );

                tl.to(bgThreeRef.current, {
                    scale: 1.05,
                    opacity: 0.25,
                    ease: 'power1.inOut',
                }, 0);

                if (validImages.length >= 3) {
                    tl.to(validImages[0], { yPercent: -105, duration: 1 }, '<');
                    tl.to(validImages[2], { yPercent: 105, duration: 1 }, '<');
                }
            });

        }, sectionDivRef);

        return () => ctx.revert();
    }, []);
    return (
        <section>
            <div
                ref={sectionDivRef}
                className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center"
            >
                <div
                    ref={bgThreeRef}
                    className="absolute inset-0 transition-transform pointer-events-none z-0"
                >
                    <Image
                        src={ThreeBgImg}
                        width={1920}
                        height={1280}
                        className="hidden md:block w-full h-full object-cover filter"
                        alt="Background"
                    />

                    <Image
                        src={ThreeBgImgMobile}
                        width={1080}
                        height={1920}
                        className="block md:hidden w-full h-full object-center filter"
                        alt="Background Mobile"
                        priority
                    />
                </div>

                {IMAGES.slice(0, 3).map((image, index) => (
                    <Image
                        key={image.url || index}
                        ref={(el) => { imageRefs.current[index] = el; }}
                        src={image.url}
                        width={1080}
                        height={1080}
                        alt={image.name || `Imagem ${index + 1}`}
                        className="absolute size-80 lg:size-96 object-center opacity-0"
                    />
                ))}

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-mono text-[10px] uppercase tracking-widest animate-bounce z-10">
                    Role para baixo
                </div>
            </div>
        </section>
    );
}