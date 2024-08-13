import styled from 'styled-components'

export const Link = styled.span`
  font-size: ${({ theme }) => theme.fontSize.body.normal};
  color: ${({ theme }) => theme.colors.text20};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`