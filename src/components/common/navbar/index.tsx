import { useState, type FC } from "react";
import { NAV_ITEMS } from "./constants";

import * as S from "./styles";

const Navbar: FC = () => {
  const [active, setActive] = useState("home");

  return (
    <nav aria-label="Main Navigation">
      <S.NavList>
        {NAV_ITEMS.map(({ id, path, label, Icon }) => (
          <li key={id}>
            <S.Link
              href={path}
              id={id}
              $active={active === id}
              onClick={() => setActive(id)}
              aria-label={label}
            >
              <Icon />
            </S.Link>
          </li>
        ))}
      </S.NavList>
    </nav>
  );
};

export default Navbar;
