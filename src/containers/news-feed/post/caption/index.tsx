import { useState, type FC } from "react";

import * as S from "./styles";
import * as T from "./types";

const MAX_CHARS = 100;

const Caption: FC<T.CaptionProps> = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  const withHashtags = text.replace(
    /#(\w+)/g,
    `<span class="hashtag">#$1</span>`
  );

  const plainText = withHashtags.replace(/<[^>]+>/g, "");
  const isLong = plainText.length > MAX_CHARS;

  const truncatedPlain = plainText.slice(0, MAX_CHARS);
  let truncatedHTML = withHashtags;

  if (!expanded && isLong) {
    const idx = withHashtags.indexOf(truncatedPlain.slice(-10));
    truncatedHTML = withHashtags.slice(0, idx + 10) + "...";
  }

  return (
    <S.Wrapper>
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: expanded || !isLong ? withHashtags : truncatedHTML,
        }}
      />
      {isLong && (
        <button
          className="toggle"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}
    </S.Wrapper>
  );
};

export default Caption;
