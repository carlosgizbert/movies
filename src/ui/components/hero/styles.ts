import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({ theme }) => theme.spacing.medium};

  @media screen and (width > 720px){
    display: grid;
    grid-template-columns: 8fr 4fr;
    gap: ${({ theme }) => theme.spacing.medium};
  }
`

export const SmallCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.medium};

  @media screen and (width > 720px){
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.medium};
  }
  
`