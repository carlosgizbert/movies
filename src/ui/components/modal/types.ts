import { ReactNode } from "react"

export type ModalType = 'closable' | 'unclosable'

export interface Modal {
  type?: ModalType
  open?: boolean
  title?: ReactNode
  dataTestId?: string
  onClose?: () => void
  children: React.ReactNode
  width?: number
  padding?: number
  isLoading?: boolean
}

export interface StoreModal {
  modalType: ModalType
  modalProps: Modal
}

export type GlobalModalContext = {
  showModal: (modalType: ModalType, modalProps: Omit<Modal, 'type'>) => void
  hideModal: () => void
  storeModal: StoreModal
  loadingModal: boolean
  setLoadingModal: React.Dispatch<React.SetStateAction<boolean>>
}