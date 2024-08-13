import styled from "styled-components";

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
`

export const SectionBody = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};

  &.no-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .no-content-title {
      font-size: ${({ theme }) => theme.fontSize.body.medium};
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
    }
    .no-content-subtitle {
      font-size: ${({ theme }) => theme.fontSize.body.medium};
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      margin-bottom: ${({ theme }) => theme.spacing.medium};
    }
  }
`