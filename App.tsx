// REACT
import React from "react";
import { useColorScheme } from 'react-native';
import Navigator from './app/navigation/Navigator';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
// CUSTOM
import { ThemeContext, t_ColorTheme } from "./app/constants/Colors";


export default function App() {

  // COLOR THEME 
  /*
  const [colorTheme, setColorTheme] = useState<t_ColorTheme>("dark");
  function toggleColorTheme() {
    setColorTheme(previousState => previousState === "light" ? "dark" : "light");
  } */
  const colorScheme = useColorScheme(); //returns "light"
  const colorTheme: t_ColorTheme = 'light' || colorScheme;

  // FONTS
  const [fontsLoaded] = useFonts({
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