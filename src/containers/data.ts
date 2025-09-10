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
  { id: 1, src: L1, name: "Meta AI" },
  { id: 2, src: L2, name: "Friends" },
  { id: 3, src: L3, name: "Groups" },
  { id: 4, src: L4, name: "Saved" },
  { id: 5, src: L5, name: "Memories" },
  { id: 6, src: L6, name: "Videos" },
  { id: 7, src: L7, name: "Marketplace" },
  { id: 8, src: L8, name: "Ads Manager" },
  { id: 9, src: L9, name: "Birthday" },
];

export const SOCIAL_ITEMS = [
  {
    id: "profile",
    src: Profile,
    name: "Mark John Allen Nizal",
    avatar: "circle" as const,
  },
  ...SOCIALS,
];

export const SHORTCUTS = [
  { id: 1, src: S1, name: "React.js Developers" },
  { id: 2, src: S2, name: "ReactJS Philippines" },
  { id: 3, src: S3, name: "Software Developer (Philippines)" },
  { id: 4, src: S4, name: "Programming Philippines" },
  { id: 5, src: S5, name: "FRONT-END DEVELOPMENT" },
  { id: 6, src: S6, name: "IT Fresh Graduate Job Search (PHILIPPINES)" },
  { id: 7, src: S7, name: "IT Job Search Philippines" },
];

export const CONTACTS = [
  { id: 1, src: A1, name: "John Doe" },
  { id: 2, src: A2, name: "Jane Smith" },
  { id: 3, src: A3, name: "Michael Johnson" },
  { id: 4, src: A4, name: "Emily Davis" },
  { id: 5, src: A5, name: "Daniel Brown" },
  { id: 6, src: A6, name: "Sophia Wilson" },
  { id: 7, src: A7, name: "James Taylor" },
  { id: 8, src: A8, name: "Olivia Martinez" },
  { id: 9, src: A1, name: "Benjamin Anderson" },
  { id: 10, src: A2, name: "Mia Thomas" },
  { id: 11, src: A3, name: "William Jackson" },
  { id: 12, src: A4, name: "Ava White" },
  { id: 13, src: A5, name: "Alexander Harris" },
  { id: 14, src: A6, name: "Isabella Martin" },
  { id: 15, src: A7, name: "Ethan Thompson" },
  { id: 16, src: A8, name: "Charlotte Garcia" },
  { id: 17, src: A1, name: "Henry Martinez" },
  { id: 18, src: A2, name: "Amelia Robinson" },
  { id: 19, src: A3, name: "Lucas Clark" },
  { id: 20, src: A4, name: "Harper Rodriguez" },
  { id: 21, src: A5, name: "Mason Lewis" },
  { id: 22, src: A6, name: "Ella Lee" },
  { id: 23, src: A7, name: "Logan Walker" },
  { id: 24, src: A8, name: "Grace Hall" },
  { id: 25, src: A1, name: "Jack Allen" },
  { id: 26, src: A2, name: "Lily Young" },
  { id: 27, src: A3, name: "Sebastian King" },
  { id: 28, src: A4, name: "Chloe Wright" },
  { id: 29, src: A5, name: "Matthew Scott" },
  { id: 30, src: A6, name: "Zoe Green" },
];
