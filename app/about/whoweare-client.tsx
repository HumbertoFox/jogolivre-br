'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function WhoWeAreClient() {
    const sectionThreeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const isMobile = window.matchMedia('(max-width: 640px)').matches;

        if (!isMobile && sectionThreeRef.current) {
            const ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionThreeRef.current,
                        start: 'top center',
                    },
                });

                tl.fromTo(
                    titleRef.current,
                    { opacity: 0, y: 300 },
                    { opacity: 1, y: 0, duration: 1 }
                )
                    .fromTo(
                        '.who-we-are-p',
                        { opacity: 0, scale: 0.85 },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.2,
                            stagger: 0.08,
                            ease: 'power1.out',
                        },
                        '-=0.4'
                    );
            }, sectionThreeRef);

            return () => ctx.revert();
        }
    }, []);
    return (
        <section>
            <div
                id="who_we_are"
                className="min-w-full min-h-[70svh] flex flex-col items-center py-24 px-8"
                ref={sectionThreeRef}
            >
                <h3
                    className="relative text-3xl text-center text-green-600 pb-24 opacity-100 md:opacity-0"
                    ref={titleRef}
                >
                    👾 Quem Somos!
                </h3>

                <p className="who-we-are-p text-center text-sm sm:text-2xl opacity-100 md:opacity-0">
                    Somos o Jogo Livre BR, um projeto feito por quem é apaixonado por games de verdade, movido pela nostalgia dos grandes clássicos e pela magia de explorar novos mundos.
                </p>

                <p className="who-we-are-p text-center text-sm sm:text-2xl opacity-100 md:opacity-0">
                    Surgimos da certeza de que a experiência gamer não deve ser limitada por placas de vídeo de última geração ou equipamentos caríssimos. Para nós, o que realmente importa é a história, a jogabilidade e a diversão.
                </p>

                <p className="who-we-are-p text-center text-sm sm:text-2xl opacity-100 md:opacity-0">
                    Somos jogadores reais testando, descobrindo e compartilhando as melhores alternativas de entretenimento digital para quem quer jogar no celular, no PC fraco, na TV Box ou em plataformas acessíveis.
                </p>

                <p className="who-we-are-p text-center text-sm sm:text-2xl opacity-100 md:opacity-0">
                    ⚔️ O que nos define:
                </p>

                <p className="who-we-are-p text-center text-sm sm:text-2xl opacity-100 md:opacity-0">
                    🕹️ Gamers sem Frescura: Valorizamos a essência do jogo, seja um RPG clássico de turnos, um indie marcante ou um título otimizado.
                </p>

                <p className="who-we-are-p text-center text-sm sm:text-2xl opacity-100 md:opacity-0">
                    🛠️ Curiosidade & Prática: Adoramos testar limites de dispositivos do cotidiano para provar que eles podem sim virar uma máquina de jogos.
                </p>

                <p className="who-we-are-p text-center text-sm sm:text-2xl opacity-100 md:opacity-0">
                    📣 Voz da Acessibilidade: Jogar é para todos. Queremos simplificar caminhos e facilitar o acesso ao universo gamer para toda a comunidade brasileira.
                </p>

                <p className="who-we-are-p text-center text-sm sm:text-2xl opacity-100 md:opacity-0">
                    &#34;O bom jogo é aquele que diverte, independentemente de onde ele esteja rodando.&#34;
                </p>

                <p className="who-we-are-p text-center text-sm sm:text-2xl opacity-100 md:opacity-0">
                    Junte-se ao Jogo Livre BR e faça parte dessa jornada com a gente!
                </p>
            </div>
        </section>
    );
}