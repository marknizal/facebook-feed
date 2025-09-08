import type { FC } from "react";
import { LuSearch } from "react-icons/lu";
import styled from "@emotion/styled";
import { FONTSIZE, COLOR } from "../../../styles";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  gap: 0.25rem;
  background-color: ${COLOR.background};

  svg {
    font-size: ${FONTSIZE.base};
  }
`;

const InputContainer = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0.2rem;
  font-size: ${FONTSIZE.sm};

  &:focus,
  &:hover {
    outline: none;
  }
`;

const Input: FC = () => {
  return (
    <Wrapper>
      <LuSearch />
      <InputContainer placeholder="Search Facebook" name="Search" />
    </Wrapper>
  );
};

export default Input;
