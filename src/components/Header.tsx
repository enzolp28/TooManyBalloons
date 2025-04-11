'use client'
import Image from "next/image"
import ContactButton from "./ContactButton"

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className="border-b border-gray-400 p-2 flex justify-between">
            <div className="flex items-center ml-4">
                <Image src='/images/logo-balloons.png' width={50} height={50} alt={'Logo'} />
                <span className="font-bold">Too Many Balloons</span>
            </div>
            <div className="flex items-center gap-15 mr-5 ">
                <span className="font-semibold">Accueil</span>
                <span className="font-semibold">Service</span>
                <ContactButton text={"Contact"} className={"py-1.5 px-8 ml-5"} />
            </div>
        </header>
    )
}