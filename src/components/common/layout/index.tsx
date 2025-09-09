import type { FC } from "react";

import DesktopHeader from "../header/desktop";
import MobileHeader from "../header/mobile";

import * as S from "./styles";
import * as T from "./types";

const Layout: FC<T.LayoutProps> = ({ leftSide, rightSide, children }) => {
  return (
    <S.Main>
      <DesktopHeader />
      <MobileHeader />

      <S.Left aria-label="Left sidebar">{leftSide}</S.Left>
      <S.Content role="main">{children}</S.Content>
      <S.Right aria-label="Right sidebar">{rightSide}</S.Right>
    </S.Main>
  );
};

export default Layout;
