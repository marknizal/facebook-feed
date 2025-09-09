import type { FC } from "react";
import { useState } from "react";

import * as S from "./styles";
import * as T from "./types";

const List: FC<T.ListProps> = ({
  items,
  length,
  avatar = "default",
  ariaLabel = "List",
  border = false,
  renderItem,
}) => {
  const [showAll, setShowAll] = useState(false);

  const maxLength = typeof length === "number" && length < items.length;
  const visible = maxLength && !showAll ? items.slice(0, length) : items;

  const handleSeeMore = () => {
    setShowAll(true);
  };

  return (
    <S.Wrapper $border={border} role="list" aria-label={ariaLabel}>
      {visible.map((item) => {
        const avatarType = item.avatar || avatar;

        return renderItem ? (
          <li key={item.id} role="listitem">
            {renderItem(item)}
          </li>
        ) : (
          <S.Item key={item.id} role="listitem">
            <S.Avatar $type={avatarType}>
              <img
                src={item.src}
                alt={`Avatar for ${item.label}`}
                loading="lazy"
              />
            </S.Avatar>
            <S.Text>{item.label}</S.Text>
          </S.Item>
        );
      })}

      {maxLength && !showAll && (
        <li role="listitem">
          <S.SeeMore
            onClick={handleSeeMore}
            aria-expanded={showAll}
            aria-label="Show more items"
          >
            <S.Icon aria-hidden="true" />
            See more
          </S.SeeMore>
        </li>
      )}
    </S.Wrapper>
  );
};

export default List;
