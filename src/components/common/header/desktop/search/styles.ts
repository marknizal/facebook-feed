import { FaFacebook } from "react-icons/fa";

import styled from "@emotion/styled";
import { COLOR, FONTSIZE, BREAKPOINT } from "../../../../../styles";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 25%;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${BREAKPOINT.tablet} {
    width: auto;
    max-width: inherit;
  }
`;

export const Logo = styled(FaFacebook)`
  color: ${COLOR.primary};
  font-size: calc(${FONTSIZE.xl} + 0.75rem);
  cursor: pointer;
`;
