// REACT
import React, { createContext, useState } from "react";
import { StyleSheet, StatusBar, Platform, useColorScheme, Text, View } from 'react-native';
import Navigator from './app/navigation/Navigator';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
// SCREENS
import MapScreen from "./app/screens/MapScreen";
import ShopScreen from "./app/screens/ShopScreen";
import FeedScreen from "./app/screens/FeedScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
// CUSTOM
import { t_ColorTheme } from "./app/constants/Colors";
import { t_Vector2, t_Screen } from "./app/constants/Types";


export const ThemeContext = createContext<t_ColorTheme>("light");

export default function App() {

  // COLOR THEME 
  /*
  const [colorTheme, setColorTheme] = useState<t_ColorTheme>("dark");
  function toggleColorTheme() {
    setColorTheme(previousState => previousState == "light" ? "dark" : "light");
  } */
  const colorScheme = useColorScheme(); //returns "light"
  const colorTheme: t_ColorTheme = "light" || (colorScheme ? colorScheme : "light");

  // FONTS
  let [fontsLoaded] = useFonts({
    'Coin-Normal': require('./app/assets/fonts/RedHatDisplay.ttf'),
    'Raleway': 'https://fonts.googleapis.com/css2?family=Raleway&display=swap',
  });

  if (!fontsLoaded)
    return <AppLoading />

  const screens: t_Screen[] = [
    { label: "Home", icon: 5, child: <MapScreen />, position: { x: 10, y: 10 } },
    { label: "Shop", icon: 5, child: <ShopScreen />, position: { x: 10, y: 10 } },
    { label: "Feed", icon: 5, child: <FeedScreen />, position: { x: 10, y: 10 } },
    { label: "Profile", icon: 5, child: <ProfileScreen />, position: { x: 10, y: 10 } },
  ];

  return (
    <ThemeContext.Provider value={colorTheme}>
      <Navigator screens={screens} />
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});