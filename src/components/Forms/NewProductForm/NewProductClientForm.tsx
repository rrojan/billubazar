"use client"

import { Category } from "@prisma/client"
import { FormEvent, useRef } from "react"
import { createProduct } from "~/app/actions"
import { Btn } from "~/components/Buttons/Btn"
import { FormModal } from "~/components/Modals/FormModal"
import { useModal } from "~/hooks/useModal"

interface NewProductClientFormProps {
  categories: Category[]
}

export const NewProductClientForm = ({
  categories,
}: NewProductClientFormProps) => {
  const { closeModal } = useModal()
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formRef.current) {
      const formData = new FormData(formRef.current)
      // Call the server action (directly from client component!)
      await createProduct(formData)
      // Close the modal after submission
      closeModal()
    }
  }

  return (
    <FormModal
      type="product"
      contentLabel="New Product"
      handleClose={closeModal}
    >
      <div className="forms__new-product-form bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl text-center font-bold mb-6">
          Post a New Product
        </h2>
        {/* Use onSubmit to handle form submission instead of action, since we also need client side code to close the modal */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Item Name"
            className="w-full p-2 border rounded-lg"
            required
          />
          <textarea
            name="description"
            placeholder="Item Description"
            rows={5}
            className="w-full p-2 border rounded-lg"
            required
          />

          {/* Address and Price fields side by side */}
          <div className="flex space-x-4">
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="w-full p-2 border rounded-lg"
              required
            />

            <div className="w-full flex items-center border rounded-lg">
              <span className="px-2 text-gray-600">Rs</span>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="w-full p-2 border-none outline-none"
                required
              />
            </div>
          </div>

          <input
            type="text"
            name="seller"
            placeholder="Seller Name"
            className="w-full p-2 border rounded-lg"
            required
          />

          <select
            id="category"
            name="category"
            className="w-full p-2 mt-1 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          >
            <option value="" defaultChecked hidden>
              Select Category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>

          <small className="block ml-1 pt-4 text-gray-600">Thumbnail:</small>
          <input
            name="img"
            type="file"
            className="block mt-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none p-2"
            required
          />
          <p
            className="ml-2 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, JPG, JPEG or GIF (MAX. 5MB).
          </p>

          {/* Buttons */}
          <div className="flex justify-between mt-4 space-x-4">
            <Btn variant="secondary" handleClick={closeModal}>
              Cancel
            </Btn>
            <Btn type="submit">Post Item</Btn>
          </div>
        </form>
      </div>
    </FormModal>
  )
}
