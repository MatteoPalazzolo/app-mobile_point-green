// REACT
import React, { FC, useCallback, useContext, useMemo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
// CUSTOM
import { t_NavButton, t_Vector2 } from '../../constants/Types';
import { palette, t_ColorTheme, ThemeContext } from '../../constants/Colors';
import NavRadialButton from './NavRadialButton';
import { screens } from '../screens';
import { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import { t_Navigation, t_NavScreen, t_Screen } from '../typeNavigation';
import { SvgProps } from 'react-native-svg';


interface i_NavRadialMenu { navContainerRef: t_Navigation }
export default function NavRadialMenu({ navContainerRef }: i_NavRadialMenu) {

  const homeScreen = screens.find(e => e.label === "Home") as t_NavScreen;
  const toDisplayScreens = screens.filter(e => e.navbar) as t_NavScreen[];

  const radius = 120;
  const openTime = 300; //ms

  /* create an array containing the procedural generated target position for all buttons */
  const calcButtonsTargetPos = useCallback(() => (
    toDisplayScreens.map((b, i) => {
      const stepRad = Math.PI / (toDisplayScreens.length + 1);
      const currentAngle = stepRad * (i + 1);
      const x: number = -Math.cos(currentAngle) * radius;
      const y: number = -Math.sin(currentAngle) * radius;
      /*
      console.log("deg: ", stepRad * (180 / Math.PI));
      console.log("x: ", x, "y: ", y);
      */
      return { x, y };
    })), []);
  const buttonEndCoords: t_Vector2[] = useMemo(() => calcButtonsTargetPos(), []);


  // ColorTheme
  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  /****************** 
   * RENDER 
  ******************/
  const [menuOpen, setMenuOpen] = useState(true);
  const btnAnimationRegister: ((type: boolean) => void)[] = useState([])[0];

  function triggerNavMenu() {
    btnAnimationRegister.forEach(e => e(menuOpen));
    setMenuOpen(!menuOpen);
  }

  navContainerRef.addListener('state', e => {
    if (e.data.state)
      triggerNavMenu();
  });

  return (
    <View style={styles.container}>

      {toDisplayScreens.map((b, i) => (
        <NavRadialButton
          funcRegister={btnAnimationRegister}
          animationOptions={{ endPos: buttonEndCoords[i], radius: radius, openTime: openTime }}
          screenInfo={toDisplayScreens[i]}
          navigation={navContainerRef}
          key={i} />
      ))}

      <TouchableOpacity
        onPress={triggerNavMenu}
        style={[styles.buttonTransform, styles.menuButton]}
        activeOpacity={0.9}>
        <homeScreen.icon width={36} height={36} color={palette[colorTheme].dominant} />
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
    menuButton: {
      alignItems: "center",
      justifyContent: "center",

      borderRadius: 100,
      backgroundColor: palette[colorTheme].accent,
    },
  })
);