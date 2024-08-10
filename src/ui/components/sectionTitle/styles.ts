import styled from 'styled-components'

export const SectionTitle = styled.section`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.margin.medium};
  font-size: ${({ theme }) => theme.fontSize.body.medium};
`