import React from 'react'
import { useRef } from 'react';
import { RTNode } from "@prismicio/types";
import { PrismicRichText } from '@prismicio/react'
import { Section, StarRating, Star } from "@/styled";
import { richTextComponents } from "@/utils/rich-text";
import StarIcon from "@/assets/star.svg"

interface ReviewProperties {
  slice?: {
    primary?: {
      title: [RTNode];
      description: [RTNode];
      rating: number
    };
  };
}

/**
 * @typedef {import("@prismicio/client").Content.ReviewSlice} ReviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ReviewSlice>} ReviewProps
 * @param { ReviewProps }
 */
const Review = (reviewProperties: ReviewProperties) => {
  const { slice } = reviewProperties
  const starId = 'star_svg__star';
  const maskId = 'star_svg__half';

  const fullStars = Math.floor(slice?.primary?.rating || 0)
  const halfStar = slice?.primary?.rating ? (Math.abs(slice?.primary?.rating || 0)- Math.floor(slice?.primary?.rating || 0)  > 0) : false

  return (
    <Section>
      <>
        <StarIcon />
        <StarRating aria-label={`${slice?.primary?.rating} stars out of 5`}>
          {
            [...Array(fullStars)].map((x, i) =>
                <Star key={i} className="active">
                  <use href={`#${starId}`} xlinkHref={`#${starId}`}></use>
                  <use href={`#${starId}`} xlinkHref={`#${starId}`} fill="none" stroke="grey"></use>
                </Star>
              )
          }
          {
            halfStar && <Star key={fullStars + 1} className="active">
              <use href={`#${starId}`} xlinkHref={`#${starId}`} mask={`url(#${maskId})`}></use>
              <use href={`#${starId}`} xlinkHref={`#${starId}`} fill="none" stroke="grey"></use>
            </Star>
          }
        </StarRating>
      </>
      <PrismicRichText 
        field={slice?.primary?.title}
        components={richTextComponents}
      />
      <PrismicRichText 
        field={slice?.primary?.description}
        components={richTextComponents}
      />
    </Section>
  )
}


export default Review