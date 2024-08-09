import { WrapperColors } from "./interfaces";

export function getColorVariant(): WrapperColors {
  return {
    default: {
      background: {
        default: "interactive10",
        hover: "separator10"
      }
    },
    disabled: {
      background: {
        default: "background10",
        hover: "interactive30"
      }
    }
  };
}
