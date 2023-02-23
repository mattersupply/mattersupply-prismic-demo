import React from "react";
import { SliceZone } from "@prismicio/react";
import type { PreviewData, NextApiRequest } from "next";

import { createClient } from "../../prismicio";
import { components } from "../../slices";

interface PageProps {
  page: any;
}

interface StaticProperties {
  previewData: PreviewData;
  req: NextApiRequest;
}

export async function getStaticProps(props: StaticProperties) {
  const { previewData, req } = props;
  const client = createClient({ previewData, req });

  const page = await client.getSingle("first_demo_module");

  return {
    props: {
      page,
    },
  };
}

export default function Page(pageProps: PageProps) {
  const { page } = pageProps;

  return <SliceZone slices={page.data.slices} components={components} />;
}
