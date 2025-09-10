import styled from "@emotion/styled";
import { COLOR, FONTSIZE } from "../../../styles";

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.35rem;
  padding: 0.5rem;
`;

export const Link = styled.a`
  color: ${COLOR.grey30};
  font-size: ${FONTSIZE.xs};
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
    outline: none;
  }

  &::after {
    content: "·";
    margin-left: 0.35rem;
  }

  &:last-of-type::after {
    content: "";
  }
`;
