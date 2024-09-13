"use client"

import { ChangeEvent, FormEvent, useState } from "react"
import { FormModal } from "~/components/Modals/FormModal"
import { useModal } from "~/hooks/useModal"
import { Btn } from "../Buttons/Btn"

interface FormData {
  name: string
  description: string
  address: string
  price: string
  sellerName: string
}

export const NewProductForm = () => {
  const { closeModal } = useModal()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    address: "",
    price: "",
    sellerName: "",
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleClose()
  }

  const handleClose = () => {
    setFormData({
      name: "",
      description: "",
      address: "",
      price: "",
      sellerName: "",
    })
    closeModal()
  }

  return (
    <FormModal
      type="product"
      contentLabel="New Product"
      handleClose={handleClose}
    >
      <div className="forms__new-product-form bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl text-center font-bold mb-6">
          Post a New Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Item Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <textarea
            name="description"
            placeholder="Item Description"
            value={formData.description}
            rows={5}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />

          {/* Address and Price fields side by side */}
          <div className="flex space-x-4">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />

            <div className="w-full flex items-center border rounded-lg">
              <span className="px-2 text-gray-600">Rs</span>
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-2 border-none outline-none"
                required
              />
            </div>
          </div>

          <input
            type="text"
            name="sellerName"
            placeholder="Seller Name"
            value={formData.sellerName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />

          {/* Buttons */}
          <div className="flex justify-between mt-4 space-x-4">
            <Btn variant="secondary">Cancel</Btn>
            <Btn type="submit">Post Item</Btn>
          </div>
        </form>
      </div>
    </FormModal>
  )
}
