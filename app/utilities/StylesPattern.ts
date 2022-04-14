import { Platform, StatusBar } from "react-native";

export const safeArea = {
  safeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
}