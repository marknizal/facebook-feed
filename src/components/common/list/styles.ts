import { FaAngleDown } from "react-icons/fa6";

import styled from "@emotion/styled";
import { COLOR, FONTSIZE, RADIUS } from "../../../styles";

export const Wrapper = styled.ul<{ $border?: boolean }>`
  list-style: none;
  display: block;

  ${({ $border }) =>
    $border &&
    `
      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;
      border-bottom: 1px solid ${COLOR.grey10};
    `}
`;

export const Title = styled.p`
  padding: 0.5rem;
  color: ${COLOR.grey30};
  font-weight: 600;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.ash};
  }
`;

export const Text = styled.p`
  font-size: ${FONTSIZE.sm};
  font-weight: 500;
`;

export const Avatar = styled.div<{ $type?: "default" | "circle" | "square" }>`
  width: 2.25rem;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: ${({ $type }) =>
    $type === "circle" ? RADIUS.full : $type === "square" ? "0.5rem" : "0"};
  padding: ${({ $type }) => ($type === "default" ? "0.2rem" : "0")};

  img {
    width: 100%;
    height: 100%;
    object-fit: ${({ $type }) => ($type === "default" ? "contain" : "cover")};
  }
`;

export const SeeMore = styled.button`
  border: none;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.8rem;
  width: 100%;
  border-radius: 0.5rem;
  font-size: ${FONTSIZE.sm};
  font-weight: 500;
  background: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.grey};
  }
`;

export const Icon = styled(FaAngleDown)`
  display: flex;
  padding: 0.5rem;
  border-radius: ${RADIUS.full};
  background-color: ${COLOR.ash};
  width: 2.25rem;
  height: 2.25rem;
`;
