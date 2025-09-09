import type { FC } from "react";
import styled from "@emotion/styled";

import Profile from "../../../assets/avatar.jpg";
import L1 from "../../../assets/meta-ai.png";
import L2 from "../../../assets/friends.png";
import L3 from "../../../assets/groups.png";
import L4 from "../../../assets/save.png";
import L5 from "../../../assets/memories.png";
import L6 from "../../../assets/videos.png";
import L7 from "../../../assets/marketplace.png";
import L8 from "../../../assets/ads-manager.png";
import L9 from "../../../assets/birthday.png";

import { COLOR, FONTSIZE, RADIUS } from "../../../styles";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  .text {
    font-size: ${FONTSIZE.base};
    font-weight: 500;
  }

  &:hover {
    background-color: ${COLOR.ash};
  }
`;

interface AvatarProps {
  $isProfile?: boolean;
}

const Avatar = styled.picture<AvatarProps>`
  aspect-ratio: 1 / 1;
  width: ${({ $isProfile }) => ($isProfile ? "2.25rem" : "2rem")};
  border-radius: ${({ $isProfile }) => ($isProfile ? RADIUS.full : "0")};
  padding: ${({ $isProfile }) => ($isProfile ? "0" : "0.2rem")};
  overflow: hidden;

  .avatar {
    object-fit: ${({ $isProfile }) => ($isProfile ? "cover" : "contain")};
    width: 100%;
    height: 100%;
  }
`;

interface Social {
  id: number;
  src: string;
  label: string;
}

const SOCIAL_ITEMS: Social[] = [
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

const Socials: FC = () => {
  return (
    <List>
      <Item>
        <Avatar $isProfile>
          <img src={Profile} alt="Profile" className="avatar" />
        </Avatar>
        <p className="text">Mark John Allen Nizal</p>
      </Item>

      {SOCIAL_ITEMS.map(({ id, src, label }) => (
        <Item key={id}>
          <Avatar>
            <img src={src} alt={label} className="avatar" />
          </Avatar>
          <p className="text">{label}</p>
        </Item>
      ))}
    </List>
  );
};

export default Socials;
