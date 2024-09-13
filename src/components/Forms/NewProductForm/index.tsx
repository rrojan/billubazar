import { NewProductClientForm } from "~/components/Forms/NewProductForm/NewProductClientForm"
import DBClient from "~/lib/db"

export const NewProductForm = async () => {
  const db = DBClient.getInstance()
  const categories = await db.category.findMany({})

  return <NewProductClientForm categories={categories} />
}
