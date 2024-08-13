import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.large};
  gap: ${({ theme }) => theme.spacing.large};

  form {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.large}; 
  }
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

export const Link = styled.span`
  font-size: ${({ theme }) => theme.fontSize.body.normal};
  color: ${({ theme }) => theme.colors.text20};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`