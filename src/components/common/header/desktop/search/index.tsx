import type { FC } from "react";

import * as S from "./styles";
import InputSearch from "../../../input-search";

const Search: FC = () => {
  return (
    <S.Wrapper>
      <S.Logo />
      <InputSearch />
    </S.Wrapper>
  );
};

export default Search;
