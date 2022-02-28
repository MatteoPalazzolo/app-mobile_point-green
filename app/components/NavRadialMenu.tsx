// REACT
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
// CUSTOM
import { ThemeContext } from '../../App';
import { palette, t_ColorTheme } from "../constants/Colors";
import { t_NavButton } from "../constants/Types";


interface i_NavRadialMenu { navButtons: t_NavButton[], radius: number }
export default function NavRadialMenu({ navButtons, radius }: i_NavRadialMenu) {

  /* radius = useState(new Animated.Value(120))[0]; */
  radius = 120;
  navButtons = [
    { name: "ciao", icon: 2 },
    { name: "hello", icon: 4 },
    { name: "hola", icon: 5 },
    { name: "hola", icon: 5 },
    { name: "hola", icon: 5 },
  ];
  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  /****************** 
   * RENDER 
  ******************/
  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={() => alert("hei")}
        style={[styles.buttonTransform, styles.menuButton]}
        activeOpacity={0.9}>
        <FontAwesome5 style={styles.plantIcon} name="seedling" size={36} color={palette[colorTheme].dominant} />
      </TouchableOpacity>

      {navButtons.map((b, i) => {
        const stepRad = Math.PI / (navButtons.length + 1);
        const currentAngle = stepRad * (i + 1);
        const x = Math.cos(currentAngle) * radius;
        const y = Math.sin(currentAngle) * radius;
        /*
        console.log("deg: ", stepRad * (180 / Math.PI));
        console.log("x: ", x, "y: ", y);
        */
        const transform = [{ translateX: x }, { translateY: -y }];
        return <View style={[styles.buttonTransform, styles.navButton, { transform }]} key={i} />
      })}

    </View>
  );
}

/****************** 
 * STYLE 
******************/
const getStyle = (colorTheme: t_ColorTheme) => (
  StyleSheet.create({
    container: {
      position: "absolute",
      alignSelf: "center",
      alignItems: "center", justifyContent: "center",
      bottom: 50,
    },
    text: {
      textAlign: "center"
    },
    buttonTransform: {
      width: 50,
      height: 50,
      position: "absolute",
      bottom: 0,
    },
    navButton: {
      borderRadius: 100,
      backgroundColor: palette[colorTheme].complementary,
    },
    menuButton: {
      alignItems: "center",
      justifyContent: "center",

      borderRadius: 100,
      backgroundColor: palette[colorTheme].accent,
    },
    plantIcon: {
      position: "relative",
      bottom: -5,
    },
  })
);