import { NextApiRequest, NextApiResponse } from "next";
import { exitPreview } from "@prismicio/next";

const exit = async (req: NextApiRequest, res: NextApiResponse) => {
  await exitPreview({ res, req });
};

export default exit;
