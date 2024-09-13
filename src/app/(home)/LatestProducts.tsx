import ProductCard from "~/components/Cards/ProductCard"
import { SectionHeading } from "./SectionHeading"
import DBClient from "~/lib/db"

export const LatestProducts = async () => {
  const db = DBClient.getInstance()
  const latestProducts = await db.product.findMany({
    orderBy: { createdAt: "desc" },
  })
  return (
    <div className="home__latest-products mb-12">
      <SectionHeading>Latest Products</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {latestProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.imgUrl}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}
