export default function YoutubeComponents() {
    return (
        <div
            className='w-full min-h-screen flex justify-center'
            id='youtube'
        >
            <section className='w-full max-w-screen-2xl min-h-full flex flex-col justify-around'>
                <h1 className='text-5xl text-center text-red-500 uppercase'>
                    <div>
                        Jogos e Diversões Para o Público
                    </div>
                    <div>
                        Brasileiro
                    </div>
                </h1>
                <div className='flex justify-center'>
                    <iframe
                        width='940'
                        height='485'
                        src='https://www.youtube.com/embed/XyR75OhMfjA'
                        title='Crônicas de Nárnia (GBA)-PT-BR First play#01'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        referrerPolicy='strict-origin-when-cross-origin'
                        allowFullScreen
                    />
                </div>
            </section>
        </div>
    );
}