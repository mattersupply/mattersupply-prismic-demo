import styled from "@emotion/styled";
import { mq } from "../theme";

export const Section = styled.section<{
  backgroundImage: string | undefined;
}>`
  ${(props) =>
    props.backgroundImage
      ? `
        background-image: url(${props.backgroundImage});
        background-position: center center;
        background-size: cover;
        height: 41.67rem;
        overflow: auto;
        display: flex;
        justify-content: center;
        align-items: center;

        ${mq[0]} {
          height: 100vh;
        }
      `
      : `
        max-width: 80rem;
        margin: 1.25rem auto;
      `}
`;
