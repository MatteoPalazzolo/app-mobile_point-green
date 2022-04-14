// REACT
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
// CUSTOM
import { ThemeContext, palette, t_ColorTheme } from "../../../constants/Colors";
import { t_Navigation } from '../../../navigation/typeNavigation';


interface i_AddPin { }
export default function AddPin({ }: i_AddPin) {

  const navigation: t_Navigation = useNavigation();
  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  const onBtnPress = useCallback(() => navigation.navigate('PinCreation'), []);

  return (
    <Pressable style={[styles.container, styles.touchOpacity]} onPress={onBtnPress}>
      <View style={[styles.container, styles.button]}>
        <Text style={styles.addIcon}>+</Text>
        <Text style={styles.text}>ADD PIN</Text>
      </View>
    </Pressable>
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

      marginTop: 10,
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