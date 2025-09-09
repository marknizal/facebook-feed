import type { FC } from "react";
import { LuSearch } from "react-icons/lu";

import * as S from "./styles";

const InputSearch: FC = () => {
  return (
    <S.Wrapper>
      <LuSearch />
      <S.Input placeholder="Search Facebook" name="Search" />
    </S.Wrapper>
  );
};

export default InputSearch;
