'use client';

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import AppLogoIcon from '@/components/app-logo-icon';
import { MonitorCog, Moon, Sun } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { FaSquareFacebook, FaSquareWhatsapp, FaSquareYoutube, FaTwitch } from "react-icons/fa6";
import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

export default function HeaderNavigationMenu() {
    const pathname = usePathname();
    const isMobile = useIsMobile();
    const { setTheme, theme } = useTheme();
    const headerRef = useRef<HTMLHeadElement>(null);
    const getButtonStyle = (target: string) =>
        `w-full flex flex-row items-center gap-2 transition-colors ${theme === target
            ? "bg-accent text-primary"
            : "hover:bg-muted"
        }`;
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.logo', {
                opacity: 0,
                scale: 0.5,
            }, {
                opacity: 1,
                scale: 1,
                duration: 2,
                ease: 'elastic.out(2, 1)'
            });

            gsap.fromTo('.link-item', {
                opacity: 0,
                x: -50,
                rotation: -15
            }, {
                opacity: 1,
                x: 0,
                rotation: 0,
                duration: 1,
                ease: 'back.out(1.7)',
                stagger: 0.25,
                delay: 0.4
            });
        }, headerRef);

        return () => ctx.revert();
    }, []);
    return (
        <header
            ref={headerRef}
            className="fixed w-full flex justify-between pt-3 px-3 pb-0.5 md:flex-row-reverse bg-transparent z-50">
            <Link
                href="/"
                className="hidden size-16 logo opacity-0 md:block"
            >
                <AppLogoIcon />
            </Link>
            <NavigationMenu viewport={isMobile}>
                <NavigationMenuList className="flex-wrap">
                    <NavigationMenuItem className="link-item opacity-0">
                        <NavigationMenuTrigger>Inicio</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                                            href="/"
                                        >
                                            <div className="flex">
                                                <AppLogoIcon className="w-24" />
                                            </div>
                                            <span className="text-muted-foreground text-sm leading-tight">
                                                Beautifully designed components built with Tailwind CSS.
                                            </span>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem
                                    href={pathname === '/about' ? '#about' : '/about#about'}
                                    title="Sobre Nós"
                                >
                                    Voltado para Diversão do Público Brasileiro
                                </ListItem>
                                <ListItem
                                    href={pathname === '/about' ? '#objective' : '/about#objective'}
                                    title="Objetivo"
                                >
                                    Entretenimento e bom papo.
                                </ListItem>
                                <ListItem
                                    href={pathname === '/about' ? '#who_we_are' : '/about#who_we_are'}
                                    title="Quem Somos"
                                >
                                    Conheça nossa história e o propósito do canal.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hidden link-item opacity-0 md:block">
                        <NavigationMenuTrigger>Sociais</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-72 gap-4">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link href="#" className="group/twitch">
                                            <div className="flex items-center gap-2 font-medium">
                                                <FaTwitch className="size-6 transition-colors group-hover/twitch:text-purple-500" />
                                                <span className="transition-colors group-hover/twitch:text-purple-500">Twitch</span>
                                            </div>
                                            <div className="text-muted-foreground">
                                                Sega-nos na Twitch.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="https://discord.com/invite/suVCpzB"
                                            target="_blank"
                                            className="group/discord"
                                        >
                                            <div className="flex items-center gap-2 font-medium">
                                                <FaSquareYoutube className="size-6 transition-colors group-hover/discord:text-indigo-500" />
                                                <span className="transition-colors group-hover/discord:text-indigo-500">Discord</span>
                                            </div>
                                            <div className="text-muted-foreground">
                                                Nosso grupo no Discord.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="https://www.youtube.com/channel/UCz4oJ57gaGz48TbwTwFvS6w"
                                            target="_blank"
                                            className="group/youtube"
                                        >
                                            <div className="flex items-center gap-2 font-medium">
                                                <FaSquareYoutube className="size-6 transition-colors group-hover/youtube:text-red-500" />
                                                <span className="transition-colors group-hover/youtube:text-red-500">Youtube</span>
                                            </div>
                                            <div className="text-muted-foreground">
                                                Curta comente e compartilhe nossos vídeos.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="https://api.whatsapp.com/send/?phone=5519992354659&text&type=phone_number&app_absent=0"
                                            target="_blank"
                                            className="group/whatsapp"
                                        >
                                            <div className="flex items-center gap-2 font-medium">
                                                <FaSquareWhatsapp className="size-6 transition-colors group-hover/whatsapp:text-green-500" />
                                                <span className="transition-colors group-hover/whatsapp:text-green-500">Whatsapp</span>
                                            </div>
                                            <div className="text-muted-foreground">
                                                Contate-nos pelo Whatsapp.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="https://www.facebook.com/jogolivreBR"
                                            target="_blank"
                                            className="group/facebook"
                                        >
                                            <div className="flex items-center gap-2 font-medium">
                                                <FaSquareFacebook className="size-6 transition-colors group-hover/facebook:text-blue-500" />
                                                <span className="transition-colors group-hover/facebook:text-blue-500">Facebook</span>
                                            </div>
                                            <div className="text-muted-foreground">
                                                Siga nassa página do Facebook.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hidden link-item opacity-0 md:block">
                        <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-48 gap-4">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">Components</Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">Documentation</Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">Blocks</Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="link-item opacity-0">
                        <NavigationMenuTrigger>Temas</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid md:max-w-24">
                                <li className="flex flex-row gap-6 md:gap-1.5 md:flex-col">
                                    <NavigationMenuLink asChild>
                                        <button type="button" onClick={() => setTheme("light")} className={getButtonStyle("light")}>
                                            <Sun />
                                            Claro
                                        </button>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <button type="button" onClick={() => setTheme("system")} className={getButtonStyle("system")}>
                                            <MonitorCog />
                                            Sistema
                                        </button>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <button type="button" onClick={() => setTheme("dark")} className={getButtonStyle("dark")}>
                                            <Moon />
                                            Escuro
                                        </button>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
}