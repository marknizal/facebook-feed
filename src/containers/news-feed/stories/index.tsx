import type { FC } from "react";

import Profile from "../../../assets/avatar.jpg";
import styled from "@emotion/styled";
import { COLOR, BREAKPOINT, FONTSIZE, RADIUS, SHADOW } from "../../../styles";
import { Avatar as A } from "../../../components/shared";

import { LuPlus } from "react-icons/lu";

const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
  overflow: auto;

  ${BREAKPOINT.mobile} {
    padding: 0.5rem;
    background-color: ${COLOR.white};
    box-shadow: ${SHADOW.thin};
  }

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Item = styled.li`
  position: relative;
  width: 7rem;
  aspect-ratio: 9 / 16;
  border-radius: ${RADIUS.md};
  box-shadow: ${SHADOW.thin};
  flex-shrink: 0;
  overflow: hidden;
  cursor: pointer;

  .story {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
    pointer-events: none;
    transition: all 0.3s ease;
  }

  &:hover .overlay {
    height: 100%;
  }

  .create-story {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background-color: ${COLOR.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;
  }

  .create-story .icon {
    position: absolute;
    top: -1rem;
    background-color: ${COLOR.primary};
    color: ${COLOR.white};
    width: 2.5rem;
    aspect-ratio: 1 / 1;
    border-radius: ${RADIUS.full};
    padding: 0.25rem;
    border: 4px solid ${COLOR.white};
    cursor: pointer;
  }

  .create-story p {
    font-size: ${FONTSIZE.xs};
    margin-top: auto;
  }

  .name {
    position: absolute;
    left: 0.75rem;
    bottom: 0.75rem;
    right: 0.75rem;
    font-size: ${FONTSIZE.xs};
    color: ${COLOR.white};
    z-index: 2;
  }
`;

const Avatar = styled(A)`
  position: absolute;
  left: 0.75rem;
  top: 0.75rem;
  border: 4px solid ${COLOR.primary};
  z-index: 2;
`;

const STORIES = [
  {
    id: 1,
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
    story:
      "https://cdn.dribbble.com/userupload/44845972/file/42affd5a3b90e39c8bfc41e9568373ee.jpg?resize=1504x1128&vertical=center",
    name: "John Doe",
  },
  {
    id: 2,
    profile: "https://randomuser.me/api/portraits/women/44.jpg",
    story:
      "https://cdn.dribbble.com/userupload/44788172/file/41a3da80f4c5bbd010946009d09d1499.png?resize=1504x1128&vertical=center",
    name: "Jane Smith",
  },
  {
    id: 3,
    profile: "https://randomuser.me/api/portraits/men/76.jpg",
    story:
      "https://cdn.dribbble.com/userupload/44845420/file/bb14e8acb16bd01680e05939f0fa41c1.webp?resize=2048x1536&vertical=center",
    name: "Alex Johnson",
  },
  {
    id: 4,
    profile: "https://randomuser.me/api/portraits/women/65.jpg",
    story:
      "https://cdn.dribbble.com/userupload/44849627/file/dae5387ad7823d295ee7609d39a4029d.png?resize=1504x1128&vertical=center",
    name: "Emily Davis",
  },
  {
    id: 5,
    profile: "https://randomuser.me/api/portraits/men/88.jpg",
    story:
      "https://cdn.dribbble.com/userupload/44843597/file/ebd1f63202f2bf09350417be4935d1b6.jpg?resize=1504x1128&vertical=center",
    name: "Michael Brown",
  },
];

const Stories: FC = () => {
  return (
    <Wrapper>
      <Item>
        <img className="story" src={Profile} alt="story" loading="lazy" />

        <div className="create-story">
          <LuPlus className="icon" />
          <p>Create story</p>
        </div>
      </Item>

      {STORIES.map((item) => (
        <Item key={item.id}>
          <Avatar src={item.profile} alt={item.name} loading="lazy" />
          <img
            className="story"
            src={item.story}
            alt={item.name}
            loading="lazy"
          />
          <div className="overlay" />
          <p className="name">{item.name}</p>
        </Item>
      ))}
    </Wrapper>
  );
};

export default Stories;
