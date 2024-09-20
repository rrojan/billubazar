import { NewCategoryBtn } from "~/components/Buttons/NewCategoryBtn"
import { SignedIn } from "@clerk/nextjs"
import { CategoryList } from "~/components/Layout/Sidebar/CategoryList"
import { Suspense } from "react"

export const Sidebar = async () => {
  return (
    <aside className="layout__sidebar w-[90vw] md:w-full">
      <div className="flex justify-between items-baseline mb-4">
        <h2 className="text-lg font-semibold mt-16">Categories</h2>
        <SignedIn>
          <NewCategoryBtn />
        </SignedIn>
      </div>

      <Suspense
        fallback={<div className="text-gray-600">Loading categories...</div>}
      >
        <CategoryList />
      </Suspense>
    </aside>
  )
}
