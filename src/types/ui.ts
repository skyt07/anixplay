import type { SVGProps } from "react";

export interface LogoProps extends SVGProps<SVGSVGElement> {
  text?: string;

  size?: number;
}
