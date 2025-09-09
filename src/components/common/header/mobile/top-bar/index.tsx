import type { FC } from "react";

import * as S from "./styles";
import { ACTIONS } from "./constants";

const Topbar: FC = () => {
  return (
    <S.Wrapper>
      <S.Logo>facebook</S.Logo>

      <S.Action>
        {ACTIONS.map((item) => (
          <S.Item key={item.id} aria-label={item.label}>
            <item.icon />
          </S.Item>
        ))}
      </S.Action>
    </S.Wrapper>
  );
};

export default Topbar;
