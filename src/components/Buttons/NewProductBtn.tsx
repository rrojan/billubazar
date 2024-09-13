"use client"

import { useModal } from "~/hooks/useModal"

export const NewProductBtn = () => {
  const { setOpenModal } = useModal()

  const handleClick = () => setOpenModal("product")

  return (
    <button
      className="buttons__new-product-btn min-w-[100px] bg-black text-white py-2 px-4 rounded hover:scale-[1.03] hover:shadow-md hover:bg-gray-800"
      onClick={handleClick}
    >
      {/* Jugaad */}
      <span className="hidden sm:block">New Product</span>
      <span className="block sm:hidden">&nbsp;&nbsp;New&nbsp;&nbsp;</span>
    </button>
  )
}
