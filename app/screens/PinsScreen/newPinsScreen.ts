import { getCurrentDate } from "../../utilities/Dates";
import { t_Comment, t_newComment, t_newPinInfo, t_PinInfo } from "./typePinsScreen";

export function newCard({ description, imagesData, key, tags, title, type, user }: t_newPinInfo): t_PinInfo {
  return {
    type,
    user,
    title,
    description,
    imagesData,
    tags,
    key,
    date: getCurrentDate(),
    like: false,
    distance: 0,
    visits: 0,
    value: 0, //TODO
    ratings: [],
    commentsData: [],
  };
}

export function newCardComment({ comment, icon, user, rating }: t_newComment): t_Comment {
  return {
    user,
    icon,
    comment,
    rating,
    date: getCurrentDate(),
    upvotes: 0,
    downvotes: 0,
  };
}