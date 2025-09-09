import Profile from "../assets/avatar.jpg";
import L1 from "../assets/meta-ai.png";
import L2 from "../assets/friends.png";
import L3 from "../assets/groups.png";
import L4 from "../assets/save.png";
import L5 from "../assets/memories.png";
import L6 from "../assets/videos.png";
import L7 from "../assets/marketplace.png";
import L8 from "../assets/ads-manager.png";
import L9 from "../assets/birthday.png";

export const SOCIALS = [
  { id: 1, src: L1, label: "Meta AI" },
  { id: 2, src: L2, label: "Friends" },
  { id: 3, src: L3, label: "Groups" },
  { id: 4, src: L4, label: "Saved" },
  { id: 5, src: L5, label: "Memories" },
  { id: 6, src: L6, label: "Videos" },
  { id: 7, src: L7, label: "Marketplace" },
  { id: 8, src: L8, label: "Ads Manager" },
  { id: 9, src: L9, label: "Birthday" },
];

export const SOCIAL_ITEMS = [
  {
    id: "profile",
    src: Profile,
    label: "Mark John Allen Nizal",
    avatar: "circle" as const,
  },
  ...SOCIALS,
];
