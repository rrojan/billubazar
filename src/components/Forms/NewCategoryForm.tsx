"use client"

import { ChangeEvent, FormEvent, useState } from "react"
import { FormModal } from "~/components/Modals/FormModal"
import { useModal } from "~/hooks/useModal"
import { Btn } from "../Buttons/Btn"

interface FormData {
  name: string
}

export const NewCategoryForm = () => {
  const { closeModal } = useModal()
  const [formData, setFormData] = useState<FormData>({
    name: "",
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
    })
    closeModal()
  }

  return (
    <FormModal
      type="category"
      contentLabel="New Product"
      handleClose={handleClose}
    >
      <div className="bg-white p-12 pb-6 rounded-lg shadow-lg w-full">
        <h2 className="text-2xl text-center font-bold mb-6">
          Create a new Category
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Category Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mb-2"
            required
          />
          {/* Buttons */}
          <div className="flex justify-between mt-4 space-x-4">
            <Btn variant="secondary" handleClick={handleClose}>
              Cancel
            </Btn>
            <Btn type="submit">Create</Btn>
          </div>
        </form>
      </div>
    </FormModal>
  )
}
