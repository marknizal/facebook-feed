import type { IconType } from "react-icons";

export interface MenuItem {
  label: string;
  icon: IconType;
}

export interface NavItem {
  id: string;
  path: string;
  label: string;
  Icon: IconType;
}

export interface ActionItem {
  id: string;
  icon: IconType;
  label: string;
}

export interface MoreLink {
  key: string;
  label: string;
  path: string;
}
