import type { FC } from "react";

import Navbar from "../../navbar";
import Search from "./search";
import Menu from "./menu";

import * as S from "./styles";

const DesktopHeader: FC = () => {
  return (
    <S.Wrapper>
      <Search />
      <Navbar />
      <Menu />
    </S.Wrapper>
  );
};

export default DesktopHeader;
