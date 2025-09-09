import type { FC } from "react";
import { MENU_ITEMS } from "./constants";

import Profile from "../../../../../assets/avatar.jpg";
import * as S from "./styles";

const Menu: FC = () => {
  return (
    <S.Wrapper>
      {MENU_ITEMS.map((item, index) => (
        <S.Item key={index} aria-label={item.label} title={item.label}>
          <item.icon />
        </S.Item>
      ))}

      <S.Avatar src={Profile} alt="avatar" title="Account" />
    </S.Wrapper>
  );
};

export default Menu;
