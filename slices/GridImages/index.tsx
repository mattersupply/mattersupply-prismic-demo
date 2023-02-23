import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { RTNode } from "@prismicio/types";
import { Title, Description, Section, ImagesGrid, ImageInGrid } from "@/styled";
import { richTextComponents } from "@/utils/rich-text";

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
export default function GridImages(gridImagesProperties: GridImagesProperties) {
  const { slice } = gridImagesProperties;

  return (
    <Section>
      <PrismicRichText
        field={slice?.primary?.title}
        components={richTextComponents}
      />
      <PrismicRichText
        field={slice?.primary?.description}
        components={richTextComponents}
      />
      <ImagesGrid>
        {slice?.items?.map((item, i) => {
          return <ImageInGrid key={i} field={item?.image} />;
        })}
      </ImagesGrid>
    </Section>
  );
}
