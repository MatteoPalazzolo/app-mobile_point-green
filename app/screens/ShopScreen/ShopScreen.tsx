// REACT
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// CUSTOM
import { ThemeContext } from '../../../App';
import { palette, t_ColorTheme } from "../../constants/Colors";
import { } from "../../constants/Types";


interface i_ShopScreen { }
export default function ShopScreen({ }: i_ShopScreen) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ShopScreen</Text>
    </View>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => (
  StyleSheet.create({
    container: {},
    text: { textAlign: "center" },
  })
);