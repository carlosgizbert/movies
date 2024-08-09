import * as T from "./types";

const colors: T.Colors = {
  background10: "#121212",
  background20: "#191919",
  interactive10: "#232323",
  interactive20: "#2A2A2A",
  interactive30: "#313131",
  separator10: "#3A3A3A",
  separator20: "#484848",
  separator30: "#606060",
  solid10: "#6E6E6E",
  solid20: "#7C7C7C",
  text10: "#B4B4B4",
  text20: "#EEEEEE",
};

const gridSpace: T.GridSpace = {
  small: "8px",
  medium: "16px",
  large: "32px"
};

const marginDefault: T.Margin = {
  normal: "8px",
  small: "4px",
  medium: "12px",
  large: "16px",
  xlarge: "24px",
};

const spacingDefault: T.Spacing = {
  small: "8px",
  medium: "16px",
  large: "32px",
  xmedium: "64px"
};

const roundedDefault: T.Rounded = {
  full: "100%",
  large: "24px",
  medium: "16px",
  small: "12px",
  xsmall: "8px",
};

const shadowLevelDefault: T.ShadowLevel = {
  small: "10px 22px 24px rgba(0, 0, 0, 0.5)"
};

const fontFamilyDefault: T.FontFamily = {
  primary: "Inter, sans-serif"
};

const fontSizeDefault: T.FontSize = {
  body: {
    thin: "0.75rem",
    small: "0.87rem",
    normal: "1rem",
    medium: "1.5rem",
    xmedium: "2rem",
    large: "2.5rem"
  },
  title: {
    small: "1.5rem",
    medium: "2rem",
    large: "2.5rem"
  }
};

const fontWeightDefault: T.FontWeight = {
  normal: "400",
  bold: "600"
};

export {
  colors,
  fontFamilyDefault,
  fontSizeDefault,
  fontWeightDefault,
  gridSpace,
  marginDefault,
  roundedDefault,
  shadowLevelDefault,
  spacingDefault,
}
