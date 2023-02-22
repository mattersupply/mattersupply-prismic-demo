import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { Title, Description, Section, ImagesGrid, ImageInGrid } from "@/styled";

/**
 * @typedef {import("@prismicio/client").Content.GridImagesSlice} GridImagesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GridImagesSlice>} GridImagesProps
 * @param { GridImagesProps }
 */
const GridImages = ({ slice }) => (
  <Section>
    <Title>
      <PrismicRichText field={slice?.primary?.title || ""} />
    </Title>
    <Description>
      <PrismicRichText field={slice?.primary?.description || ""} />
    </Description>
    <ImagesGrid>
      {slice?.items?.map((item, i) => (
        <ImageInGrid
          key={`rendered-image-${i}`}
          src={item.image.url}
          alt={item.image.alt}
        />
      ))}
    </ImagesGrid>
  </Section>
);

export default GridImages;
