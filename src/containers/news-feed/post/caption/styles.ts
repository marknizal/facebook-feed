import styled from "@emotion/styled";
import { COLOR, FONTSIZE } from "../../../../styles";

const block = `
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const Wrapper = styled.div`
  ${block};
  align-items: flex-start;
  padding: 0 0.8rem;

  .hashtag {
    font-weight: 500;
    color: ${COLOR.link};
  }

  .content {
    ${block};
    font-size: ${FONTSIZE.sm};
  }

  .toggle {
    background: none;
    border: none;
    color: ${COLOR.link};
    cursor: pointer;
    font-size: ${FONTSIZE.sm};
    padding: 0;
  }
`;
