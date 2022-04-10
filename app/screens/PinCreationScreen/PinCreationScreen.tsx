// REACT
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../constants/Colors";
import { } from "../../constants/Types";


interface i_PinCreationScreen { }
export default function PinCreationScreen({ }: i_PinCreationScreen) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>PinCreationScreen</Text>
    </View>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => (
  StyleSheet.create({
    container: {},
    text: { textAlign: "center" },
  })
);