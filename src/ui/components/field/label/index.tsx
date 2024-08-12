import styled from 'styled-components'

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text20};
  font-size: ${({ theme }) => theme.fontSize.body.small};
  align-self: self-start;
  cursor: text;
`