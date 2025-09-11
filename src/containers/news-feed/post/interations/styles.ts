import styled from "@emotion/styled";
import { COLOR, FONTSIZE, RADIUS } from "../../../../styles";

export const Wrapper = styled.div`
  padding: 0 0.8rem;
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid ${COLOR.grey};
  padding: 0.25rem 0;
`;

export const Button = styled.button`
  border: none;
  background-color: ${COLOR.white};
  cursor: pointer;
  padding: 0.5rem;
  font-size: ${FONTSIZE.base};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  border-radius: ${RADIUS.sm};

  svg {
    font-size: ${FONTSIZE.md};
  }

  &:hover {
    background-color: ${COLOR.background};
  }
`;
