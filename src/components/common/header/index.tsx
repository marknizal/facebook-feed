import type { FC } from "react";
import { FaFacebook } from "react-icons/fa";

import styled from "@emotion/styled";
import { COLOR, SHADOW, FONTSIZE } from "../../../styles";

import Input from "../input";
import Navbar from "../navbar";

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
  justify-content: space-between;
  padding: 0 1rem;

  .left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Logo = styled(FaFacebook)`
  color: ${COLOR.primary};
  font-size: calc(${FONTSIZE.xl} + 0.8rem);
  cursor: pointer;
`;

const Header: FC = () => {
  return (
    <Wrapper>
      <div className="left">
        <Logo />
        <Input />
      </div>

      <Navbar />

      <div></div>
    </Wrapper>
  );
};

export default Header;
