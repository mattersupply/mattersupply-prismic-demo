import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { RTNode } from "@prismicio/types";
import { Title, Description, Section, ImagesGrid, ImageInGrid } from "@/styled";

interface GridImagesProperties {
  slice?: {
    primary?: {
      title: [RTNode];
      description: [RTNode];
    };
    items?: Array<any>;
  };
}

/**
 * @typedef {import("@prismicio/client").Content.GridImagesSlice} GridImagesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GridImagesSlice>} GridImagesProps
 * @param { GridImagesProps }
 */
const GridImages = (gridImagesProperties: GridImagesProperties) => {
  const { slice } = gridImagesProperties;
  return (
    <Section>
      <Title>
        <PrismicRichText field={slice?.primary?.title} />
      </Title>
      <Description>
        <PrismicRichText field={slice?.primary?.description} />
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
};

export default GridImages;
