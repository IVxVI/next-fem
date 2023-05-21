import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.json({ data: {me: true } });
}