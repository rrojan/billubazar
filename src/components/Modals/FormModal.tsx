"use client"

import { PropsWithChildren } from "react"
import Modal from "react-modal"
import { useModal } from "~/hooks/useModal"
import { ModalState } from "~/components/Context/types"

interface FormModalProps extends PropsWithChildren {
  type: ModalState
  contentLabel: string
  handleClose?: () => unknown
}

export const FormModal = ({
  type,
  contentLabel,
  handleClose,
  children,
}: FormModalProps) => {
  const { openModal, closeModal } = useModal()
  console.log("open", openModal)
  console.log("type", type)
  return (
    <Modal
      shouldFocusAfterRender={false}
      isOpen={openModal === type}
      onRequestClose={handleClose || closeModal}
      shouldCloseOnOverlayClick={true} // modal closes on background click
      contentLabel={contentLabel}
      className="w-1/3 flex justify-center"
      overlayClassName="flex justify-center fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center"
    >
      {children}
    </Modal>
  )
}
