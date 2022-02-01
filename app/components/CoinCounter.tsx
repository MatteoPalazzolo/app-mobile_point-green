// REACT
import React, { createContext, useContext } from 'react';
import { View, Image, Text, StyleSheet, ViewStyle } from 'react-native';
// CUSTOM
import { ThemeContext } from '../../App';
import { palette, t_ColorTheme } from "../constants/Colors";
import { } from "../constants/Types";


interface i_CoinCounter { style?: object }
export default function CoinCounter({ style = {} }: i_CoinCounter) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);

  const styles = getStyle(colorTheme);

  return (
    <View style={[style, styles.container]}>
      <Text style={styles.text}>1525</Text>
      <Image style={styles.coinIcon} source={require('../assets/images/icons/coin.png')} />
    </View>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => (
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: palette[colorTheme].dominant,
      borderTopRightRadius: 100,
      borderBottomRightRadius: 100,
      borderRadius: 25,
      height: 38,
      padding: 0,
    },
    text: {
      color: palette[colorTheme].text,
      textAlign: "center",
      fontSize: 26,
      marginLeft: 8,
      marginRight: 4,
      position: "relative",
      bottom: 1,
      fontFamily: 'Coin-Normal',
    },
    coinIcon: { width: 50, height: 50 }
  }));


