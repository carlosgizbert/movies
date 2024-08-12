import { Colors } from "@/ui/styles/tokens";

export interface WrapperColors {
  default: {
    background: {
      default: keyof Colors;
      hover: keyof Colors;
    };
  };
  disabled: {
    background: {
      default: keyof Colors;
      hover: keyof Colors;
    };
  };
}

export interface HeightVariantProps {
  small: number
  default: number
}

export type Size = 'default' | 'small'
export type Variant = 'default' | 'secondary'