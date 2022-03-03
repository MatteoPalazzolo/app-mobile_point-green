// REACT
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
// CUSTOM
import { ThemeContext } from '../../../App';
import { palette, t_ColorTheme } from "../../constants/Colors";
import { t_NavButton, t_Vector2 } from "../../constants/Types";


interface i_NavRadialButton {
  funcRegister: Function[],
  animationOptions: { endPos: t_Vector2, radius: number, openTime: number }
  style?: any
}
export default function NavRadialButton({ funcRegister, animationOptions, style = {} }: i_NavRadialButton) {

  const { endPos, radius, openTime } = animationOptions;

  /****************** 
   * CONSTANTS 
  ******************/
  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);


  /****************** 
   * ANIMATION 
  ******************/
  const posX = useState(new Animated.Value(0))[0];
  const posY = useState(new Animated.Value(0))[0];

  useEffect(() => {
    function startAnimation(open: boolean): void {
      if (open) {
        Animated.parallel([
          Animated.timing(posX, {
            toValue: endPos.x,
            duration: openTime,
            easing: Easing.elastic(1),
            useNativeDriver: true,
          }),
          Animated.timing(posY, {
            toValue: endPos.y,
            duration: openTime,
            easing: Easing.elastic(1),
            useNativeDriver: true,
          })
        ]).start();
      } else {
        Animated.parallel([
          Animated.timing(posX, {
            toValue: 0,
            duration: openTime * .8,
            easing: Easing.back(1),
            useNativeDriver: true,
          }),
          Animated.timing(posY, {
            toValue: 0,
            duration: openTime * .8,
            easing: Easing.back(1),
            useNativeDriver: true,
          })
        ]).start();
      }
    }
    funcRegister.push(startAnimation);
  }, []);


  /****************** 
   * RENDER 
  ******************/
  const transform = [{ translateX: posX }, { translateY: posY }]
  return <Animated.View style={[styles.buttonTransform, styles.navButton, { transform }]} />;
}


/****************** 
 * STYLE 
******************/
const getStyle = (colorTheme: t_ColorTheme) => (
  StyleSheet.create({
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
  })
);