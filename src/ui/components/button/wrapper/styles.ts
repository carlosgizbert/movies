import { getColorValue } from "@/ui/utils";
import styled from "styled-components";

interface WrapperProps {
  height?: number;
  width?: number;
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

  padding: 0 1rem;
  height: ${(props) => (props.height ? `${props.height}px` : "auto")};;
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};

  color: ${({ theme }) => theme.colors.text20};
  font-size: ${({ theme }) => theme.fontSize.body.small};

  border: ${({ theme }) => theme.rounded.small};
  border-radius: ${({ theme }) => theme.rounded.small};
  background-color: ${(props) => getColorValue(props.theme, props.colors.default.background.default)};
  
  cursor: pointer;
  transition: background-color ease 0.2s;

  &:hover {
    background-color: ${(props) =>
      getColorValue(props.theme, props.colors.default.background.hover)};
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
