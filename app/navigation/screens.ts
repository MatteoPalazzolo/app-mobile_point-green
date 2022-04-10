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
import PinCreationScreen from "../screens/PinCreationScreen/PinCreationScreen";
import { t_Screen } from "./typeNavigation";


// EXPORT
export const screens: t_Screen[] = [
  {
    label: "Home",
    icon: HomeIcon,
    screen: { type: HomeScreen, props: {} },
    options: { headerShown: false },
    navbar: false,
  },
  {
    label: "Profile",
    icon: UserIcon,
    screen: { type: ProfileScreen, props: {} },
    options: {},
    navbar: true,
  },
  {
    label: "Shop",
    icon: ShopIcon,
    screen: { type: ShopScreen, props: {} },
    options: {},
    navbar: true,
  },
  {
    label: "Pins",
    icon: PinIcon,
    screen: { type: PinScreen, props: {} },
    options: {},
    navbar: true,
  },
  {
    label: "Achievements",
    icon: TrophyIcon,
    screen: { type: AchievementsScreen, props: {} },
    options: {},
    navbar: true,
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    screen: { type: SettingsScreen, props: {} },
    options: {},
    navbar: true,
  },
  {
    label: "PinCreation",
    icon: undefined,
    screen: { type: PinCreationScreen, props: {} },
    options: {},
    navbar: false,
  },
];

