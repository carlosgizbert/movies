import { Field } from '@/ui/components/field'
import { Button } from '@/ui/components'
import { Modal } from '@/ui/components/modal'
import * as S from './styles'

interface ModalLoginProps {
  onClickRegister: () => void
}

export const ModalLogin = ({ onClickRegister }: ModalLoginProps) => (
  <Modal
      type="unclosable"
      padding={48}
      open
      title={
        <S.Header>
          <S.Title>Acesse sua conta</S.Title>
          <S.Subtitle>Bem vindo de volta! Entre com seus dados.</S.Subtitle>
        </S.Header>
      }
    >
      <Field label='E-mail' placeholder='Digite seu e-mail' isRequired />
      <Field label='Senha' placeholder='Digite sua senha' isRequired />
      <Button fullWidth>
        Fazer login
      </Button>
      <S.Text>
        Não tem uma conta ainda? <S.Redirect onClick={() => onClickRegister()}>Criar uma conta</S.Redirect>
      </S.Text>
    </Modal>
)
