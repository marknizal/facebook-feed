import styled from "@emotion/styled";
import { BREAKPOINT } from "../../../../styles";

export const Wrapper1 = styled.div`
  aspect-ratio: 1/1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const Wrapper2 = styled.div`
  aspect-ratio: 1/1;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    cursor: pointer;
  }
`;

export const Wrapper3 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.15rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
    cursor: pointer;
  }

  ${BREAKPOINT.tablet} {
    aspect-ratio: 1/1;
  }

  ${BREAKPOINT.mobile} {
    aspect-ratio: 1/1;
  }
`;

export const Wrapper4 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.15rem;
  aspect-ratio: 1/1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  .grid2 {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0.15rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: 1/1;
      cursor: pointer;
    }
  }
`;

export const Wrapper5 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.15rem;
  aspect-ratio: 1/1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
    cursor: pointer;
  }
`;

export const Wrapper6 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0.15rem;
  aspect-ratio: 1/1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
    cursor: pointer;
  }

  .grid6 {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0.15rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: 1/1;
      cursor: pointer;
    }
  }

  .overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    font-size: 1.25rem;
    pointer-events: none;
  }

  .overlay-wrapper {
    position: relative;
  }
`;
