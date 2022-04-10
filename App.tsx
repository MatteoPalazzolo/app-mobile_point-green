// REACT
import React, { createContext, useState } from "react";
import { StyleSheet, StatusBar, Platform, useColorScheme, Text, View } from 'react-native';
import Navigator from './app/navigation/Navigator';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
// CUSTOM
import { toTheme, ThemeContext, t_ColorTheme } from "./app/constants/Colors";


export default function App() {

  // COLOR THEME 
  /*
  const [colorTheme, setColorTheme] = useState<t_ColorTheme>("dark");
  function toggleColorTheme() {
    setColorTheme(previousState => previousState == "light" ? "dark" : "light");
  } */
  const themeContext = ThemeContext;
  const colorScheme = useColorScheme(); //returns "light"
  const colorTheme: t_ColorTheme = 'light' || toTheme(colorScheme);

  // FONTS
  let [fontsLoaded] = useFonts({
    'Coin-Normal': require('./app/assets/fonts/RedHatDisplay.ttf'),/*
    'Raleway': 'https://fonts.googleapis.com/css2?family=Raleway&display=swap',*/
  });

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <themeContext.Provider value={colorTheme}>
      <Navigator />
    </themeContext.Provider>
  );
}