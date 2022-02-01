// REACT
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// CUSTOM
import { ThemeContext } from '../../App';
import { palette, t_ColorTheme } from "../constants/Colors";
import { } from "../constants/Types";


interface i_SplashScreen { }
export default function SplashScreen({ }: i_SplashScreen) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);

  return (
    <View style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f45" },
  text: { textAlign: "center" },
});
