// REACT
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// CUSTOM
import { ThemeContext } from '../../../../App';
import { palette, t_ColorTheme } from "../../../constants/Colors";
import { } from "../../../constants/Types";


interface i_PinTabBar { }
export default function PinTabBar({ }: i_PinTabBar) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TabBar</Text>
    </View>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => (
  StyleSheet.create({
    container: {},
    text: { textAlign: "center" },
  })
);