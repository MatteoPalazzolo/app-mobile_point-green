// REACT
import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../../constants/Colors";


interface i_Line {
  style?: {},
}
export default function Line({ style }: i_Line) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme, style);
  const plt = palette[colorTheme];

  return (
    <View style={styles.line} />
  );
}

const getStyle = (colorTheme: t_ColorTheme, style?: {}) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    line: {
      width: '100%', height: 2,
      alignSelf: 'center',
      borderRadius: 100,
      backgroundColor: plt.complementary,
      ...style,
    }
  });
}