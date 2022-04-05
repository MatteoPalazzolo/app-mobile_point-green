// REACT
import { Entypo, FontAwesome } from '@expo/vector-icons';
import React, { useContext, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../constants/Colors";
import { } from "../../../constants/Types";



interface i_RatingStar {
  value: boolean,
}
function RatingStar({ value }: i_RatingStar) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const plt = palette[colorTheme];
  const size = 45;

  if (value)
    return <Entypo name="star" size={size} color={plt.complementary} />
  else
    return <Entypo name="star-outlined" size={size} color={plt.accent} />
}


interface i_RatingsBox {
  value: number,
  style: {},
}
export default function RatingsBox({ value, style }: i_RatingsBox) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  const starsList = useMemo(() => Array(5).fill(0).map((e, i) => (
    <RatingStar value={i < value} key={i} />
  )), [value]);

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
      width: '100%',
      paddingHorizontal: 80,

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    }
  });
}