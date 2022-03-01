// REACT
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
// CUSTOM
import { ThemeContext } from '../../App';
import { palette, t_ColorTheme } from "../constants/Colors";
import { t_NavButton, t_Vector2 } from "../constants/Types";
import NavRadialButton from './NavRadialButton';


interface i_NavRadialMenu { navButtons: t_NavButton[], radius: number }
export default function NavRadialMenu({ navButtons, radius }: i_NavRadialMenu) {


  radius = 120;
  navButtons = [
    { name: "ciao", icon: 2 },
    { name: "hello", icon: 4 },
    { name: "hola", icon: 5 },
    { name: "hola", icon: 5 },
    { name: "hola", icon: 5 },
  ];

  /* create an array containing the procedural generated target position for all buttons */
  const buttonEndCoords: t_Vector2[] = navButtons.map((b, i) => {
    const stepRad = Math.PI / (navButtons.length + 1);
    const currentAngle = stepRad * (i + 1);
    const x: number = Math.cos(currentAngle) * radius;
    const y: number = -Math.sin(currentAngle) * radius;
    /*
    console.log("deg: ", stepRad * (180 / Math.PI));
    console.log("x: ", x, "y: ", y);
    */
    return { x, y };
  });

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  /****************** 
   * RENDER 
  ******************/
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerAnimList: ((type: boolean) => void)[] = useState([])[0];

  function triggerNavMenu() {
    setMenuOpen(!menuOpen);
    triggerAnimList.forEach(e => e(menuOpen));
  }

  return (
    <View style={styles.container}>

      {navButtons.map((b, i) => {
        return (
          <NavRadialButton
            triggerAnimList={triggerAnimList}
            targetCoords={buttonEndCoords[i]}
            radius={radius}
            animDuration={300}
            key={i} />
        );
      })}

      <TouchableOpacity
        onPress={() => triggerNavMenu()}
        style={[styles.buttonTransform, styles.menuButton]}
        activeOpacity={0.9}>
        <FontAwesome5 style={styles.plantIcon} name="seedling" size={36} color={palette[colorTheme].dominant} />
      </TouchableOpacity>

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
      bottom: 30,
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