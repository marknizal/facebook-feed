import type { FC } from "react";
import { formatTime } from "../../../../utils/helpers/formatTime";

import { IoMdGlobe } from "react-icons/io";
import { FaUserFriends, FaLock, FaUserCog } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { CgClose } from "react-icons/cg";

import { Avatar } from "../../../../components/shared";
import { Button } from "antd";

import * as S from "./styles";
import * as T from "./types";

const getPrivacyIcon = (privacy: string) => {
  switch (privacy) {
    case "public":
      return <IoMdGlobe aria-label="Public" />;
    case "friends":
      return <FaUserFriends aria-label="Friends only" />;
    case "only":
      return <FaLock aria-label="Only me" />;
    case "custom":
      return <FaUserCog aria-label="Custom audience" />;
    default:
      return <IoMdGlobe aria-label="Public" />;
  }
};

const Header: FC<T.HeaderProps> = ({ user, createdAt, privacy }) => {
  return (
    <S.Wrapper>
      <S.UserInfo>
        <Avatar
          className="profile-avatar"
          src={user.avatar}
          alt={`Profile picture of ${user.name}`}
          loading="lazy"
        />

        <S.UserDetails>
          <div className="name-row" role="heading" aria-level={2}>
            <span className="username">{user.name}</span>

            {user.isVerified && (
              <MdVerified className="verified" aria-label="Verified account" />
            )}

            {user.type === "page" && (
              <>
                <span aria-hidden="true">·</span>
                <span
                  role="button"
                  className="follow-link"
                  aria-label={`Follow ${user.name}`}
                >
                  Follow
                </span>
              </>
            )}
          </div>

          <time dateTime={createdAt}>
            {formatTime(createdAt)} <span aria-hidden="true">·</span>{" "}
            {getPrivacyIcon(privacy)}
          </time>
        </S.UserDetails>
      </S.UserInfo>

      <S.Actions aria-label="Post actions">
        <Button
          icon={<FaEllipsis />}
          shape="circle"
          type="text"
          aria-label="More options"
        />
        <Button
          icon={<CgClose />}
          shape="circle"
          type="text"
          aria-label="Close post"
        />
      </S.Actions>
    </S.Wrapper>
  );
};

export default Header;
