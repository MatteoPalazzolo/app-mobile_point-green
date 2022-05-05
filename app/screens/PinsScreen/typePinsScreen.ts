import { t_Link } from "../../constants/Types";

export type t_PinInfo = {
  imageURL: string,
  title: string,
  distance: number,
  visits: number,
  value: number,
  tags: string[],
  ratings: number,
}

export type t_Comment = {
  user: string,
  date: string,
  icon: t_Link,
  comment: string,
  upvotes: number,
  downvotes: number,
  ratings: number,
}

export type t_CardData = {
  content: t_PinInfo,
  key: number,
};

export type t_Tabs = "Feed" | "Mine" | "History";