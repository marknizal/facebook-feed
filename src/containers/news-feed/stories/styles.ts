import styled from "@emotion/styled";

import { Button as B } from "antd";
import { COLOR, BREAKPOINT, FONTSIZE, RADIUS, SHADOW } from "../../../styles";
import { Avatar as A } from "../../../components/shared";

export const Wrapper = styled.div`
  position: relative;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
  overflow-x: auto;

  ${BREAKPOINT.mobile} {
    padding: 0.5rem;
    background-color: ${COLOR.white};
    box-shadow: ${SHADOW.thin};
  }

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Button = styled(B)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  width: 3rem !important;
  height: 3rem !important;
  border: none;
  background-color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;

  svg {
    flex-shrink: 0;
    font-size: 1.25rem;
  }

  &.left {
    left: 1rem;
  }

  &.right {
    right: 1rem;
  }

  ${BREAKPOINT.mobile} {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
  pointer-events: none;
  transition: all 0.3s ease;
`;

export const Item = styled.li`
  position: relative;
  width: 7rem;
  aspect-ratio: 9 / 16;
  border-radius: ${RADIUS.md};
  box-shadow: ${SHADOW.thin};
  flex-shrink: 0;
  overflow: hidden;
  cursor: pointer;

  &:hover .overlay {
    height: 100%;
  }
`;

export const Story = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CreateStory = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background-color: ${COLOR.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 1rem;
  border: none;
  cursor: pointer;

  &:hover .icon {
    transform: scale(1.1);
  }

  .icon {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    top: -1rem;
    background-color: ${COLOR.primary};
    color: ${COLOR.white};
    width: 2.5rem;
    aspect-ratio: 1 / 1;
    border-radius: ${RADIUS.full};
    padding: 0.25rem;
    border: 4px solid ${COLOR.white};

    transition: transform 0.3s ease;
  }

  p {
    font-size: ${FONTSIZE.xs};
    margin-top: auto;
    color: ${COLOR.black};
  }
`;

export const Name = styled.p`
  position: absolute;
  left: 0.75rem;
  bottom: 0.75rem;
  right: 0.75rem;
  font-size: ${FONTSIZE.xs};
  color: ${COLOR.white};
  z-index: 2;
`;

export const Avatar = styled(A)`
  position: absolute;
  left: 0.75rem;
  top: 0.75rem;
  border: 4px solid ${COLOR.primary};
  z-index: 2;
`;
