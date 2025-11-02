'use client';

import Image from 'next/image';
import AppLogo from '@/public/images/logotipo.svg';
import { cn } from '@/lib/utils';

interface AppLogoIconProps {
    className?: string;
};

export default function AppLogoIcon({ className }: AppLogoIconProps) {
    return <Image
        src={AppLogo}
        alt='App Logo Jogo Livre BR'
        className={cn("size-full", className)}
    />
}