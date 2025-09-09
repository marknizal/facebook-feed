import styled from "@emotion/styled";
import { FONTSIZE, COLOR, BREAKPOINT } from "../../../styles";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  gap: 0.25rem;
  background-color: ${COLOR.background};

  svg {
    font-size: ${FONTSIZE.base};
  }

  ${BREAKPOINT.tablet} {
    width: 2.55rem;
    aspect-ratio: 1/1;
    justify-content: center;
    gap: 0;
    padding: 0;

    svg {
      font-size: ${FONTSIZE.md};
    }
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0.2rem;
  font-size: ${FONTSIZE.sm};

  &:focus,
  &:hover {
    outline: none;
  }

  ${BREAKPOINT.tablet} {
    display: none;
  }
`;
