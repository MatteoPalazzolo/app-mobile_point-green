// REACT
import React, { createContext, useState } from "react";
import { StyleSheet, StatusBar, Platform, useColorScheme, Text, View } from 'react-native';
import Navigator from './app/navigation/Navigator';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
// CUSTOM
import { t_ColorTheme } from "./app/constants/Colors";
import { t_Vector2 } from "./app/constants/Types";


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
    'Coin-Normal': require('./app/assets/fonts/RedHatDisplay.ttf'),/*
    'Raleway': 'https://fonts.googleapis.com/css2?family=Raleway&display=swap',*/
  });

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <ThemeContext.Provider value={colorTheme}>
      <Navigator />
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});