// REACT
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
// CUSTOM
import { ThemeContext } from '../../App';
import { palette, t_ColorTheme } from "../constants/Colors";
import { t_NavButton } from "../constants/Types";


interface i_NavRadialMenu { navButtons: t_NavButton[], radius: number }
export default function NavRadialMenu({ navButtons, radius }: i_NavRadialMenu) {

  radius = .1;
  navButtons = [
    { name: "ciao", icon: 2 },
    { name: "hello", icon: 4 },
    { name: "hola", icon: 5 },
    { name: "hola", icon: 5 },
    { name: "hola", icon: 5 },
  ];
  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={() => alert("hei")}
        style={[styles.container, styles.menuButton]}
        activeOpacity={0.9}>
        <FontAwesome5 style={styles.plantIcon} name="seedling" size={36} color={palette[colorTheme].light} />
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
        const transform = [{ translateX: -x }, { translateY: -y }];
        return <View style={[styles.navButton, { transform }]} key={i} />
      })}

    </View>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => (
  StyleSheet.create({
    container: {
      position: "absolute",
      alignSelf: "center",
      bottom: 10,
    },
    text: {
      textAlign: "center"
    },
    navButton: {
      backgroundColor: "red",
      width: 50,
      height: 50,
      borderRadius: 100,
      position: "absolute",
    },
    menuButton: {
      borderRadius: 100,
      width: 55,
      height: 55,
      backgroundColor: palette[colorTheme].accent,
      justifyContent: "center",
      alignItems: "center"
    },
    plantIcon: {
      position: "relative",
      bottom: -5,
    },
  })
);