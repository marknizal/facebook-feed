import type { FC } from "react";

import Navbar from "../../navbar";
import Topbar from "./top-bar";

import * as S from "./styles";

const MobileHeader: FC = () => {
  return (
    <S.Wrapper>
      <Topbar />
      <Navbar />
    </S.Wrapper>
  );
};

export default MobileHeader;
