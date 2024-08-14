import { styled } from "styled-components";

export const Wrapper = styled.div`
  padding: ${({ theme: { spacing } }) => spacing.medium};
  background-color: ${({ theme: { colors } }) => colors.background10};
  display: flex;
  gap: ${({ theme: { spacing } }) => spacing.medium};
  align-items: center;
  justify-content: space-between;
  color: ${({ theme: { colors } }) => colors.text20};

  .rater-field-wrapper {
    width: 377px;
  }

  .rater-input-wrapper {
    border-radius: 100px;
  }
`;

export const SearchIcon = styled.span`
  padding: ${({ theme: { spacing } }) => spacing.small};
  background-color: ${({ theme: { colors } }) => colors.interactive10};
`;
