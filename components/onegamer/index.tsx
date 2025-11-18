import { list } from '@vercel/blob';
import OneGamerComponentClient from '@/components/onegamer/index-client';

export default async function OneGamerComponentPage() {
    const { blobs } = await list({ prefix: 'onegamer/' });

    const images = blobs
        .filter(blob => /\.\w+$/.test(blob.pathname))
        .map((blob) => ({
            url: blob.url,
            name: blob.pathname.replace('onegamer/', '')
        }));
    return (
        <OneGamerComponentClient images={images} />
    );
}