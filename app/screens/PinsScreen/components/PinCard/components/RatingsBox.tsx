// REACT
import { Entypo, FontAwesome } from '@expo/vector-icons';
import React, { useContext, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../../../constants/Colors";


interface i_RatingStar {
  value: boolean,
  starSize: number,
}
function RatingStar({ value, starSize }: i_RatingStar) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const plt = palette[colorTheme];

  if (value)
    return <Entypo name="star" size={starSize} color={plt.complementary} />
  else
    return <Entypo name="star-outlined" size={starSize} color={plt.accent} />
}


interface i_RatingsBox {
  value: number,
  starSize: number,
  style?: {},
}
export default function RatingsBox({ value, starSize, style }: i_RatingsBox) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  const starsList = useMemo(() => Array(5).fill(0).map((e, i) => (
    <RatingStar value={i < value} starSize={starSize} key={i} />
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
      paddingHorizontal: 80,

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    }
  });
}