import CategoryBtn from "~/components/Buttons/CategoryBtn"
import { NewCategoryBtn } from "../Buttons/NewCategoryBtn"
import { SignedIn } from "@clerk/nextjs"

export const Sidebar = () => {
  return (
    <aside className="layout__sidebar w-full">
      <div className="flex justify-between items-baseline mb-4">
        <h2 className="text-lg font-semibold mt-16">Categories</h2>
        <SignedIn>
          <NewCategoryBtn />
        </SignedIn>
      </div>
      <div className="flex flex-col gap-2">
        <CategoryBtn title="Apparels & Accessories" count={0} />
        <CategoryBtn title="Litterboxes" count={0} />
        <CategoryBtn title="Collars & Bells" count={0} />
      </div>
    </aside>
  )
}
