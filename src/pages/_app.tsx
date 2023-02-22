import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../../prismicio";

interface AppProperties {
  Component: any;
  pageProps: any;
}

export default function App(props: AppProperties) {
  const { Component, pageProps } = props;
  console.log("aca primero");

  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
