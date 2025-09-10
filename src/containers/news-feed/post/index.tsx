import type { FC } from "react";
import { formatTime } from "../../../utils/helpers/formatTime";

import { IoMdGlobe } from "react-icons/io";
import { FaUserFriends, FaLock, FaUserCog } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { CgClose } from "react-icons/cg";

import styled from "@emotion/styled";
import { COLOR, FONTSIZE } from "../../../styles";
import { Card as C, Avatar } from "../../../components/shared";
import { Button } from "antd";

import Profile from "../../../assets/A1.jpg";

const Card = styled(C)``;

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .profile-avatar {
    cursor: pointer;
  }
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  .name-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  .username {
    font-size: ${FONTSIZE.sm};
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }

  .verified,
  .follow-link {
    color: ${COLOR.primary};
    font-size: ${FONTSIZE.sm};

    &:hover {
      text-decoration: underline;
    }
  }

  time {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: ${FONTSIZE.xs};
    color: ${COLOR.grey30};
  }
`;

const Actions = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    font-size: ${FONTSIZE.md};
  }
`;

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

const USER = {
  user: {
    name: "John Mark Doe",
    avatar: Profile,
    type: "page", // "account" | "page"
    isVerified: true,
  },
  createdAt: "2025-09-10T12:35:00Z",
  privacy: "friends", // "public" | "friends" | "only" | "custom"
};

const Post: FC = () => {
  const { user, createdAt, privacy } = USER;

  return (
    <Card aria-label={`Post by ${user.name}`}>
      <Header>
        <UserInfo>
          <Avatar
            className="profile-avatar"
            src={user.avatar}
            alt={`Profile picture of ${user.name}`}
            loading="lazy"
          />

          <UserDetails>
            <div className="name-row" role="heading" aria-level={2}>
              <span className="username">{user.name}</span>

              {user.isVerified && (
                <MdVerified
                  className="verified"
                  aria-label="Verified account"
                />
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
          </UserDetails>
        </UserInfo>

        <Actions aria-label="Post actions">
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
        </Actions>
      </Header>
    </Card>
  );
};

export default Post;
