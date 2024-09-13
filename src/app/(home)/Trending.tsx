import TrendingCard from "~/components/Cards/TrendingCard"
import { ProductDTO } from "~/types/dto"
import { SectionHeading } from "./SectionHeading"

export const Trending = () => {
  const trendingProducts: ProductDTO[] = [
    {
      id: "1",
      title: "Cute sweater",
      imageUrl: "/images/cat1.jpg",
      price: 2000,
    },
    {
      id: "2",
      title: "Hoodie",
      imageUrl: "/images/cat2.webp",
      price: 3000,
    },
    {
      id: "3",
      title: "Cute sweater",
      imageUrl: "/images/cat1.jpg",
      price: 2000,
    },
    {
      id: "4",
      title: "Hoodie",
      imageUrl: "/images/cat2.webp",
      price: 3000,
    },
  ]

  return (
    <div className="home__trending mb-16">
      <SectionHeading>Trending</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {trendingProducts.map((product) => (
          <TrendingCard
            key={product.id}
            image={product.imageUrl}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}
