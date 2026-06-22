'use client';

import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { useEffect, useRef } from 'react';

export default function AboutClient() {
    const sectionRef = useRef(null);
    const h1Ref = useRef(null);
    const spanRef = useRef(null);
    const h2Ref = useRef(null);
    const h3Ref = useRef(null);
    const span0Ref = useRef(null);
    const span1Ref = useRef(null);
    const span2Ref = useRef(null);
    const span3Ref = useRef(null);
    const span4Ref = useRef(null);
    const span5Ref = useRef(null);
    const span6Ref = useRef(null);
    const span7Ref = useRef(null);
    const span8Ref = useRef(null);
    const span9Ref = useRef(null);
    const span10Ref = useRef(null);
    const span11Ref = useRef(null);
    const span12Ref = useRef(null);
    const span13Ref = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);

        const isMobile = window.matchMedia('(max-width: 640px)').matches;

        if (!isMobile) {
            const sectionSobre = sectionRef.current;
            const h1Sobre = h1Ref.current;
            const spanSobre = spanRef.current;
            const h2Sobre = h2Ref.current;
            const h3Sobre = h3Ref.current;
            const spans = [
                span0Ref.current,
                span1Ref.current,
                span2Ref.current,
                span3Ref.current,
                span4Ref.current,
                span5Ref.current,
                span6Ref.current,
                span7Ref.current,
                span8Ref.current,
                span9Ref.current,
                span10Ref.current,
                span11Ref.current,
                span12Ref.current,
                span13Ref.current,
            ];

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionSobre,
                    start: 'top center',
                },
            });

            tl.fromTo(h1Sobre, {
                opacity: 0,
                y: 300,
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
            });

            tl.fromTo(spanSobre, {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 1,
            });

            tl.fromTo(h3Sobre, {
                opacity: 0,
                y: -300,
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
            });

            tl.fromTo(h2Sobre, {
                opacity: 0,
                y: 300,
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
            });

            spans.forEach((span, index) => {
                tl.fromTo(span, {
                    opacity: 0,
                    scale: 1.2,
                }, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.1,
                    delay: index * 0.01,
                });
            });
        };
    }, []);
    return (
        <section
            id="about"
            className="min-w-full min-h-[70svh] flex flex-col gap-10 items-center pt-24 px-8"
            ref={sectionRef}
        >
            <h1
                className="relative text-3xl text-center text-orange-400 opacity-0 capitalize cursor-default"
                ref={h1Ref}
            >
                Sobre nós!
                <span
                    className="absolute left-0 text-3xl text-center text-green-600 opacity-0 capitalize cursor-default"
                    ref={spanRef}
                >
                    Sobre nós!
                </span>
            </h1>
            <h2
                className="text-2xl text-center text-orange-400 capitalize opacity-0 cursor-default"
                ref={h3Ref}
            >
                <strong>Jogo Livre BR</strong> O Canal da Família
            </h2>
            <h3
                className="text-2xl text-center cursor-default"
                ref={h2Ref}
            >
                Voltado para Diversão do Público Brasileiro
            </h3>
            <p className="text-sm sm:text-2xl text-justify cursor-default">
                <span ref={span0Ref} className="opacity-0">Gamer é uma palavra usada para definir uma pessoa que joga vídeo game.</span>
                <span ref={span1Ref} className="opacity-0"> Ser gamer é muito mais complexo do simplesmente ter meia duzia de jogos,</span>
                <span ref={span2Ref} className="opacity-0"> gamer prefere ficar jogando vídeo game do que sair com amigos,</span>
                <span ref={span3Ref} className="opacity-0"> prefere virar a noite jogando um bom jogo do que dormir para no dia seguinte sair e fazer coisas do dia a dia,</span>
                <span ref={span4Ref} className="opacity-0"> gamer passa hora jogando,</span>
                <span ref={span5Ref} className="opacity-0"> o que torna uma pessoa gamer,</span>
                <span ref={span6Ref} className="opacity-0"> é o ponto de conexão feito entre a pessoa e o game como modo de diversão,</span>
                <span ref={span7Ref} className="opacity-0"> gamers jogam porque gostam de jogar e não porque viciam.</span>
                <span ref={span8Ref} className="opacity-0"> Pra ser um gamer é simples,</span>
                <span ref={span9Ref} className="opacity-0"> não precisa ter jogos com super gráficos,</span>
                <span ref={span10Ref} className="opacity-0"> muito pelo contrário,</span>
                <span ref={span11Ref} className="opacity-0"> um gamer joga basicamente qualquer jogo.</span>
                <span ref={span12Ref} className="opacity-0"> O que faz uma pessoa ser gamer,</span>
                <span ref={span13Ref} className="opacity-0"> é a paixão pelos vídeo games acima de tudo e ter os jogos como sua maior diversão.</span>
            </p>
        </section>
    );
}