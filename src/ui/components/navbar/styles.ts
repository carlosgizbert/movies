import { styled } from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({ theme: { spacing } }) => spacing.medium};
  background-color: ${({ theme: { colors }}) => colors.background10};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme: { colors }}) => colors.text20};

  .rater-input {
    input {
      border-radius: 100%;
    }
    border-radius: 100%;
  }
`

export const SearchIcon = styled.span`
  padding: ${({ theme: { spacing } }) => spacing.small};
  background-color: ${({ theme: { colors } }) => colors.interactive10};
`