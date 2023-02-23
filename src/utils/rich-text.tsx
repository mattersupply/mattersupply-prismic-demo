import React from "react";
import { Description, Title } from "@/styled";

export const richTextComponents = {
  heading1: ({ children }) => <Title>{children}</Title>,
  paragraph: ({ children }) => <Description>{children}</Description>,
};
