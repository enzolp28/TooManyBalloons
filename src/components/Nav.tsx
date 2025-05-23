'use client'
import Image from "next/image"
import ContactButton from "./ContactButton"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {}

export default function Nav({ }: Props) {
    const pathname = usePathname()

    console.log('paaaaath', pathname);

    return (
        <nav className="border-b border-gray-400 p-2 flex justify-between">
            <Link className="flex items-center ml-4" href={'/'}>
                <Image src='/images/logo-balloons.png' width={50} height={50} alt={'Logo'} />
                <span className="font-bold">Too Many Balloons</span>
            </Link>

            <div className="flex items-center gap-15 mr-5 ">
                <span className={`font-semibold ${pathname === '/' ? 'text-red-500 underline underline-offset-4' : ''}`}>
                    <Link href={'/'}>Accueil</Link>
                </span>
                <span className={`font-semibold ${pathname === '/service' ? 'text-red-500 underline underline-offset-4' : ''}`}>
                    <Link href={'/service'}>Nos Services</Link>
                </span>
                <ContactButton text={"Contact"} className={"py-2 px-8 ml-5 hover:bg-red-600"} />
            </div>
        </nav>
    )
}