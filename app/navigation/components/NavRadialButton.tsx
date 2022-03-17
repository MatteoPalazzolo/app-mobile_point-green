// REACT
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
// CUSTOM
import { ThemeContext } from '../../../App';
import { palette, t_ColorTheme } from "../../constants/Colors";
import { t_NavButton, t_Vector2 } from "../../constants/Types";
import { t_RootStackParamList, t_Screen } from '../screens';
import { t_HomeNavigation } from '../../screens/HomeScreen/HomeScreen';


interface i_NavRadialButton {
  funcRegister: Function[],
  animationOptions: { endPos: t_Vector2, radius: number, openTime: number },
  screenInfo: t_Screen,
  navigation: t_HomeNavigation,
}
export default function NavRadialButton({ funcRegister, animationOptions, screenInfo, navigation }: i_NavRadialButton) {

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

  function loadNewScreen() {
    console.log(screenInfo.label);
    navigation.navigate(screenInfo.label);
  }


  /****************** 
   * RENDER 
  ******************/
  const transform = [{ translateX: posX }, { translateY: posY }]
  return (
    <Animated.View style={[styles.buttonTransform, , { transform }]}>
      <TouchableOpacity
        style={[styles.navButton, styles.touchableOpacityTransform]}
        onPress={loadNewScreen}
        activeOpacity={0.9}>
        <screenInfo.icon width={36} height={36} color={palette[colorTheme].dominant} />
      </TouchableOpacity>
    </Animated.View>
  );
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
    touchableOpacityTransform: {
      position: "absolute", top: 0, bottom: 0, right: 0, left: 0,
      zIndex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  })
);