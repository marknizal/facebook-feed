import type { ReactNode } from "react";

export interface LayoutProps {
  leftSide?: ReactNode;
  rightSide?: ReactNode;
  children: ReactNode;
}
