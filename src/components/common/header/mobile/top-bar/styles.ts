import styled from "@emotion/styled";
import { COLOR, FONTSIZE, RADIUS } from "../../../../../styles";

export const Wrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const Logo = styled.h1`
  color: ${COLOR.primary};
  font-size: calc(${FONTSIZE.lg} + 0.25rem);
  font-weight: 700;
`;

export const Action = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
`;

export const Item = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${COLOR.ash};
  border-radius: ${RADIUS.full};
  width: 2.25rem;
  display: flex;
  justify-content: center;
  aspect-ratio: 1 / 1;
  transition: all 0.2s ease-in-out;

  svg {
    font-size: ${FONTSIZE.md};
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${COLOR.grey10};
  }
`;
