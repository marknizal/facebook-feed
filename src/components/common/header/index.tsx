import type { FC } from "react";

import styled from "@emotion/styled";
import { COLOR, SHADOW } from "../../../styles";

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 3.5rem;
  width: 100%;
  background-color: ${COLOR.white};
  box-shadow: ${SHADOW.thin};
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

const Header: FC = () => {
  return <Wrapper>Header</Wrapper>;
};

export default Header;
