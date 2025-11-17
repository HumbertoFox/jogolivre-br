import { list } from '@vercel/blob';
import StartComponentClient from '@/components/start/index-client';

export default async function StartComponentPage() {
    const { blobs } = await list({ prefix: 'startpage/' });

    const images = blobs
        .filter(blob => /\.\w+$/.test(blob.pathname))
        .map((blob) => ({
            url: blob.url,
            name: blob.pathname.replace('startpage/', '')
        }));
    return (
        <StartComponentClient images={images} />
    );
}