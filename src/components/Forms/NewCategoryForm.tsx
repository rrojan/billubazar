"use client"

import { FormEvent, useRef } from "react"
import { createCategory } from "~/app/actions"
import { Btn } from "~/components/Buttons/Btn"
import { FormModal } from "~/components/Modals/FormModal"
import { useModal } from "~/hooks/useModal"

export const NewCategoryForm = () => {
  const { closeModal } = useModal()
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formRef.current) {
      const formData = new FormData(formRef.current)
      // Call the server action (directly from client component!)
      await createCategory(formData)
      // Close the modal after submission
      closeModal()
    }
  }

  return (
    <FormModal
      type="category"
      contentLabel="New Product"
      handleClose={closeModal}
    >
      <div className="forms__new-category-form bg-white p-12 pb-6 rounded-lg shadow-lg w-full">
        <h2 className="text-2xl text-center font-bold mb-6">
          Create a new Category
        </h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Category Name"
            className="w-full p-2 border rounded-lg mb-2"
            required
          />
          {/* Buttons */}
          <div className="flex justify-between mt-4 space-x-4">
            <Btn variant="secondary" handleClick={closeModal}>
              Cancel
            </Btn>
            <Btn type="submit">Create</Btn>
          </div>
        </form>
      </div>
    </FormModal>
  )
}
