import styled from "@emotion/styled";
import { mq } from "./theme";

export const ImagesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 80rem;
  margin: 1.25rem 2rem;
`;

export const ImageInGrid = styled.img`
  width: 100%;
  padding: 1rem;

  ${mq[0]} {
    width: 50%;
  }

  ${mq[1]} {
    width: 33%;
  }
`;
