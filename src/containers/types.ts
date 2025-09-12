export interface User {
  name: string;
  avatar: string;
  type: "account" | "page";
  isVerified: boolean;
}

export interface Post {
  user: User;
  createdAt: string;
  privacy: "public" | "friends" | "only" | "custom";
  caption: string;
  images?: string[];
}
