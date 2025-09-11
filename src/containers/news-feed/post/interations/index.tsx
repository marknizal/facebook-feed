import type { FC } from "react";
import { LuThumbsUp, LuMessageCircle, LuShare } from "react-icons/lu";

import * as S from "./styles";

const actions = [
  { id: "like", icon: <LuThumbsUp />, label: "Like" },
  { id: "comment", icon: <LuMessageCircle />, label: "Comment" },
  { id: "share", icon: <LuShare />, label: "Share" },
];

const Interactions: FC = () => {
  return (
    <S.Wrapper>
      <S.Actions>
        {actions.map(({ id, icon, label }) => (
          <S.Button key={id} data-id={id}>
            {icon} {label}
          </S.Button>
        ))}
      </S.Actions>
    </S.Wrapper>
  );
};

export default Interactions;
