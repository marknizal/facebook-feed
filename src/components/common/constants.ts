import * as T from "./types";

import {
  FaTh,
  FaFacebookMessenger,
  FaBell,
  FaSearch,
  FaBars,
} from "react-icons/fa";

import {
  LuHouse,
  LuUsers,
  LuVideo,
  LuStore,
  LuGroup,
  LuMessageCircle,
} from "react-icons/lu";

export const MENU_ITEMS: T.MenuItem[] = [
  { label: "Menu", icon: FaTh },
  { label: "Messenger", icon: FaFacebookMessenger },
  { label: "Notifications", icon: FaBell },
];

export const NAV_ITEMS: T.NavItem[] = [
  { id: "home", path: "/facebook-feed", label: "Home", Icon: LuHouse },
  { id: "friends", path: "/friends", label: "Friends", Icon: LuUsers },
  {
    id: "messenger",
    path: "/messenger",
    label: "Messenger",
    Icon: LuMessageCircle,
  },
  { id: "videos", path: "/videos", label: "Videos", Icon: LuVideo },
  {
    id: "marketplace",
    path: "/marketplace",
    label: "Marketplace",
    Icon: LuStore,
  },
  { id: "groups", path: "/groups", label: "Groups", Icon: LuGroup },
];

export const ACTIONS: T.ActionItem[] = [
  { id: "search", icon: FaSearch, label: "Search" },
  { id: "menu", icon: FaBars, label: "Menu" },
];

export const FOOTER_LINKS = [
  { id: "privacy", label: "Privacy", path: "/privacy" },
  { id: "terms", label: "Terms", path: "/terms" },
  { id: "advertising", label: "Advertising", path: "/advertising" },
  { id: "ad-choices", label: "Ad Choices", path: "/ad-choices" },
  { id: "cookies", label: "Cookies", path: "/cookies" },
  { id: "more", label: "More", isDropdown: true },
];

export const MORE_LINKS: T.MoreLink[] = [
  { key: "about", label: "About", path: "/about" },
  { key: "careers", label: "Careers", path: "/careers" },
  { key: "developers", label: "Developers", path: "/developers" },
  { key: "help", label: "Help", path: "/help" },
];
