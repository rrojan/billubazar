"use client"

import { createContext, PropsWithChildren, useState } from "react"
import { ModalState } from "~/components/Context/types"

interface ModalContextState {
  openModal: ModalState | null
  setOpenModal: (modal: ModalState) => unknown
  closeModal: () => unknown
}

export const ModalContext = createContext<ModalContextState>({
  openModal: null,
  setOpenModal: () => null,
  closeModal: () => null,
})

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [openModal, setOpenModal] = useState<ModalState | null>(null)
  const closeModal = () => setOpenModal(null)

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}
