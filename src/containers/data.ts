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

import S1 from "../assets/S1.webp";
import S2 from "../assets/S2.webp";
import S3 from "../assets/S3.webp";
import S4 from "../assets/S4.webp";
import S5 from "../assets/S5.webp";
import S6 from "../assets/S6.webp";
import S7 from "../assets/S7.webp";

import A1 from "../assets/A1.jpg";
import A2 from "../assets/A2.jpg";
import A3 from "../assets/A3.jpg";
import A4 from "../assets/A4.jpg";
import A5 from "../assets/A5.jpg";
import A6 from "../assets/A6.jpg";
import A7 from "../assets/A7.jpg";
import A8 from "../assets/A8.jpg";

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

export const SHORTCUTS = [
  {
    id: 1,
    src: S1,
    label: "React.js Developers",
  },
  {
    id: 2,
    src: S2,
    label: "ReactJS Philippines",
  },
  {
    id: 3,
    src: S3,
    label: "Software Developer (Philippines)",
  },
  {
    id: 4,
    src: S4,
    label: "Programming Philippines",
  },
  {
    id: 5,
    src: S5,
    label: "FRONT-END DEVELOPMENT",
  },
  {
    id: 6,
    src: S6,
    label: "IT Fresh Graduate Job Search (PHILIPPINES)",
  },
  {
    id: 7,
    src: S7,
    label: "IT Job Search Philippines",
  },
];

export const CONTACTS = [
  { id: 1, src: A1, label: "John Doe" },
  { id: 2, src: A2, label: "Jane Smith" },
  { id: 3, src: A3, label: "Michael Johnson" },
  { id: 4, src: A4, label: "Emily Davis" },
  { id: 5, src: A5, label: "Daniel Brown" },
  { id: 6, src: A6, label: "Sophia Wilson" },
  { id: 7, src: A7, label: "James Taylor" },
  { id: 8, src: A8, label: "Olivia Martinez" },
  { id: 9, src: A1, label: "Benjamin Anderson" },
  { id: 10, src: A2, label: "Mia Thomas" },
  { id: 11, src: A3, label: "William Jackson" },
  { id: 12, src: A4, label: "Ava White" },
  { id: 13, src: A5, label: "Alexander Harris" },
  { id: 14, src: A6, label: "Isabella Martin" },
  { id: 15, src: A7, label: "Ethan Thompson" },
  { id: 16, src: A8, label: "Charlotte Garcia" },
  { id: 17, src: A1, label: "Henry Martinez" },
  { id: 18, src: A2, label: "Amelia Robinson" },
  { id: 19, src: A3, label: "Lucas Clark" },
  { id: 20, src: A4, label: "Harper Rodriguez" },
  { id: 21, src: A5, label: "Mason Lewis" },
  { id: 22, src: A6, label: "Ella Lee" },
  { id: 23, src: A7, label: "Logan Walker" },
  { id: 24, src: A8, label: "Grace Hall" },
  { id: 25, src: A1, label: "Jack Allen" },
  { id: 26, src: A2, label: "Lily Young" },
  { id: 27, src: A3, label: "Sebastian King" },
  { id: 28, src: A4, label: "Chloe Wright" },
  { id: 29, src: A5, label: "Matthew Scott" },
  { id: 30, src: A6, label: "Zoe Green" },
];
