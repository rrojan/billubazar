"use client"

import { useContext } from "react"
import { ModalContext } from "~/components/Context/ModalContext"

export const useModal = () => {
  return useContext(ModalContext)
}
