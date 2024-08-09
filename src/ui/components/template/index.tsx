import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${({ theme }) => theme.spacing.small};
`;

const Col = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.small};
  box-sizing: border-box;
`;

export {
  Row,
  Col
}