// REACT
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// CUSTOM
import { ThemeContext, palette, t_ColorTheme } from "../../../constants/Colors";


interface i_AddPin { }
export default function AddPin({ }: i_AddPin) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  return (
    <TouchableOpacity style={[styles.container, styles.touchOpacity]} activeOpacity={.8} onPress={() => console.log("ADD PIN")}>
      <View style={[styles.container, styles.button]}>
        <Text style={styles.addIcon}>+</Text>
        <Text style={styles.text}>ADD PIN</Text>
      </View>
    </TouchableOpacity>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];

  const cardShadow = {
    shadowColor: plt.dark,
    shadowOffset: { width: 0, height: 4 }, // IOS
    shadowOpacity: 0.30, // IOS
    shadowRadius: 4.65, // IOS
    elevation: 8, // ANDROID
  }

  return StyleSheet.create({
    container: {
      borderRadius: 13.5,
    },
    touchOpacity: {
      backgroundColor: '#FFF',
      ...cardShadow,

      marginBottom: 25,
    },
    button: {
      height: 60,

      backgroundColor: plt.complementary,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      textAlign: 'center',
      color: plt.dominant,
      fontWeight: 'bold',
      fontSize: 26
    },
    addIcon: {
      position: 'absolute',
      left: 30,

      color: plt.dominant,
      fontWeight: '600',
      fontSize: 26,

      transform: [{ scale: 2 }, { translateY: -1.5 }],
    }
  });
}