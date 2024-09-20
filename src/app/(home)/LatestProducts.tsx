import ProductCard from "~/components/Cards/ProductCard"
import { SectionHeading } from "./SectionHeading"
import DBClient from "~/lib/db"
import { EmptyStateText } from "~/components/Typography/Extras/EmptyStateText"

interface LatestProductsProps {
  categoryId?: string
}

export const LatestProducts = async ({ categoryId }: LatestProductsProps) => {
  const db = DBClient.getInstance()
  const latestProducts = await db.product.findMany({
    where: { categoryId },
    orderBy: { createdAt: "desc" },
  })

  return (
    <div className="home__latest-products mb-12">
      <SectionHeading id="latest-products">
        {categoryId ? "Search Results" : "Latest Products"}
      </SectionHeading>
      {!latestProducts.length && (
        <EmptyStateText>Products list is empty</EmptyStateText>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {latestProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.imgUrl}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}
