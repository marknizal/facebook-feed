import type { FC } from "react";
import Header from "../header";

import styled from "@emotion/styled";
import { COLOR, BREAKPOINT } from "../../../styles";

const SIDEBAR = "25%";
const HEADER = "3.5rem";
const TABLET = "10%";

const Main = styled.main`
  margin-top: ${HEADER};
  display: flex;
  background-color: ${COLOR.background};
  min-height: calc(100vh - ${HEADER});
`;

const Aside = styled.aside`
  position: fixed;
  display: none;
  top: ${HEADER};
  width: ${SIDEBAR};
  height: calc(100vh - ${HEADER});
  overflow-y: hidden;

  &:hover {
    overflow-y: auto;
  }

  ${BREAKPOINT.desktop} {
    display: block;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;

  ${BREAKPOINT.tablet} {
    margin: 0 ${TABLET};
  }

  ${BREAKPOINT.desktop} {
    margin: 0 ${SIDEBAR};
  }
`;

const Left = styled(Aside)`
  left: 0;
`;

const Right = styled(Aside)`
  right: 0;
`;

const Layout: FC = () => {
  return (
    <Main>
      <Header />
      <Left aria-label="Left sidebar"></Left>
      <Content role="main"></Content>
      <Right aria-label="Right sidebar"></Right>
    </Main>
  );
};

export default Layout;
