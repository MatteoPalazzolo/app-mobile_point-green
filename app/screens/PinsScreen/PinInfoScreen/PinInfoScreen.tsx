// REACT
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../constants/Colors";
import { t_RootStackParamList } from '../../../navigation/typeNavigation';
import { safeArea } from '../../../utilities/StylesPattern';


type t_PinInfoScreen = NativeStackScreenProps<t_RootStackParamList, 'PinInfo'>
export default function PinInfoScreen({ route, navigation }: t_PinInfoScreen) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  const cardInfo = route.params.cardInfo;

  return (
    <View style={[styles.container, styles.safeArea]}>
      <Text style={styles.text}>PinInfoScreen {'\n'} {JSON.stringify(cardInfo)}</Text>
    </View>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => (
  StyleSheet.create({
    ...safeArea,
    container: {},
    text: { textAlign: "center" },
  })
);