"use server"

import { revalidatePath } from "next/cache"
import { z } from "zod"
import DBClient from "~/lib/db"
import { put } from "@vercel/blob"

export const createProduct = async (formData: FormData) => {
  const db = DBClient.getInstance()

  // First upload img to bucked
  const img = formData.get("img") as File
  const blob = await put(img.name, img, {
    access: "public",
  })

  // Create new product
  try {
    await db.product.create({
      data: {
        // Basic validation only
        title: z.string().parse(formData.get("title")),
        seller: z.string().parse(formData.get("seller")),
        price: z.number().parse(+z.string().parse(formData.get("price"))),
        address: z.string().parse(formData.get("address")),
        imgUrl: blob.url,
        categoryId: z.string().parse(formData.get("category")),
      },
    })
  } catch (e: unknown) {
    return e
  }
  revalidatePath("/")
}

export const createCategory = async (formData: FormData) => {
  const db = DBClient.getInstance()

  // Create new product
  await db.category.create({
    data: {
      title: z.string().parse(formData.get("title")),
    },
  })
  revalidatePath("/")
}
