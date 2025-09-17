import type { FC } from "react";
import {
  FaAngleRight,
  FaComments,
  FaGear,
  FaMoon,
  FaRightFromBracket,
  FaCircleQuestion,
} from "react-icons/fa6";

import Footer from "../../../../footer";
import Profile from "../../../../../../assets/avatar.jpg";
import { Avatar } from "../../../../../shared";

import * as S from "./styles";
import * as T from "./types";

const MENU_ITEMS: T.MenuItem[] = [
  {
    label: "Settings & Privacy",
    icon: FaGear,
    hasMore: true,
  },
  {
    label: "Help & Support",
    icon: FaCircleQuestion,
    hasMore: true,
  },
  {
    label: "Display & Accessibility",
    icon: FaMoon,
    hasMore: true,
  },
  {
    label: "Give Feedback",
    icon: FaComments,
  },
  {
    label: "Log Out",
    icon: FaRightFromBracket,
  },
];

const Account: FC = () => {
  return (
    <S.Wrapper aria-label="Account menu">
      <S.List className="account-item">
        <S.Item>
          <Avatar src={Profile} alt="Profile" />
          <span className="name">Mark John Allen Nizal</span>
        </S.Item>
      </S.List>

      <S.List>
        {MENU_ITEMS.map(({ label, icon: IconComp, hasMore }) => (
          <S.Item key={label} aria-label={label}>
            <S.Icon>
              <IconComp aria-hidden="true" />
            </S.Icon>
            <span>{label}</span>

            {hasMore && (
              <FaAngleRight className="more-item-icon" aria-hidden="true" />
            )}
          </S.Item>
        ))}
      </S.List>

      <Footer />
    </S.Wrapper>
  );
};

export default Account;
