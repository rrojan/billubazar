import CategoryBtn from "~/components/Buttons/CategoryBtn"
import { NewCategoryBtn } from "../Buttons/NewCategoryBtn"
import { SignedIn } from "@clerk/nextjs"
import DBClient from "~/lib/db"

export const Sidebar = async () => {
  const db = DBClient.getInstance()
  const categories = await db.category.findMany({
    include: {
      _count: {
        select: { Product: true },
      },
    },
  })
  return (
    <aside className="layout__sidebar w-[90vw] md:w-full">
      <div className="flex justify-between items-baseline mb-4">
        <h2 className="text-lg font-semibold mt-16">Categories</h2>
        <SignedIn>
          <NewCategoryBtn />
        </SignedIn>
      </div>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <CategoryBtn
            key={category.id}
            title={category.title}
            count={category._count.Product}
          />
        ))}
      </div>
    </aside>
  )
}
