import { ReactNode } from 'react'
import { Button } from '..'

interface RootProps {
  children: ReactNode
}

export function Root({ children }: Readonly<RootProps>) {
  return (
    <Button.Wrapper>
      <Button.Label>
        {children}
      </Button.Label>
      {children}
    </Button.Wrapper>
  )
}
