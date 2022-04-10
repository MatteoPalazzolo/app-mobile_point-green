import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

export type t_PinInfo = {
  imageURL: string,
  title: string,
  distance: number,
  visits: number,
  value: number,
  tags: string[],
  ratings: number,
}

export type t_CardData = {
  content: t_PinInfo,
  key: number,
};

export type t_Tabs = "Feed" | "Mine" | "History";

export type t_OnScrollEventHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => void;