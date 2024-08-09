import { DefaultTheme } from "styled-components";
import { Colors } from "../styles/tokens";

export const getColorValue = (theme: DefaultTheme, color: string) => {
  const colorKey = (c: string) => c as keyof Colors;
  return theme.colors[colorKey(color)] || color;
};