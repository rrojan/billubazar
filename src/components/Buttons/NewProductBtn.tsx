"use client"

import { useModal } from "~/hooks/useModal"

export const NewProductBtn = () => {
  const { setOpenModal } = useModal()

  const handleClick = () => setOpenModal("product")

  return (
    <button
      className="buttons__new-product-btn bg-black text-white py-2 px-4 rounded hover:scale-[1.03] hover:shadow-md hover:bg-gray-800"
      onClick={handleClick}
    >
      New Product
    </button>
  )
}
