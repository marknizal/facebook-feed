import styled from "@emotion/styled";
import { COLOR, FONTSIZE } from "../../../../styles";

export const Wrapper = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem;
  padding-bottom: 0;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .profile-avatar {
    cursor: pointer;
  }
`;

export const UserDetails = styled.div`
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

export const Actions = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    font-size: ${FONTSIZE.md};
  }
`;
