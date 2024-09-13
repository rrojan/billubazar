import TrendingCard from "~/components/Cards/TrendingCard"
import { SectionHeading } from "./SectionHeading"
import DBClient from "~/lib/db"

export const Trending = async () => {
  const db = DBClient.getInstance()
  const trendingProducts = await db.product.findMany({
    orderBy: { createdAt: "asc" },
    take: 4,
  })
  return (
    <div className="home__trending mb-16">
      <SectionHeading>Trending</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {trendingProducts.map((product) => (
          <TrendingCard
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
