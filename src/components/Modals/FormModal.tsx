"use client"

import { PropsWithChildren } from "react"
import Modal from "react-modal"
import { useModal } from "~/hooks/useModal"
import { ModalState } from "~/components/Context/types"
import { cn } from "~/utils/tailwind"

interface FormModalProps extends PropsWithChildren {
  type: ModalState
  contentLabel: string
  handleClose?: () => unknown
  className?: string
}

export const FormModal = ({
  type,
  contentLabel,
  handleClose,
  className,
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
      className={cn(
        "modals__form-modal w-8/10 sm:w-1/3 md:w-1/2 lg:w-1/3 flex justify-center",
        className,
      )}
      overlayClassName="flex justify-center fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center"
    >
      {children}
    </Modal>
  )
}
