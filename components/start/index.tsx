import fs from 'fs';
import path from 'path';
import StartComponentClient from '@/components/start/index-client';

export default async function StartComponentPage() {
    const dirPath = path.join(process.cwd(), 'public', 'images', 'startpage');

    let images: { url: string; name: string }[] = [];
    try {
        const files = await fs.promises.readdir(dirPath);

        images = files
            .filter((filename) => /\.(jpg|jpeg|png|webp|svg|gif)$/i.test(filename))
            .map((filename) => ({
                url: `/images/startpage/${filename}`,
                name: filename,
            }));
    } catch (error) {
        console.error('Erro ao ler a pasta public/images/startpage:', error);
    }
    return (
        <StartComponentClient images={images} />
    );
}