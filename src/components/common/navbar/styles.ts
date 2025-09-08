import styled from "@emotion/styled";
import { COLOR, FONTSIZE } from "../../../styles";

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
  align-items: center;
  gap: 0.5rem;
`;

export const Link = styled.a<{ $active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 3rem;
  border-radius: 0.5rem;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  color: inherit;

  ${({ $active }) => $active && activeStyles};

  &:hover,
  &:focus {
    ${({ $active }) => !$active && inactiveStyles};
  }

  svg {
    font-size: ${FONTSIZE.lg};
  }
`;
