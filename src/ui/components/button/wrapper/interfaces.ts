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