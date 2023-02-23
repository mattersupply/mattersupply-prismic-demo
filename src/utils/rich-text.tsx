import React from "react";
import { Description, HeroTitle, Title } from "@/styled";

export const richTextComponents = {
  heading1: ({ children }) => <Title>{children}</Title>,
  paragraph: ({ children }) => <Description>{children}</Description>,
};

export const originalComponents = {
  heading1: ({ children }) => <HeroTitle>{children}</HeroTitle>,
};
