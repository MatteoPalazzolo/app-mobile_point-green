// REACT
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// CUSTOM
import { palette, t_ColorTheme, ThemeContext } from "../../constants/Colors";
import { } from "../../constants/Types";


interface i_SettingsScreen { }
export default function SettingsScreen({ }: i_SettingsScreen) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SettingsScreen</Text>
    </View>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => (
  StyleSheet.create({
    container: {},
    text: { textAlign: "center" },
  })
);