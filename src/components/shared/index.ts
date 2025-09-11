import styled from "@emotion/styled";
import { COLOR, BREAKPOINT, RADIUS, SHADOW } from "../../styles";
import { Spin } from "antd";

import * as T from "./types";

export const Card = styled.section`
  display: block;
  border-radius: ${RADIUS.md};
  background-color: ${COLOR.white};
  box-shadow: ${SHADOW.thin};
  overflow: hidden;

  ${BREAKPOINT.mobile} {
    border-radius: 0;
  }
`;

export const Avatar = styled.img<T.AvatarProps>`
  aspect-ratio: 1 / 1;
  width: ${(props) => props.size || "2.55rem"};
  border-radius: ${RADIUS.full};
  object-fit: cover;
`;

export const Loader = styled(Spin)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
`;
