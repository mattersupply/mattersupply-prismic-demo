import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { Section } from "@/styled";
import { originalComponents } from "@/utils/rich-text";

/**
 * @typedef {import("@prismicio/client").Content.BackgroundedTitleSlice} BackgroundedTitleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BackgroundedTitleSlice>} BackgroundedTitleProps
 * @param { BackgroundedTitleProps }
 */
const BackgroundedTitle = ({ slice }) => (
  <Section backgroundImage={slice?.primary?.background_image.url}>
    <PrismicRichText
      field={slice?.primary?.title}
      components={originalComponents}
    />
  </Section>
);

export default BackgroundedTitle;
