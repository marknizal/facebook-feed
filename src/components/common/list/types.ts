import type { ReactNode } from "react";

export interface ListItem {
  id: number | string;
  label: string;
  src: string;
  avatar?: "default" | "circle" | "square";
}

export interface ListProps {
  items: ListItem[];
  avatar?: "default" | "circle" | "square";
  length?: number;
  border?: boolean;
  renderItem?: (item: ListItem) => ReactNode;
  ariaLabel?: string;
  title?: string;
}
