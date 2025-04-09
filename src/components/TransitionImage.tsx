'use client'

import "@/styles/transitionImage.css"
import Image from "next/image"

type Props = {}

export default function TransitionImage({ }: Props) {
  return (
    <div className="disclosure">
      <div className="disclosure__img-container">
        <Image src='/images/green-balloons.png' width={400} height={500} alt={'Logo'} className="rounded-3xl" />
      </div>
      <div className="disclosure__img-container disclosure__img-container--2">
        <Image src='/images/orange-balloons.png' width={400} height={500} alt={'Logo'} className="rounded-3xl" />
      </div>
      <div className="disclosure__widget">
        <div className="disclosure__line">
          <div className="disclosure__line-circle">
            <Image src='/images/hand.svg' width={50} height={50} alt={'Logo'} />
          </div>
        </div>
        <input type="range" min="0" max="100" value="50" className="disclosure__range" />
      </div>
    </div>
  )
}