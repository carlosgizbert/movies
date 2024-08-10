import styled from "styled-components";

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const SectionReleases = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.margin.large};
`

export const SectionBody = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.margin.medium};
`