import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

export type t_Vector2 = {
  x: number,
  y: number
};

export type t_NavButton = {
  name: string,
  icon: JSX.Element | number,
}

export type t_OnScrollEventHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => void;


export type link = string;