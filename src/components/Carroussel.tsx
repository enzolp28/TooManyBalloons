'use client'

import Image from "next/image"
import { useState } from "react"

type Props = {}

const images: string[] = [
    "/images/ballon-1.jpg",
    "/images/ballon-2.jpg",
    "/images/ballon-3.jpg",
]


export default function ({ }: Props) {
    const [index, setIndex] = useState(0)
    const length: number = images.length

    const nextSlide = (): void => {
        setIndex(prev => (prev + 1) % length)
    }

    const prevSlide = (): void => {
        setIndex(prev => (prev - 1 + length) % length)
    }
    return (
        <div>
            <button onClick={prevSlide}> ⬅️ </button>
            <div>
                <Image src={images[index]} alt={images[index]} width={600}
                    height={400}
                />
            </div>
            <button onClick={nextSlide}>➡️</button>
        </div>
    )
}