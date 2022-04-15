// REACT
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../../constants/Colors";



interface i_PointTab {
  focus: boolean,
}
export default function PointTab({ focus }: i_PointTab) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  return (
    <View style={[styles.default, focus ? styles.focus : styles.idle]} />
  );
}

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    default: {
      backgroundColor: plt.dominant,
      width: 12, height: 12,
      borderRadius: 100,
      marginHorizontal: 3,
    },
    idle: {
      backgroundColor: plt.dominant,
      borderWidth: 2,
      borderColor: plt.complementary,
    },
    focus: {
      backgroundColor: plt.complementary,
    }
  });
}