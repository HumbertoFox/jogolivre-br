'use client';

import { useState } from 'react';

const GAMES = [
    {
        id: '1',
        youtubeId: '2c-wmEwnXN0',
        title: 'PLACA DE CAPTURA COMO TIRAR DELAY E INPUT LAG E FIX SOM DELAY',
    },
    {
        id: '2',
        youtubeId: 'nu3Ep_oy_Ok',
        title: 'Como instalar e configurar TeamSpeak (2025).',
    },
    {
        id: '3',
        youtubeId: 'Q31S1dKuzmk',
        title: 'JOYTOKEY CONFIGURAR FÁCIL (2022)',
    },
    {
        id: '4',
        youtubeId: 'd8qbtMFx7ME',
        title: 'NAVEGADOR WEB WINDOWS XP 2020',
    },
    {
        id: '5',
        youtubeId: '_fgBvkHLQfE',
        title: 'MELHOR NAVEGADOR WINDOWS XP 2020(chrome 69 é possivel)',
    },
    {
        id: '6',
        youtubeId: 'mZIK9hg6irs',
        title: 'Jogo Livre BR Ediçao e Video (DANIEL Grupo Gameplays-MG)divulgação Canal',
    },
    {
        id: '7',
        youtubeId: 'otHic4xYrds',
        title: 'NAVEGADOR WEB WINDOWS XP 2020 FUNCIONAL E ATUAL',
    },
    {
        id: '8',
        youtubeId: '2SbtUcc1-R4',
        title: 'JOGO DE PS2 PARECIDO COM DARK SOULS',
    },
    {
        id: '9',
        youtubeId: 'fjU37bNbB14',
        title: 'NAVEGADOR WEB WINDOWS XP 2022 (BROWSER 2022 XP)',
    },
    {
        id: '10',
        youtubeId: '-etIYpy-L7o',
        title: 'Melhor Mod de Fallout 4 para XBOX GAME PASS (2025).',
    },
];

export default function TwoGamerVideoClient() {
    const [selectedVideo, setSelectedVideo] = useState(GAMES[0]);

    return (
        <div className="flex flex-col md:flex-row w-full h-screen overflow-hidden bg-slate-950 text-white font-sans">

            <main className="flex-1 order-1 md:order-2 h-full relative bg-black">
                {selectedVideo && (
                    <iframe
                        className="w-full h-full border-0"
                        src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&mute=0&rel=0&modestbranding=1`}
                        title={selectedVideo.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                )}
            </main>

            <aside className="order-2 md:order-1 w-full md:w-20 h-auto md:h-full bg-slate-900/90 backdrop-blur-md border-t md:border-t-0 md:border-r border-slate-800 flex flex-row md:flex-col items-center p-1 md:py-6 shadow-2xl z-20 shrink-0">

                <div className="mr-3 md:mr-0 md:mb-6 flex flex-col items-center shrink-0">
                    <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-orange-600 animate-pulse mb-0.5 md:mb-1" />
                    <span className="text-[9px] md:text-[10px] font-black tracking-widest text-orange-500 uppercase">
                        TV
                    </span>
                </div>

                <nav className="flex-1 w-full flex flex-row md:flex-col items-center gap-2 md:gap-3 overflow-x-auto md:overflow-y-auto scrollbar-none py-1 md:py-0 px-1 md:px-0">
                    {GAMES.map((video, index) => {
                        const isSelected = selectedVideo?.id === video.id;
                        const formattedNumber = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

                        return (
                            <button
                                key={video.id}
                                onClick={() => setSelectedVideo(video)}
                                title={video.title}
                                className={`w-11 h-10 md:w-14 md:h-12 rounded-xl transition-all duration-300 flex items-center justify-center border cursor-pointer shrink-0 ${isSelected
                                    ? 'bg-green-600/20 border-green-500 text-green-400 font-bold shadow-lg shadow-red-950/50 scale-85'
                                    : 'bg-slate-800/40 border-slate-700/50 text-slate-400 hover:bg-slate-800 hover:border-slate-500 hover:text-white'
                                    }`}
                            >
                                <span className="text-xs md:text-sm font-mono tracking-wider">
                                    {formattedNumber}
                                </span>
                            </button>
                        );
                    })}
                </nav>
            </aside>

        </div>
    );
}