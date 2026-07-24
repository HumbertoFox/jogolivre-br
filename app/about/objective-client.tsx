'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function ObjectiveClient() {
    const sectionTwoRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const isMobile = window.matchMedia('(max-width: 640px)').matches;

        if (!isMobile && sectionTwoRef.current) {
            const ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionTwoRef.current,
                        start: 'top center',
                    },
                });

                tl.fromTo(
                    titleRef.current,
                    { opacity: 0, y: 300 },
                    { opacity: 1, y: 0, duration: 1 }
                )
                    .fromTo(
                        '.objective-p',
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
            }, sectionTwoRef);

            return () => ctx.revert();
        }
    }, []);
    return (
        <section>
            <div
                id="objective"
                className="min-w-full min-h-[70svh] flex flex-col items-center pt-24 px-8 cursor-default"
                ref={sectionTwoRef}
            >
                <h2
                    className="relative text-3xl text-center text-orange-400 pb-24 opacity-100 md:opacity-0"
                    ref={titleRef}
                >
                    🎯 Nosso Objetivo!
                </h2>

                <p className="objective-p text-justify md:text-center text-sm sm:text-2xl opacity-100 md:opacity-0">
                    No Jogo Livre BR, nosso objetivo é democratizar o acesso aos games e provar que divertir-se e jogar RPGs incríveis não exige um PC gamer caro ou o console do momento.
                </p>

                <p className="objective-p text-justify md:text-center text-sm sm:text-2xl opacity-100 md:opacity-0">
                    Acreditamos que todo mundo merece explorar mundos fantásticos, viver grandes aventuras e curtir o melhor dos jogos, seja no celular, em sistemas emulados, no PC fraco ou até mesmo em aparelhos do dia a dia como uma TV Box.
                </p>

                <p className="objective-p text-justify md:text-center text-sm sm:text-2xl opacity-100 md:opacity-0">
                    🚀 O que você encontra por aqui:
                </p>

                <p className="objective-p text-justify md:text-center text-sm sm:text-2xl opacity-100 md:opacity-0">
                    🎮 RPGs & Jogos Leves: Seleções de games marcantes e envolventes que rodam lisos em hardware modesto.
                </p>

                <p className="objective-p text-justify md:text-center text-sm sm:text-2xl opacity-100 md:opacity-0">
                    📺 Emulação & Otimização: Dicas práticas e tutoriais para transformar seus dispositivos em verdadeiras centrais de jogos retrogaming.
                </p>

                <p className="objective-p text-justify md:text-center text-sm sm:text-2xl opacity-100 md:opacity-0">
                    🆓 Acesso Livre & Dicas Grátis: Conteúdo direto ao ponto para você descobrir novos títulos sem gastar nada ou gastando muito pouco.
                </p>

                <p className="objective-p text-justify md:text-center text-sm sm:text-2xl opacity-100 md:opacity-0">
                    🤝 Comunidade Apaixonada: Um espaço de troca e união para todos os apaixonados por cultura gamer, nostalgia e jogos acessíveis.
                </p>

                <p className="objective-p text-justify md:text-center text-sm sm:text-2xl opacity-100 md:opacity-0">
                    💡 Seja bem-vindo ao Jogo Livre BR! Inscreva-se, ative o sininho e venha jogar com a gente!
                </p>
            </div>
        </section>
    );
}