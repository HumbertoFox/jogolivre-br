import fs from 'fs';
import path from 'path';
import TwoGamerComponentClient from '@/components/twogamer/index-client';

export default async function TwoGamerComponentPage() {
    const dirPath = path.join(process.cwd(), 'public', 'images', 'twogamer');

    let images: { url: string; name: string }[] = [];
    try {
        const files = await fs.promises.readdir(dirPath);

        images = files
            .filter((filename) => /\.(jpg|jpeg|png|webp|svg|gif)$/i.test(filename))
            .map((filename) => ({
                url: `/images/twogamer/${filename}`,
                name: filename,
            }));
    } catch (error) {
        console.error('Erro ao ler a pasta public/images/twogamer:', error);
    }
    return (
        <TwoGamerComponentClient images={images} />
    );
}