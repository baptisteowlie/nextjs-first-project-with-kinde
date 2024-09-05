"use client"

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";


const navLinks = [
    {
        href: '/',
        label: 'Home',
    },
    {
        href: '/posts',
        label: 'Posts',
    },
    {
        href: '/create-post',
        label: 'Create post',
    },
]
export default function Header() {

    const path = usePathname()
    return <header className="flex justify-between px-8 my-4 border-b">
        <Image
            src="https://bytegrad.com/course-assets/youtube/example-logo.png"
            alt="Logo"
            width="35"
            height="35"
            className="w-[35px] h-[35px]"
        ></Image>
        <nav >
            <ul className="flex space-x-2">
                {
                    navLinks.map((link) => (
                        <li key={link.href}>
                            <Link className={` ${path === link.href ? 'text-zinc-900' : 'text-zinc-400'}`} href={link.href}>{link.label}</Link>
                        </li>
                    ))
                }
                <li>
                <LogoutLink>Log out</LogoutLink></li>
            </ul>
        </nav>
    </header>
}