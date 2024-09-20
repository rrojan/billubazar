"use client"

import Image from "next/image"
import Link from "next/link"
import { GenericCardProps } from "~/components/Cards/types"

export default function ProductCard({
  id,
  image,
  title,
  price,
}: GenericCardProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="cards__product-card border rounded-lg overflow-hidden shadow-sm mb-4 cursor-pointer"
    >
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-80 object-cover object-top transition-transform duration-300 ease-in-out hover:scale-110"
          width={1000}
          height={1000}
        />
      </div>
      <div className="p-2">
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">Rs. {price}</p>
      </div>
    </Link>
  )
}
