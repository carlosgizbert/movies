import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title.large};
`

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.body.small};
  color: ${({ theme }) => theme.colors.text20};
`

export const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSize.body.normal};
  color: ${({ theme }) => theme.colors.text20};
`

export const Redirect = styled.span`
  font-size: ${({ theme }) => theme.fontSize.body.normal};
  color: ${({ theme }) => theme.colors.text20};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;
`