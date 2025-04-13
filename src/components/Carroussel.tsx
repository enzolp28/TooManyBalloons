'use client'

import Image from "next/image"
import { useState } from "react"
import "@/styles/carroussel.css"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const images: string[] = [
    "/images/ballon-1.jpg",
    "/images/ballon-2.jpg",
    "/images/ballon-3.jpg",
]

export default function Carroussel() {
    const [index, setIndex] = useState(0)

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className="carroussel__container">
            <button className="carroussel__button--left" onClick={prevSlide}>
                <FaChevronLeft />
            </button>

            <div className="carroussel__slider">
                <div
                    className="carroussel__track"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {images.map((src, i) => (
                        <div className="carroussel__slide" key={i}>
                            <Image
                                src={src}
                                alt={`Image ${i + 1}`}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <button className="carroussel__button--right" onClick={nextSlide}>
                <FaChevronRight />
            </button>
        </div>
    )
}
