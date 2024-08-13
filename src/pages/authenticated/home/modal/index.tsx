import { useState } from 'react'
import { ModalRegister } from './register'
import { ModalLogin } from './login'

type View = 'login' | 'register'

export function ModalGlobal() {
  const [view, setView] = useState<View>('login')

  const modals = {
    login: <ModalLogin onClickRegister={() => setView('register')} />
    ,
    register: (
      <ModalRegister onClickLogin={() => setView('login')} />
    )
  }

  return modals[view]
}
