// REACT
import React, { useContext } from 'react';
import { View, StyleSheet, Text, Pressable, GestureResponderEvent, TouchableOpacityBase, TouchableOpacity } from 'react-native';
import { palette, ThemeContext, t_ColorTheme } from '../constants/Colors';
// CUSTOM


interface i_Button {
  text: string,
  Icon?: JSX.Element,
  fontSize?: number,
  onPress: (event: GestureResponderEvent) => void,
  style?: {},
}
export default function Button({ text, Icon, onPress, fontSize = 20, style }: i_Button) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme, fontSize);
  const plt = palette[colorTheme];

  return (
    <TouchableOpacity activeOpacity={.8} onPress={onPress}>
      <View style={[styles.container, style]}>
        {Icon}
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <TouchableOpacity activeOpacity={.8} onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.text}>{text}</Text>
        {Icon && (
          <View style={styles.icon}>
            {Icon}
          </View>
        )}
        {/* <View style={styles.borderLine} /> */}
      </View>
    </TouchableOpacity>
  );
}

const getStyle = (colorTheme: t_ColorTheme, fontSize: number) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      backgroundColor: plt.complementary,
      borderRadius: 15,
    },
    text: {
      color: plt.dominant,
      fontSize,
      fontWeight: 'bold',
      margin: 10,
    },
    borderLine: {
      position: 'absolute',
      zIndex: 3,
      left: 0, top: 0, bottom: 0,
      backgroundColor: plt.complementary,
      width: '1.5%',
    },
    icon: {

    }
  });
}