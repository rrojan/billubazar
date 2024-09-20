"use client"

import Image from "next/image"
import Link from "next/link"
import { GenericCardProps } from "~/components/Cards/types"

export default function TrendingCard({
  id,
  image,
  title,
  price,
}: GenericCardProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="cards__trending-card border rounded-lg overflow-hidden shadow-sm cursor-pointer transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2"
    >
      <Image
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
        width={1000}
        height={1000}
      />
      <div className="p-2">
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">Rs. {price}</p>
      </div>
    </Link>
  )
}
