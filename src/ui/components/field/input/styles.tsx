import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.rounded.small};
  height: 48px;
  font-size: ${({ theme }) => theme.fontSize.body.small};
  background-color: ${({ theme }) => theme.colors.interactive10};

  transition: background-color ease 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.interactive30};
  }
`

export const StartAdornment = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const Input = styled.input`
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text10};
`