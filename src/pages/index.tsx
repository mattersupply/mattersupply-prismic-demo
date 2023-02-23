import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import { createClient } from "../../prismicio";

interface PageProps {
  page: any;
}

const Page = (pageProps: PageProps) => {
  const { page } = pageProps;
  console.log("aca segundo", pageProps);
  // return <div />;
  return <SliceZone slices={page?.data?.slices} components={components} />;
};

export default Page;

export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData });
  const page = await client.getSingle("first_demo_module");
  return {
    props: {
      page,
    },
  };
}
