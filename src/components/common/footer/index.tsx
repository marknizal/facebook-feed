import type { FC } from "react";

import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { FOOTER_LINKS, MORE_LINKS } from "../constants";

import * as S from "./styles";

const moreItems: MenuProps["items"] = MORE_LINKS.map((link) => ({
  key: link.key,
  label: <a href={link.path}>{link.label}</a>,
}));

const Footer: FC = () => (
  <footer>
    <S.Nav aria-label="Footer navigation">
      {FOOTER_LINKS.map((link) =>
        link.isDropdown ? (
          <Dropdown
            key={link.id}
            menu={{ items: moreItems }}
            trigger={["click"]}
          >
            <S.Link
              role="button"
              href="#"
              aria-haspopup="menu"
              aria-expanded="false"
              onClick={(e) => e.preventDefault()}
            >
              {link.label}
            </S.Link>
          </Dropdown>
        ) : (
          <S.Link key={link.id} id={link.id} href={link.path}>
            {link.label}
          </S.Link>
        )
      )}
    </S.Nav>
  </footer>
);

export default Footer;
