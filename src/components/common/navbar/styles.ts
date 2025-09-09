import styled from "@emotion/styled";
import { COLOR, FONTSIZE, BREAKPOINT } from "../../../styles";

/* --------------- Styles --------------- */

const activeStyles = `
  border-radius: 0.5rem 0.5rem 0 0;
  color: ${COLOR.primary};
  border-bottom-color: ${COLOR.primary};
`;

const inactiveStyles = `
  background-color: ${COLOR.background};
`;

/* ---------------- Components --------------- */

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
  height: 100%;

  li {
    display: flex;
    height: 100%;
  }

  ${BREAKPOINT.mobile} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0;
  }
`;

export const Link = styled.a<{ $active?: boolean; $isMobile?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  border-radius: 0.5rem;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  color: inherit;
  cursor: pointer;
  flex: 1;

  ${({ $isMobile }) => $isMobile && "display: none;"};
  ${({ $active }) => $active && activeStyles};

  &:hover,
  &:focus {
    ${({ $active }) => !$active && inactiveStyles};
  }

  svg {
    font-size: ${FONTSIZE.lg};
    flex-shrink: 0;
  }

  ${BREAKPOINT.tablet} {
    padding: 0 1.25rem;
  }

  ${BREAKPOINT.mobile} {
    padding: 0.5rem;
    ${({ $isMobile }) => $isMobile && "display: flex;"};
  }
`;
