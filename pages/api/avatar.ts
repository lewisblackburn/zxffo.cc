import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import cheerio from "cheerio";

interface Cache {
  url: string;
  html?: string;
}

const cache: { [key: string]: Cache } = {};

const getAvatar = async (username: string) => {
  if (cache[username]) return cache[username];

  try {
    const twitterUrl = `https://mobile.twitter.com/${username}`;

    const response = await axios.get(twitterUrl);
    const { data } = await response;

    const $ = cheerio.load(data);
    const avatar = ($(".avatar img").attr("src") || "").replace(
      "_normal",
      "_200x200"
    );

    const result = {
      url: avatar,
      html: '<img src="' + avatar + '" alt="avatar" />',
    };

    cache[username] = { ...result };

    return result;
  } catch (e) {
    return e.message;
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { username },
  } = req as any;
  const { url } = ((await getAvatar(username)) as Cache) || "";
  res.status(200).json({ url });
};
