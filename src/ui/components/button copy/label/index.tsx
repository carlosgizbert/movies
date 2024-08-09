import { ReactNode } from 'react'

interface LabelProps {
  children: ReactNode
}

export function Label({ children }: Readonly<LabelProps>) {
  return (
    <label>{children}</label>
  )
}
