import { link } from "../../constants/Types";

export type t_PinInfo = {
  imageURL: string,
  title: string,
  distance: number,
  visits: number,
  value: number,
  tags: string[],
  ratings: number,
}
/* export type t_PinInfo = {
  imageURL: string;
  title: string;
  distance: number;
  visits: number;
  value: number;
  tags: string[];
  ratings: number;
  description: string;
  user: string;
  date: string;
  like: boolean;
  imagesData: t_imagesData[];
  commentsData: t_Comment[];
} */

export type t_Comment = {
  user: string,
  date: string,
  icon: link,
  comment: string,
  upvotes: number,
  downvotes: number,
  rating: number,
}

export type t_CardData = {
  content: t_PinInfo,
  key: number,
};

export type t_imagesData = {
  key: string,
  url: link,
}

export type t_Tabs = "Feed" | "Mine" | "History";