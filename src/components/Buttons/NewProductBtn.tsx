"use client"

import { useModal } from "~/hooks/useModal"
import { Btn } from "./Btn"

export const NewProductBtn = () => {
  const { setOpenModal } = useModal()

  const handleClick = () => setOpenModal("product")

  return (
    <Btn className="w-[130px]" handleClick={handleClick}>
      {/* Jugaad */}
      <span className="hidden sm:block">New Product</span>
      <span className="block sm:hidden">&nbsp;&nbsp;New&nbsp;&nbsp;</span>
    </Btn>
  )
}
