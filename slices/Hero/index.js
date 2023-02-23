import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Centered, Description, Section, Title } from "@/styled";
import styled from "@emotion/styled";

import { richTextComponents } from "@/utils/rich-text";

const Image = styled(PrismicNextImage)`
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
`;

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
export default function Hero({ slice }) {
  return (
    <Section>
      {slice.primary.title ? (
        <PrismicRichText
          field={slice.primary.title}
          components={richTextComponents}
        />
      ) : (
        <Title>Template slice, update me!</Title>
      )}
      <Centered>
        <Image field={slice.primary.image} />
      </Centered>
      {slice.primary.description ? (
        <PrismicRichText
          field={slice.primary.description}
          components={richTextComponents}
        />
      ) : (
        <Description>
          start by editing this slice from inside Slice Machine!
        </Description>
      )}
    </Section>
  );
}
