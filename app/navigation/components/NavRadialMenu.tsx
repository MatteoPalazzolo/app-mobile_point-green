// REACT
import React, { useContext, useMemo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
// CUSTOM
import { ThemeContext } from '../../../App';
import { t_NavButton, t_Vector2 } from '../../constants/Types';
import { palette, t_ColorTheme } from '../../constants/Colors';
import NavRadialButton from './NavRadialButton';
import { screens, t_RootStackParamList, t_Screen } from '../screens';
import { t_HomeNavigation } from '../../screens/HomeScreen/HomeScreen';


interface i_NavRadialMenu { navigation: t_HomeNavigation }
export default function NavRadialMenu({ navigation }: i_NavRadialMenu) {

  const homeScreen = screens[0]
  const newScreens = [...screens];
  newScreens.shift();

  const radius = 120;
  const openTime = 300; //ms

  /* create an array containing the procedural generated target position for all buttons */
  const calcButtonsTargetPos = () => (
    newScreens.map((b, i) => {
      const stepRad = Math.PI / (newScreens.length + 1);
      const currentAngle = stepRad * (i + 1);
      const x: number = -Math.cos(currentAngle) * radius;
      const y: number = -Math.sin(currentAngle) * radius;
      /*
      console.log("deg: ", stepRad * (180 / Math.PI));
      console.log("x: ", x, "y: ", y);
      */
      return { x, y };
    }));
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

  return (
    <View style={styles.container}>

      {newScreens.map((b, i) => {
        return (
          <NavRadialButton
            funcRegister={btnAnimationRegister}
            animationOptions={{ endPos: buttonEndCoords[i], radius: radius, openTime: openTime }}
            screenInfo={newScreens[i]}
            navigation={navigation}
            key={i} />
        );
      })}

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