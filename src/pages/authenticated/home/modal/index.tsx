import { useState } from 'react'
import { ModalRegister } from './register'
import { ModalLogin } from './login'

type View = 'login' | 'register'

interface ModalGlobalProps {
  onClose: () => void
}

export function ModalGlobal({ onClose }: ModalGlobalProps) {
  const [view, setView] = useState<View>('login')

  const modals = {
    login: <ModalLogin
      onFakeLogin={() => onClose()}
      onClickRegister={() => setView('register')}
      />
    ,
    register: (
      <ModalRegister
        onFakeRegister={() => onClose()}
        onClickLogin={() => setView('login')}
      />
    )
  }

  return modals[view]
}
