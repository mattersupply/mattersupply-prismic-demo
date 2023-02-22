import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";

interface PageProps {
  page: any;
}

const Page = (pageProps: PageProps) => {
  const { page } = pageProps;
  console.log("aca segundo", pageProps);
  return <div />;
  // return <SliceZone slices={page.data.slices} components={components} />;
};

export default Page;
