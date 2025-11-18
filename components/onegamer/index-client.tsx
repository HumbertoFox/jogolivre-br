'use client';

import Image from 'next/image';

type ImageBlob = {
    url: string;
    name: string;
};

type Props = {
    images: ImageBlob[];
};

export default function OneGamerComponentClient({ images }: Props) {
    const positionClass = [
        '-mt-40',
        'mt-20',
        '-mt-60',
    ];
    const imageClass = [
        'object-[-400px]',
        'object-[-30px]',
        'object-[-550px]',
    ];
    return (
        <section
            className="relative flex gap-6 justify-center min-w-full min-h-screen bg-cover transition-all duration-500 mt-"
        >
            {images.map((img, index) => {
                return (
                    <div
                        key={img.url}
                        className={`flex w-lg h-[924px] cursor-pointer z-1 ${positionClass[index]}`}
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