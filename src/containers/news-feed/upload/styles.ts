import styled from "@emotion/styled";

import { COLOR, RADIUS, FONTSIZE } from "../../../styles";
import { Card as C } from "../../../components/shared";

import * as T from "./types";

export const Card = styled(C)`
  padding: 0 1rem;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid ${COLOR.grey};
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 0.5rem 0;
`;

export const BaseBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${COLOR.background};
  }
`;

export const Write = styled(BaseBtn)`
  justify-content: flex-start;
  width: 100%;
  text-align: left;
  padding: 0.75rem 1rem;
  font-size: ${FONTSIZE.base};
  color: ${COLOR.grey30};
  background-color: ${COLOR.background};
  border-radius: ${RADIUS.lg};
`;

export const Button = styled(BaseBtn)<T.ButtonProps>`
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: calc(${FONTSIZE.sm} + 0.05rem);
  background-color: ${COLOR.transparent};
  border-radius: ${RADIUS.sm};

  svg {
    font-size: ${FONTSIZE.lg};
    flex-shrink: 0;
    color: ${({ color }) => color || "inherit"};
  }
`;
