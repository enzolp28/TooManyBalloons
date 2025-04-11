import React from 'react'
import Link from "next/link"

type Props = {
    text?: string,
    className?: string
}

export default function ContactButton({ text, className }: Props) {
    return (
        <Link href={'/contact'}>
            <span className={`bg-red-500 text-white rounded-3xl font-bold ${className}`}>
                {text}
            </span>
        </Link>
    )
}
