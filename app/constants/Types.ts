import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";

export type t_Vector2 = {
  x: number,
  y: number
};

export type t_NavButton = {
  name: string,
  icon: JSX.Element | number,
}

export type t_OnPress = (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;

export type link = string;