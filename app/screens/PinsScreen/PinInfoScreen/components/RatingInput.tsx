// REACT
import { Entypo } from '@expo/vector-icons';
import React, { useContext, useMemo } from 'react';
import { View, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from '../../../../constants/Colors';


type t_OnPress = (event: GestureResponderEvent) => void;

interface i_RatingStarInput {
  value: boolean,
  starSize: number,
  onPress: t_OnPress,
}
function RatingStarInput({ value, starSize, onPress }: i_RatingStarInput) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const plt = palette[colorTheme];

  return (
    <TouchableOpacity onPress={onPress}>
      <Entypo name={value ? "star" : "star-outlined"} size={starSize} color={value ? plt.complementary : plt.accent} />
    </TouchableOpacity>
  );
}


interface i_RatingInput {
  fieldValue: number,
  setFieldValue: (value: any) => void,
  starSize?: number,
  style?: {},
}
export default function RatingInput({ fieldValue, setFieldValue, starSize = 45, style = {} }: i_RatingInput) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  const starsList = useMemo(() => Array(5).fill(0).map((e, i) => (
    <RatingStarInput value={i < fieldValue} starSize={starSize} onPress={e => setFieldValue(i + 1)} key={i} />
  )), [fieldValue]);

  return (
    <View style={[styles.ratingsBox, style]}>
      {starsList}
    </View>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];

  return StyleSheet.create({
    ratingsBox: {
      paddingHorizontal: 80,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  });
}