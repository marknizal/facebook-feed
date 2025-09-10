import type { FC } from "react";
import Profile from "../../../assets/avatar.jpg";

import { FaVideo, FaImage, FaRegFaceSmile } from "react-icons/fa6";
import { Avatar } from "../../../components/shared";

import * as S from "./styles";

const ACTIONS = [
  { icon: FaVideo, label: "Live video", color: "#F02848" },
  { icon: FaImage, label: "Photo/video", color: "#42B35D" },
  { icon: FaRegFaceSmile, label: "Feeling/activity", color: "#F7BA28" },
];

const Upload: FC = () => {
  return (
    <S.Card>
      <S.User>
        <Avatar
          src={Profile}
          alt="Mark John Allen profile picture"
          loading="lazy"
        />
        <S.Write aria-label="Start a post">
          What's on your mind, Mark John Allen?
        </S.Write>
      </S.User>

      <S.Actions>
        {ACTIONS.map(({ icon: Icon, label, color }) => (
          <S.Button key={label} color={color} aria-label={label}>
            <Icon aria-hidden="true" />
            {label}
          </S.Button>
        ))}
      </S.Actions>
    </S.Card>
  );
};

export default Upload;
