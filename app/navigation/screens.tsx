// SCREENS
import FeedScreen from "../screens/FeedScreen";
import MapScreen from "../screens/MapScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ShopScreen from "../screens/ShopScreen";

// EXPORT
export type t_Screen = {
  label: string,
  icon: JSX.Element | number,
  child: JSX.Element,
};

export const screens: t_Screen[] = [
  { label: "Home", icon: 5, child: <MapScreen /> },
  { label: "Shop", icon: 5, child: <ShopScreen /> },
  { label: "Feed", icon: 5, child: <FeedScreen /> },
  { label: "Profile", icon: 5, child: <ProfileScreen /> },
];