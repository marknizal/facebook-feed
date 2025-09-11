import { useState, useEffect, type FC } from "react";

import * as S from "./styles";
import * as T from "./types";

const Photos: FC<T.PhotosProps> = ({ images, onImageClick }) => {
  const count = images.length;
  const maxVisible = 5;
  const visible = images.slice(0, Math.min(count, maxVisible));
  const extra = count > maxVisible ? count - maxVisible : 0;

  const [isTall, setIsTall] = useState(false);

  useEffect(() => {
    if (count === 1) {
      const img = new Image();
      img.src = images[0];
      img.onload = () => {
        const ratio = img.width / img.height;
        setIsTall(ratio < 0.8);
      };
    }
  }, [count, images]);

  if (count === 1 && !isTall) {
    return (
      <S.Wrapper1>
        <img
          src={images[0]}
          alt="photo-0"
          onClick={() => onImageClick?.(images[0], 0)}
        />
      </S.Wrapper1>
    );
  }

  if (count === 1 && isTall) {
    return (
      <S.Wrapper2>
        <img
          src={images[0]}
          alt="photo-0"
          onClick={() => onImageClick?.(images[0], 0)}
        />
      </S.Wrapper2>
    );
  }

  if (count === 2) {
    return (
      <S.Wrapper3>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`photo-${i}`}
            onClick={() => onImageClick?.(src, i)}
          />
        ))}
      </S.Wrapper3>
    );
  }

  if (count === 3) {
    return (
      <S.Wrapper4>
        <img
          src={images[0]}
          alt="photo-0"
          onClick={() => onImageClick?.(images[0], 0)}
        />
        <div className="grid2">
          {images.slice(1).map((src, i) => (
            <img
              key={i + 1}
              src={src}
              alt={`photo-${i + 1}`}
              onClick={() => onImageClick?.(src, i + 1)}
            />
          ))}
        </div>
      </S.Wrapper4>
    );
  }

  if (count === 4) {
    return (
      <S.Wrapper5>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`photo-${i}`}
            onClick={() => onImageClick?.(src, i)}
          />
        ))}
      </S.Wrapper5>
    );
  }

  if (count >= 5) {
    return (
      <S.Wrapper6>
        <img
          src={images[0]}
          alt="photo-0"
          onClick={() => onImageClick?.(images[0], 0)}
        />
        <div className="grid6">
          {visible.slice(1).map((src, i) => {
            const showOverlay = extra > 0 && i === visible.length - 3;
            return (
              <div key={i + 1} className={showOverlay ? "overlay-wrapper" : ""}>
                <img
                  src={src}
                  alt={`photo-${i + 1}`}
                  onClick={() => onImageClick?.(src, i + 1)}
                />
                {showOverlay && <div className="overlay">+{extra}</div>}
              </div>
            );
          })}
        </div>
      </S.Wrapper6>
    );
  }

  return null;
};

export default Photos;
