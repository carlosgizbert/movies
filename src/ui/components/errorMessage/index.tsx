import styled from 'styled-components'

export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.fontSize.body.thin};
  color: ${({ theme }) => theme.colors.red10};
  cursor: pointer;
`