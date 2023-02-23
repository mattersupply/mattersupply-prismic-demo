import React from "react";
import { Description, HeroTitle, Title } from "@/styled";

export const richTextComponents = {
  heading1: ({ children }: React.PropsWithChildren) => (
    <Title>{children}</Title>
  ),
  paragraph: ({ children }: React.PropsWithChildren) => (
    <Description>{children}</Description>
  ),
};

export const originalComponents = {
  heading1: ({ children }: React.PropsWithChildren) => (
    <HeroTitle>{children}</HeroTitle>
  ),
};
