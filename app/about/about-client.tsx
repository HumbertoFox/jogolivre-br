'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function AboutClient() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const h3Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const isMobile = window.matchMedia('(max-width: 640px)').matches;

        if (!isMobile && sectionRef.current) {
            const spans = sectionRef.current.querySelectorAll('.about-span');

            const ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top center',
                    },
                });

                tl.fromTo(h1Ref.current, { opacity: 0, y: 300 }, { opacity: 1, y: 0, duration: 1 })
                    .fromTo(spanRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5")
                    .fromTo(h3Ref.current, { opacity: 0, y: -300 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
                    .fromTo(h2Ref.current, { opacity: 0, y: 300 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
                    .fromTo(
                        spans,
                        { opacity: 0, scale: 1.2 },
                        { opacity: 1, scale: 1, duration: 1, stagger: 0.05 }
                    );
            }, sectionRef);

            return () => ctx.revert();
        }
    }, []);
    return (
        <section>
            <div
                id="about"
                className="min-w-full min-h-[70svh] flex flex-col gap-10 items-center pt-24 px-8"
                ref={sectionRef}
            >
                <h1
                    className="relative text-3xl text-center text-orange-400 opacity-100 md:opacity-0 capitalize cursor-default"
                    ref={h1Ref}
                >
                    Sobre nós!
                    <span
                        className="absolute left-0 text-3xl text-center text-green-600 opacity-100 md:opacity-0 capitalize cursor-default"
                        ref={spanRef}
                    >
                        Sobre nós!
                    </span>
                </h1>
                <h2
                    className="text-2xl text-center text-orange-400 capitalize opacity-100 md:opacity-0 cursor-default"
                    ref={h2Ref}
                >
                    <strong>Jogo Livre BR</strong> O Canal da Família
                </h2>
                <h3
                    className="text-2xl text-center cursor-default"
                    ref={h3Ref}
                >
                    Voltado para Diversão do Público Brasileiro
                </h3>
                <p className="text-sm sm:text-2xl text-justify cursor-default">
                    <span className="about-span opacity-100 md:opacity-0">Gamer é uma palavra usada para definir uma pessoa que joga vídeo game.</span>
                    <span className="about-span opacity-100 md:opacity-0"> Ser gamer é muito mais complexo do simplesmente ter meia duzia de jogos,</span>
                    <span className="about-span opacity-100 md:opacity-0"> gamer prefere ficar jogando vídeo game do que sair com amigos,</span>
                    <span className="about-span opacity-100 md:opacity-0"> prefere virar a noite jogando um bom jogo do que dormir para no dia seguinte sair e fazer coisas do dia a dia,</span>
                    <span className="about-span opacity-100 md:opacity-0"> gamer passa hora jogando,</span>
                    <span className="about-span opacity-100 md:opacity-0"> o que torna uma pessoa gamer,</span>
                    <span className="about-span opacity-100 md:opacity-0"> é o ponto de conexão feito entre a pessoa e o game como modo de diversão,</span>
                    <span className="about-span opacity-100 md:opacity-0"> gamers jogam porque gostam de jogar e não porque viciam.</span>
                    <span className="about-span opacity-100 md:opacity-0"> Pra ser um gamer é simples,</span>
                    <span className="about-span opacity-100 md:opacity-0"> não precisa ter jogos com super gráficos,</span>
                    <span className="about-span opacity-100 md:opacity-0"> muito pelo contrário,</span>
                    <span className="about-span opacity-100 md:opacity-0"> um gamer joga basicamente qualquer jogo.</span>
                    <span className="about-span opacity-100 md:opacity-0"> O que faz uma pessoa ser gamer,</span>
                    <span className="about-span opacity-100 md:opacity-0"> é a paixão pelos vídeo games acima de tudo e ter os jogos como sua maior diversão.</span>
                </p>
            </div>
        </section>
    );
}