import { NavigationContainerRefWithCurrent } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { FC } from "react";
import { SvgProps } from "react-native-svg";

export type t_RootStackParamList = {
  Home: undefined;
  Shop: undefined;
  Profile: undefined;
  Pins: undefined;
  Settings: undefined;
  Achievements: undefined;
  PinCreation: undefined;
};

export type t_Screen = {
  label: keyof t_RootStackParamList,
  icon: FC<SvgProps> | undefined,
  screen: {
    type: JSX.Element | any,
    props: {} | any,
  },
  options: NativeStackNavigationOptions,
  navbar: boolean,
};

export type t_NavScreen = t_Screen & { icon: FC<SvgProps> };

export type t_Navigation = NavigationContainerRefWithCurrent<t_RootStackParamList>;