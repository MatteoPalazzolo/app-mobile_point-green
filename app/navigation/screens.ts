// IMPORT
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { SvgProps } from "react-native-svg";
import { FC } from "react";

// SCREENS
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ShopScreen from "../screens/ShopScreen/ShopScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import PinScreen from "../screens/PinsScreen/PinsScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import AchievementsScreen from "../screens/AchievementsScreen/AchievementsScreen";

// ICONS
import HomeIcon from "./nav_icons/HomeIcon";
import UserIcon from "./nav_icons/UserIcon";
import ShopIcon from "./nav_icons/ShopIcon";
import PinIcon from "./nav_icons/PinIcon";
import SettingsIcon from "./nav_icons/SettingsIcon";
import AchievementIcon from "./nav_icons/AchievementIcon";
import TrophyIcon from "./nav_icons/TrophyIcon";


// EXPORT
export type t_RootStackParamList = {
  Home: undefined;
  Shop: undefined;
  Profile: undefined;
  Pins: undefined;
  Settings: undefined;
  Achievements: undefined;
};

export type t_Screen = {
  label: keyof t_RootStackParamList,
  icon: FC<SvgProps>,
  screen: {
    type: JSX.Element | any,
    props: {} | any,
  }
  options: NativeStackNavigationOptions,
};


export const screens: t_Screen[] = [
  {
    label: "Home",
    icon: HomeIcon,
    screen: { type: HomeScreen, props: {} },
    options: { headerShown: false }
  },
  {
    label: "Pins",
    icon: PinIcon,
    screen: { type: PinScreen, props: {} },
    options: {}
  }
];

/*
export const screens: t_Screen[] = [
  {
    label: "Home",
    icon: HomeIcon,
    screen: { type: HomeScreen, props: {} },
    options: { headerShown: false }
  },
  {
    label: "Profile",
    icon: UserIcon,
    screen: { type: ProfileScreen, props: {} },
    options: {}

  },
  {
    label: "Shop",
    icon: ShopIcon,
    screen: { type: ShopScreen, props: {} },
    options: {}
  },
  {
    label: "Pins",
    icon: PinIcon,
    screen: { type: PinScreen, props: {} },
    options: {}
  },
  {
    label: "Achievements",
    icon: TrophyIcon,
    screen: { type: AchievementsScreen, props: {} },
    options: {}
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    screen: { type: SettingsScreen, props: {} },
    options: {}
  },
];
*/