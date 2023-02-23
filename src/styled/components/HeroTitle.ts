import styled from "@emotion/styled";
import { mq } from "../theme";

export const HeroTitle = styled.h1`
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 4rem;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 1px 0px 1px #cccccc, 0px 1px 1px #eeeeee, 2px 1px 1px #cccccc,
    1px 2px 1px #eeeeee, 3px 2px 1px #cccccc, 2px 3px 1px #eeeeee,
    4px 3px 1px #cccccc, 3px 4px 1px #eeeeee, 5px 4px 1px #cccccc,
    4px 5px 1px #eeeeee, 6px 5px 1px #cccccc, 5px 6px 1px #eeeeee,
    7px 6px 1px #cccccc;

  ${mq[0]} {
    font-size: 5rem;
  }

  ${mq[1]} {
    font-size: 6rem;
  }
`;
