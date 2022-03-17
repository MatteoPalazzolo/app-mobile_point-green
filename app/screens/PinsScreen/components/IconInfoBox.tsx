// REACT
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// CUSTOM
import { ThemeContext } from '../../../../App';
import { palette, t_ColorTheme } from "../../../constants/Colors";
import { } from "../../../constants/Types";


interface i_IconInfoBox {
  options: {
    icon: JSX.Element,
    value: string | number,
    fontSize: number,
  }
}
export default function IconInfoBox({ }: i_IconInfoBox) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TabBar</Text>
    </View>
  );
}


const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];

  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row'
    },
    icon: {

    },
    text: {

    },
  });
}