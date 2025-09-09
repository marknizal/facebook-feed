import styled from "@emotion/styled";
import { COLOR, BREAKPOINT, SHADOW } from "../../../../styles";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 3.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 1rem;
  background-color: ${COLOR.white};
  box-shadow: ${SHADOW.thin};

  ${BREAKPOINT.mobile} {
    display: none;
  }
`;
