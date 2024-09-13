"use client"

import { Cedarville_Cursive } from "next/font/google"
import Image from "next/image"

const cedarvilleCursive = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
})

export const Hero = () => {
  return (
    <div className="home__hero">
      <h1
        className={`text-2xl sm:text-4xl text-center text-bolder mt-6 mb-8 underline decoration-2 decoration-dashed text-gray-600 ${cedarvilleCursive.className}`}
      >
        Your one stop shop for all things cat
      </h1>
      <div className="flex justify-center overflow-hidden mb-12 shadow-lg rounded-sm">
        <div>
          <Image
            className="w-full object-cover object-center "
            src="/images/banner.jpg"
            alt="banner"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  )
}
