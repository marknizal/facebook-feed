export interface User {
  name: string;
  avatar: string;
  type: "account" | "page";
  isVerified: boolean;
}

export interface HeaderProps {
  user: User;
  createdAt: string;
  privacy: string;
}
