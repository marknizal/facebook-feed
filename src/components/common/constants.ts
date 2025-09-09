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

export const MENU_ITEMS = [
  { label: "Menu", icon: FaTh },
  { label: "Messenger", icon: FaFacebookMessenger },
  { label: "Notifications", icon: FaBell },
];

export const NAV_ITEMS = [
  { id: "home", path: "/", label: "Home", Icon: LuHouse },
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

export const ACTIONS = [
  { id: "search", icon: FaSearch, label: "Search" },
  { id: "menu", icon: FaBars, label: "Menu" },
];
