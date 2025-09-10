import styled from "@emotion/styled";
import { COLOR, FONTSIZE, RADIUS, BREAKPOINT } from "../../../../../styles";
import { Avatar as A } from "../../../../shared";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 25%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;

  ${BREAKPOINT.tablet} {
    width: auto;
    max-width: inherit;
  }
`;

export const Item = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${COLOR.ash};
  padding: 0.65rem;
  border-radius: ${RADIUS.full};
  transition: all 0.2s ease-in-out;

  svg {
    font-size: ${FONTSIZE.md};
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${COLOR.grey10};
  }
`;

export const Avatar = styled(A)`
  width: 2.55rem;
  cursor: pointer;
`;
