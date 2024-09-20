import TrendingCard from "~/components/Cards/TrendingCard"
import { SectionHeading } from "./SectionHeading"
import DBClient from "~/lib/db"
import { EmptyStateText } from "~/components/Typography/Extras/EmptyStateText"

export const Trending = async () => {
  const db = DBClient.getInstance()
  const trendingProducts = await db.product.findMany({
    orderBy: { createdAt: "asc" },
    take: 4,
  })

  return (
    <div className="home__trending mb-16">
      <SectionHeading id="trending">Trending</SectionHeading>
      {!trendingProducts.length && (
        <EmptyStateText>No trending products to show</EmptyStateText>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {trendingProducts.map((product) => (
          <TrendingCard
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
