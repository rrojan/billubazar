import { Hero } from "~/app/(home)/Hero"
import { LatestProducts } from "~/app/(home)/LatestProducts"
import { Trending } from "~/app/(home)/Trending"
import { NewCategoryForm } from "~/components/Forms/NewCategoryForm"
import { NewProductForm } from "~/components/Forms/NewProductForm"
import { DottedSeperator } from "~/components/Seperators/DottedSeperator"

interface HomePageProps {
  searchParams?: { categoryId?: string }
}

const HomePage = async ({ searchParams }: HomePageProps) => {
  const categoryId = searchParams?.categoryId
  return (
    <div className="page__home">
      <div className={categoryId ? "hidden" : "block"}>
        <Hero />
        <DottedSeperator className="mb-8" />
        <Trending />
      </div>
      <LatestProducts categoryId={categoryId} />

      <NewProductForm />
      <NewCategoryForm />
    </div>
  )
}

export default HomePage
