import type { FC } from "react";
import { POSTS } from "../../data";

import Header from "./header";
import Caption from "./caption";
import Photos from "./photos";
import Interations from "./interations";

import * as S from "./styles";

const PostList: FC = () => {
  const NEWS_FEED = [...POSTS].sort(() => Math.random() - 0.5);

  return (
    <>
      {NEWS_FEED.map((post, i) => (
        <S.Card key={i} aria-label={`Post by ${post.user.name}`}>
          <Header
            user={post.user}
            createdAt={post.createdAt}
            privacy={post.privacy}
          />
          {post.caption && <Caption text={post.caption} />}
          {post.images && post.images.length > 0 && (
            <Photos images={post.images} />
          )}
          <Interations />
        </S.Card>
      ))}
    </>
  );
};

export default PostList;
