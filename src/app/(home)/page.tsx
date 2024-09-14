import { Hero } from "~/app/(home)/Hero"
import { LatestProducts } from "~/app/(home)/LatestProducts"
import { Trending } from "~/app/(home)/Trending"
import { NewCategoryForm } from "~/components/Forms/NewCategoryForm"
import { NewProductForm } from "~/components/Forms/NewProductForm"
import { DottedSeperator } from "~/components/Seperators/DottedSeperator"

const HomePage = async () => {
  return (
    <div className="page__home">
      <Hero />
      <DottedSeperator className="mb-8" />
      <Trending />
      <LatestProducts />
      <NewProductForm />
      <NewCategoryForm />
    </div>
  )
}

export default HomePage
