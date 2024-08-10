import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  ${({ theme: { margin } }) => `
    margin: ${margin.large}
  `}
`