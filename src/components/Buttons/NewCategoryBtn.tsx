"use client"

import { useModal } from "~/hooks/useModal"

export const NewCategoryBtn = () => {
  const { setOpenModal } = useModal()
  const handleClick = () => setOpenModal("category")

  return (
    <small
      className="buttons__new-cateogory-btn underline text-right text-gray-500 cursor-pointer"
      onClick={handleClick}
    >
      Add
    </small>
  )
}
