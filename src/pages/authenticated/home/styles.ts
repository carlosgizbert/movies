import styled from "styled-components";

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.margin.medium};
`

export const SectionReleases = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.margin.medium};
`