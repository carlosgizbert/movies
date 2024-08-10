import { hexToRgba } from "@/ui/utils";
import styled from "styled-components";

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const RatingStar = styled.span`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  background-color: ${({ theme }) => hexToRgba(theme.colors.text20, 0.3)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-radius: ${({ theme }) => theme.rounded.xsmall};
  padding: 4px 6px;

  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  transition: all 0.5s ease;

  &:hover {
    transition: all 0.5s ease;
    background-color: ${({ theme }) => hexToRgba(theme.colors.text20, 0.2)};
  }
`;