import { Platform, StatusBar } from "react-native";

export const safeArea = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
}