import type { FC } from "react";
import { MENU_ITEMS } from "../../../constants";
import Profile from "../../../../../assets/avatar.jpg";

import Account from "../dropdowns/account";
import { Dropdown } from "antd";
import * as S from "./styles";

const Menu: FC = () => {
  return (
    <S.Wrapper>
      {MENU_ITEMS.map((item, index) => (
        <S.Item key={index} aria-label={item.label} title={item.label}>
          <item.icon />
        </S.Item>
      ))}

      <Dropdown
        popupRender={() => <Account />}
        arrow={{ pointAtCenter: true }}
        trigger={["click"]}
        placement="bottomRight"
      >
        <S.Avatar src={Profile} alt="avatar" title="Account" loading="lazy" />
      </Dropdown>
    </S.Wrapper>
  );
};

export default Menu;
