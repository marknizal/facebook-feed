import { LuPlus } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useCarousel } from "../../../utils/hooks/useCarousel";

import { STORIES } from "../../data";

import Profile from "../../../assets/avatar.jpg";
import * as S from "./styles";

const Stories: React.FC = () => {
  const { scrollRef, isLeft, isRight, scroll } = useCarousel();

  return (
    <S.Wrapper>
      {isLeft && (
        <S.Button
          className="left"
          shape="circle"
          onClick={() => scroll("left")}
          icon={<FaChevronLeft />}
          aria-label="Scroll left"
        />
      )}

      {isRight && (
        <S.Button
          className="right"
          shape="circle"
          onClick={() => scroll("right")}
          icon={<FaChevronRight />}
          aria-label="Scroll right"
        />
      )}

      <S.List ref={scrollRef}>
        <S.Item>
          <S.Story src={Profile} alt="Your story" loading="lazy" />

          <S.CreateStory aria-label="Create new story">
            <LuPlus className="icon" />
            <p>Create story</p>
          </S.CreateStory>
        </S.Item>

        {STORIES.map((item) => (
          <S.Item key={item.id} tabIndex={0}>
            <S.Avatar
              src={item.profile}
              alt={`${item.name} Profile`}
              loading="lazy"
            />

            <S.Story
              src={item.story}
              alt={`${item.name}'s story`}
              loading="lazy"
            />

            <S.Overlay className="overlay" />
            <S.Name>{item.name}</S.Name>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  );
};

export default Stories;
