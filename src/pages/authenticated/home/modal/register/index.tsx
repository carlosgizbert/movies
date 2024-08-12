import { Field } from '@/ui/components/field'
import { Button } from '@/ui/components'
import { Modal } from '@/ui/components/modal'
import * as S from './styles'

interface ModalRegisterProps {
  onClickLogin: () => void
}

export const ModalRegister = ({ onClickLogin }: ModalRegisterProps) => (
  <Modal
      type="unclosable"
      padding={48}
      open
      width={481}
      title={
        <S.Header>
          <S.Title>Crie sua conta</S.Title>
          <S.Subtitle>Insira seus dados para completar o cadastro.</S.Subtitle>
        </S.Header>
      }
    >
      <S.Container>
        <Field label='Nome completo' placeholder='Digite seu nome' isRequired />
        <Field label='E-mail' placeholder='Digite seu e-mail' isRequired />
        <Field label='Senha' placeholder='Digite sua senha' isRequired />
        <Field label='Confirmar senha' placeholder='Confirme sua senha' isRequired />
        <Button fullWidth>
          Fazer login
        </Button>
        <S.Text>
          Já tem uma conta? <S.Redirect onClick={() => onClickLogin()}>Fazer login</S.Redirect>
        </S.Text>
      </S.Container>
    </Modal>
)
