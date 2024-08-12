import { Modal as ModalProps } from './types'
import { Close } from '../icons'
import * as S from './styles'

export function Modal({
  type = 'closable',
  open = false,
  title = '',
  dataTestId,
  children,
  padding,
  width,
  onClose = () => null,
  isLoading = false,
}: Readonly<ModalProps>) {
  const hasHeader = !!title || type === 'closable'
  document.body.style.overflowY = open ? 'hidden' : 'auto'

  const handleOnClose = () => (!isLoading ? onClose : undefined)

  return (
    <S.Container open={open} data-testid={dataTestId}>
      <S.Overlay onClick={type === 'closable' ? handleOnClose() : undefined} />
      <S.ModalBox width={width} padding={padding}>
        {hasHeader && (
          <S.Header data-testid="modal-header">
            {!!title && title}
            {type === 'closable' && (
              <S.CloseButton onClick={onClose} data-testid="modal-close">
                <Close />
              </S.CloseButton>
            )}
          </S.Header>
        )}
        <S.Content>
          {children}
        </S.Content>
      </S.ModalBox>
    </S.Container>
  )
}