// REACT
import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../../constants/Colors";
import Line from './Line';


interface i_Separator {
  children: string,
  style?: {},
}
export default function Separator({ children, style }: i_Separator) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme, style);
  const plt = palette[colorTheme];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
      <Line />
    </View>
  );
}

const getStyle = (colorTheme: t_ColorTheme, style?: {}) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    container: {
      width: '94%',
      alignSelf: 'center',
      ...style,
    },
    text: {
      textTransform: 'uppercase',
      marginLeft: 5,
      fontSize: 18,
      color: plt.complementary,
    },
    line: {
      width: '100%', height: 2,
      borderRadius: 100,
      backgroundColor: plt.complementary,
    }
  });
}