'use client';

import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import {
    useEffect,
    useRef
} from 'react';


export default function SobreComponents() {
    const divRef = useRef(null);
    const h3Ref = useRef(null);
    const pRef = useRef(null);
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
            const divSobre = divRef.current;
            const h3Sobre = h3Ref.current;
            const pSobre = pRef.current;
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
                    trigger: divSobre,
                    start: 'top center',
                },
            });

            tl.fromTo(h3Sobre, {
                opacity: 0,
                y: 300,
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
            });

            tl.fromTo(pSobre, {
                opacity: 0,
                y: -300,
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
        <div
            className='w-full min-h-[50vh] sm:min-h-screen flex justify-center'
            id='sobre'
            ref={divRef}
        >
            <section className='w-full max-w-screen-2xl min-h-full flex flex-col justify-evenly items-center px-4 py-2 mx-auto'>
                <h3
                    className='text-2xl sm:text-5xl text-center text-red-500 uppercase opacity-0 cursor-default'
                    ref={h3Ref}
                >
                    <strong>Jogo Livre BR</strong> O Canal da Família
                </h3>
                <p
                    className='text-base sm:text-3xl text-center cursor-default'
                    ref={pRef}
                >
                    Voltado para Diversão do Público Brasileiro
                </p>
                <p className='text-sm sm:text-2xl text-justify cursor-default'>
                    <span ref={span0Ref}>Gamer é uma palavra usada para definir uma pessoa que joga vídeo game.</span>
                    <span ref={span1Ref}> Ser gamer é muito mais complexo do simplesmente ter meia duzia de jogos,</span>
                    <span ref={span2Ref}> gamer prefere ficar jogando vídeo game do que sair com amigos,</span>
                    <span ref={span3Ref}> prefere virar a noite jogando um bom jogo do que dormir para no dia seguinte sair e fazer coisas do dia a dia,</span>
                    <span ref={span4Ref}> gamer passa hora jogando,</span>
                    <span ref={span5Ref}> o que torna uma pessoa gamer,</span>
                    <span ref={span6Ref}> é o ponto de conexão feito entre a pessoa e o game como modo de diversão,</span>
                    <span ref={span7Ref}> gamers jogam porque gostam de jogar e não porque viciam.</span>
                    <span ref={span8Ref}> Pra ser um gamer é simples,</span>
                    <span ref={span9Ref}> não precisa ter jogos com super gráficos,</span>
                    <span ref={span10Ref}> muito pelo contrário,</span>
                    <span ref={span11Ref}> um gamer joga basicamente qualquer jogo.</span>
                    <span ref={span12Ref}> O que faz uma pessoa ser gamer,</span>
                    <span ref={span13Ref}> é a paixão pelos vídeo games acima de tudo e ter os jogos como sua maior diversão.</span>
                </p>
            </section>
        </div>
    );
}