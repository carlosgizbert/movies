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

export const Redirect = styled.span`
  font-size: ${({ theme }) => theme.fontSize.body.normal};
  color: ${({ theme }) => theme.colors.text20};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;
`

export const ButtonEye = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.rounded.full};
  background: transparent;
  border: none;
  cursor: pointer;
  height: 36px;
  width: 40px;

  transition: ease all 0.5s;

  &:hover {
    background: ${({ theme }) => theme.colors.background10};
  }
`