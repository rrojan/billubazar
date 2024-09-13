import ProductCard from "~/components/Cards/ProductCard"
import { ProductDTO } from "~/types/dto"
import { SectionHeading } from "./SectionHeading"

export const LatestProducts = () => {
  const latestProducts: ProductDTO[] = [
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
    <div className="home__latest-products mb-12">
      <SectionHeading>Latest Products</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {latestProducts.map((product) => (
          <ProductCard
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
