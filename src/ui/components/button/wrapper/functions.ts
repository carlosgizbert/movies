import { Size, Variant, WrapperColors } from "./interfaces";

export const getHeightVariant = (size: Size) => {
  switch (size) {
  case 'small':
    return 40
  default:
    return 48
  }
}

export const getBackgroundOpacityVariant = (size: Variant) => {
  switch (size) {
  case 'secondary':
    return 0.3
  default:
    return 1
  }
}

export function getColorVariant(variant: Variant): WrapperColors {
  switch (variant) {
    case 'secondary':
      return {
        default: {
          background: {
            default: "text10",
            hover: "text10",
          }
        },
        disabled: {
          background: {
            default: "text10",
            hover: "text10",
          }
        }
      }
    default:
      return {
        default: {
          background: {
            default: "interactive20",
            hover: "separator10",
          }
        },
        disabled: {
          background: {
            default: "background10",
            hover: "interactive30",
          }
        }
      } 
  }
}
