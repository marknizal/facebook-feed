import styled from "@emotion/styled";
import { COLOR, FONTSIZE, RADIUS, SHADOW } from "../../../../../../styles";

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem;
  background-color: ${COLOR.white};
  box-shadow: ${SHADOW.medium};
  border-radius: ${RADIUS.md};
  max-width: 23rem;
`;

export const List = styled.ul`
  display: block;
  list-style: none;
  border-radius: ${RADIUS.md};

  &.account-item {
    box-shadow: ${SHADOW.medium};
    padding: 0.25rem;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem;
  border-radius: ${RADIUS.sm};
  cursor: pointer;

  span {
    font-size: ${FONTSIZE.sm};
    font-weight: 600;
  }

  .name {
    font-size: ${FONTSIZE.base};
  }

  .more-item-icon {
    margin-left: auto;
    font-size: ${FONTSIZE.md};
  }

  &:hover {
    background-color: ${COLOR.background};
  }
`;

export const Icon = styled.div`
  background-color: ${COLOR.grey};
  padding: 0.5rem;
  border-radius: ${RADIUS.full};

  svg {
    font-size: ${FONTSIZE.md};
  }
`;
