// REACT
import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from '../../../../constants/Colors';
import { safeArea } from '../../../../utilities/StylesPattern';
import { t_OnPress } from '../../../../constants/Types';


interface i_CloseIcon {
  color?: string,
  iconSize?: number,
  onPress?: t_OnPress,
}
export default function CloseIcon({ onPress, color, iconSize }: i_CloseIcon) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[safeArea, styles.close]}>
      <TouchableOpacity onPress={onPress || (() => navigation.goBack())}>
        <AntDesign name="close" size={iconSize || 36} color={color || plt.dominant} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}


const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    close: {
      position: 'absolute',
      zIndex: 1,
      left: 8,
    },
  });
}