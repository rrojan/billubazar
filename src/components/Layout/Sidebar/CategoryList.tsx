import CategoryBtn from "~/components/Buttons/CategoryBtn"
import DBClient from "~/lib/db"

export const CategoryList = async () => {
  const sleep = 2
  await new Promise((res) => setTimeout(res, sleep * 1000))

  const db = DBClient.getInstance()
  const categories = await db.category.findMany({
    orderBy: { title: "asc" },
    include: {
      _count: {
        select: { Product: true },
      },
    },
  })

  return (
    <div className="sidebar__category-list flex flex-col gap-2">
      {!categories.length && (
        <div className="text-gray-500">No categories to show</div>
      )}
      {categories.map((category) => (
        <CategoryBtn
          id={category.id}
          key={category.id}
          title={category.title}
          count={category._count.Product}
        />
      ))}
    </div>
  )
}
