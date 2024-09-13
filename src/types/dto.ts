import { z } from "zod"

export const ProductDtoSchema = z.object({
  id: z.string(),
  title: z.string().min(1, { message: "Product title cannot be empty" }),
  imageUrl: z.string().url(),
  price: z.number().min(1, { message: "Product cannot be free" }),
})

export type ProductDTO = z.infer<typeof ProductDtoSchema>
