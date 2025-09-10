import styled from "@emotion/styled";
import { COLOR, BREAKPOINT } from "../../../styles";

const SIDEBAR = "24%";
const HEADER = "3.5rem";
const MOBILE = "5.75rem";

export const Main = styled.main`
  margin-top: ${HEADER};
  display: flex;
  background-color: ${COLOR.background};
  min-height: calc(100vh - ${HEADER});

  ${BREAKPOINT.mobile} {
    margin-top: ${MOBILE};
    min-height: calc(100vh - ${MOBILE});
  }
`;

export const Aside = styled.aside`
  position: fixed;
  display: none;
  top: ${HEADER};
  width: ${SIDEBAR};
  height: calc(100vh - ${HEADER});
  padding: 1rem 0.5rem 0.5rem;
  overflow-y: hidden;

  &:hover {
    overflow-y: auto;
  }

  ${BREAKPOINT.desktop} {
    display: block;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;

  ${BREAKPOINT.desktop} {
    margin: 0 ${SIDEBAR};
  }

  ${BREAKPOINT.tablet} {
    margin: 0 4.5rem;
  }

  ${BREAKPOINT.mobile} {
    padding: 0;
    gap: 0.5rem;
  }
`;

export const Left = styled(Aside)`
  left: 0;
`;

export const Right = styled(Aside)`
  right: 0;
`;
