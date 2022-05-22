// REACT
import React, { FC, useCallback, useContext, useMemo, useReducer, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
// CUSTOM
import { t_Vector2 } from '../../constants/Types';
import { palette, t_ColorTheme, ThemeContext } from '../../constants/Colors';
import NavRadialButton from './NavRadialButton';
import { screens } from '../screens';
import { t_NavbarActionType, t_Navigation, t_NavScreen } from '../typeNavigation';


interface i_NavRadialMenu { navContainerRef: t_Navigation }
export default function NavRadialMenu({ navContainerRef }: i_NavRadialMenu) {

  const homeScreen = screens.find(e => e.label === "Home") as t_NavScreen;
  const toDisplayScreens = screens.filter(e => e.navbar) as t_NavScreen[];

  const RADIUS = 120;
  const OPEN_TIME = 300; //ms

  /* create an array containing the procedural generated target position for all buttons */
  const calcButtonsTargetPos = useCallback(() => (
    toDisplayScreens.map((b, i) => {
      const stepRad = Math.PI / (toDisplayScreens.length + 1);
      const currentAngle = stepRad * (i + 1);
      const x: number = -Math.cos(currentAngle) * RADIUS;
      const y: number = -Math.sin(currentAngle) * RADIUS;
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

  const btnAnimationRegister: ((type: boolean) => void)[] = useState([])[0];

  const menuReducer = useCallback((state: { open: boolean }, action: { type: t_NavbarActionType }) => {
    let nextState = false;
    switch (action.type) {
      case 'open':
        nextState = true;
      case 'close':
        nextState = false;
      case 'switch':
        nextState = !state.open;
    }
    btnAnimationRegister.forEach(e => e(nextState));
    return { open: nextState };
  }, [btnAnimationRegister]);

  const [menuOpen, dispatchMenu] = useReducer(menuReducer, { open: false }, undefined);


  return (
    <View style={styles.container}>

      {toDisplayScreens.map((b, i) => (
        <NavRadialButton
          funcRegister={btnAnimationRegister}
          animationOptions={{ endPos: buttonEndCoords[i], radius: RADIUS, openTime: OPEN_TIME }}
          screenInfo={toDisplayScreens[i]}
          navigation={navContainerRef}
          closeMenu={() => dispatchMenu({ type: 'close' })}
          key={i} />
      ))}

      <TouchableOpacity
        onPress={() => dispatchMenu({ type: 'switch' })}
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