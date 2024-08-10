import { getColorValue, hexToRgba } from "@/ui/utils";
import styled from "styled-components";

interface WrapperProps {
  height?: number;
  width?: number;
  fullWidth?: boolean;
  backgroundOpacity: number;
  colors: {
    default: {
      background: {
        default: string;
        hover: string;
      };  
    };
    disabled: {
      background: {
        default: string;
        hover: string;
      };
    };
  };
}

export const Wrapper = styled.button<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.small};

  width: ${({ fullWidth }) => fullWidth ? '100%' : 'fit-content'};

  padding: 0 1rem;
  height: ${({ height }) => (height ? `${height}px` : "auto")};;

  color: ${({ theme }) => theme.colors.text20};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSize.body.small};

  border: ${({ theme }) => theme.rounded.small};
  border-radius: ${({ theme }) => theme.rounded.small};

  background: ${(props) => hexToRgba(
    getColorValue(props.theme, props.colors.default.background.default),
    props.backgroundOpacity,
  )};
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  
  cursor: pointer;
  transition: background-color ease 0.2s;

  &:hover {
    background-color: ${(props) => hexToRgba(
      getColorValue(props.theme, props.colors.default.background.hover),
      0.2,
    )};
  }

  &:disabled {
    background-color: ${(props) =>
      getColorValue(props.theme, props.colors.disabled.background.default)};

    &:hover {
      background-color: ${(props) =>
        getColorValue(props.theme, props.colors.disabled.background.hover)};
    }
  }
`;
