import type { IconType } from "react-icons";

export interface MenuItem {
  label: string;
  icon: IconType;
  hasMore?: boolean;
}
