import React from 'react'
import Link from "next/link"

type Props = {}

export default function ContactButton({ }: Props) {
    return (
        <Link href={'/contact'}>
            <span className="bg-red-500 text-white py-1.5 rounded-3xl px-8 ml-5 font-bold">
                Contact
            </span>
        </Link>
    )
}