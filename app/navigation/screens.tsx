// IMPORT
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

// SCREENS
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ShopScreen from "../screens/ShopScreen/ShopScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import PinScreen from "../screens/PinsScreen/PinsScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import AchievementsScreen from "../screens/AchievementsScreen/AchievementsScreen";

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
  icon: JSX.Element | number,
  screen: {
    type: JSX.Element | any,
    props: {} | any,
  }
  options: NativeStackNavigationOptions,
};
/*
export const screens: t_Screen[] = [
  { label: "Home", icon: 5, child: <HomeScreen /> },
  { label: "Shop", icon: 5, child: <ShopScreen /> },
  { label: "Profile", icon: 5, child: <ProfileScreen /> },
  { label: "Pins", icon: 5, child: <PinScreen /> },
  { label: "Settings", icon: 5, child: <SettingsScreen /> },
  { label: "Achievements", icon: 5, child: <AchievementsScreen /> },
];*/

export const screens: t_Screen[] = [
  { label: "Home", icon: 5, screen: { type: HomeScreen, props: {} }, options: { headerShown: false } },
  { label: "Profile", icon: 5, screen: { type: ProfileScreen, props: {} }, options: {} },
  { label: "Shop", icon: 5, screen: { type: ShopScreen, props: {} }, options: {} },
  { label: "Pins", icon: 5, screen: { type: PinScreen, props: {} }, options: {} },
  { label: "Achievements", icon: 5, screen: { type: AchievementsScreen, props: {} }, options: {} },
  { label: "Settings", icon: 5, screen: { type: SettingsScreen, props: {} }, options: {} },
];