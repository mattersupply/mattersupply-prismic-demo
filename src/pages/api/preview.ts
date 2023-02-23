import { NextApiRequest, NextApiResponse } from "next";
import { setPreviewData, redirectToPreviewURL } from "@prismicio/next";
import { createClient } from "../../../prismicio";

const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = createClient({ previewData: null, req: req });

  await setPreviewData({ req, res });

  await redirectToPreviewURL({ req, res, client });
};

export default preview;
