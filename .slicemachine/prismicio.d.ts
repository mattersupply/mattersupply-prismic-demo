// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for First Demo Module documents */
interface FirstDemoModuleDocumentData {
    /**
     * Top Image field in *First Demo Module*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: first_demo_module.top_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    top_image: prismicT.ImageField<never>;
    /**
     * Demo Title field in *First Demo Module*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: first_demo_module.demo_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    demo_title: prismicT.KeyTextField;
    /**
     * Demo Description field in *First Demo Module*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: first_demo_module.demo_description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    demo_description: prismicT.RichTextField;
    /**
     * Slice Zone field in *First Demo Module*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: first_demo_module.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<FirstDemoModuleDocumentDataSlicesSlice>;
}
/**
 * Slice for *First Demo Module → Slice Zone*
 *
 */
type FirstDemoModuleDocumentDataSlicesSlice = GridImagesSlice | HeroSlice;
/**
 * First Demo Module document from Prismic
 *
 * - **API ID**: `first_demo_module`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FirstDemoModuleDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<FirstDemoModuleDocumentData>, "first_demo_module", Lang>;
export type AllDocumentTypes = FirstDemoModuleDocument;
/**
 * Primary content in GridImages → Primary
 *
 */
interface GridImagesSliceDefaultPrimary {
    /**
     * Title field in *GridImages → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: grid_images.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *GridImages → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: grid_images.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in GridImages → Items
 *
 */
export interface GridImagesSliceDefaultItem {
    /**
     * Image field in *GridImages → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: grid_images.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for GridImages Slice
 *
 * - **API ID**: `default`
 * - **Description**: `GridImages`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GridImagesSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<GridImagesSliceDefaultPrimary>, Simplify<GridImagesSliceDefaultItem>>;
/**
 * Slice variation for *GridImages*
 *
 */
type GridImagesSliceVariation = GridImagesSliceDefault;
/**
 * GridImages Shared Slice
 *
 * - **API ID**: `grid_images`
 * - **Description**: `GridImages`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GridImagesSlice = prismicT.SharedSlice<"grid_images", GridImagesSliceVariation>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
    /**
     * Title field in *Hero → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: hero.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Hero → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: hero.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *Hero → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismicT.SharedSlice<"hero", HeroSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { FirstDemoModuleDocumentData, FirstDemoModuleDocumentDataSlicesSlice, FirstDemoModuleDocument, AllDocumentTypes, GridImagesSliceDefaultPrimary, GridImagesSliceDefaultItem, GridImagesSliceDefault, GridImagesSliceVariation, GridImagesSlice, HeroSliceDefaultPrimary, HeroSliceDefault, HeroSliceVariation, HeroSlice };
    }
}
