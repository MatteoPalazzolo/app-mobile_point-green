import { link } from "../../constants/Types";


export type t_PinInfo = {
  type: t_Tabs,
  title: string,
  distance: number,
  visits: number,
  value: number,
  tags: string[],
  ratings: number[],
  description: string,
  user: string,
  date: string,
  like: boolean,
  imagesData: t_imagesData[],
  commentsData: t_Comment[],
  key: string,
}

export type t_TabInfo = { data: t_PinInfo[], key: string };

export type t_Comment = {
  user: string,
  date: string,
  icon: link,
  comment: string,
  upvotes: number,
  downvotes: number,
  rating: number,
}

export type t_imagesData = {
  key: string,
  url: link,
}

export type t_Tabs = "feed" | "mine" | "history";