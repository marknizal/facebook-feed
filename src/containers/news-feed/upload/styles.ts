import styled from "@emotion/styled";

import { COLOR, BREAKPOINT, RADIUS, FONTSIZE } from "../../../styles";
import { Card as C } from "../../../components/shared";

import * as T from "./types";

export const Card = styled(C)`
  padding: 0 1rem;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid ${COLOR.grey};

  ${BREAKPOINT.mobile} {
    border-bottom: none;
  }
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 0.5rem 0;

  ${BREAKPOINT.mobile} {
    display: none;
  }
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

  .name {
    ${BREAKPOINT.mobile} {
      display: none;
    }
  }
`;

export const Button = styled(BaseBtn)<T.ButtonProps>`
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: calc(${FONTSIZE.sm} + 0.05rem);
  background-color: ${COLOR.transparent};
  border-radius: ${RADIUS.sm};

  &.block {
    display: none;
    flex-direction: column;
    align-items: center;
    font-size: calc(${FONTSIZE.xs} - 0.05rem);
    gap: 0.15rem;
    padding: 0;

    svg {
      color: #42b35d;
    }
  }

  svg {
    font-size: ${FONTSIZE.lg};
    flex-shrink: 0;
    color: ${({ color }) => color || "inherit"};
  }

  ${BREAKPOINT.mobile} {
    &.block {
      display: flex;
    }
  }
`;
