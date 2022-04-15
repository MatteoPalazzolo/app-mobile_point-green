// REACT
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../../../constants/Colors";


interface i_IconInfoBox {
  icon: JSX.Element,
  value: string | number
}
export default function IconInfoBox({ icon, value }: i_IconInfoBox) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];
  const sizeMult = 1;

  return (
    <View style={styles.container}>
      <icon.type {...icon.props} size={icon.props.size * sizeMult} style={styles.icon} color={plt.dark} />
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}


const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];

  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {

    },
    text: {
      marginLeft: 5,
      fontSize: 19,

    },
  });
}