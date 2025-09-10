import styled from "@emotion/styled";
import { COLOR, BREAKPOINT, SHADOW } from "../../../../styles";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 5.75rem;
  width: 100%;
  display: none;
  align-items: stretch;
  padding: 0;
  background-color: ${COLOR.white};
  box-shadow: ${SHADOW.thin};
  z-index: 9999;

  ${BREAKPOINT.mobile} {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
