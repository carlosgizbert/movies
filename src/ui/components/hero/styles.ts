import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;

  @media screen and (width > 720px){
    display: grid;
    grid-template-columns: 8fr 4fr;
    gap: ${({ theme }) => theme.margin.medium};
  }
`

export const SmallCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.margin.medium};
`