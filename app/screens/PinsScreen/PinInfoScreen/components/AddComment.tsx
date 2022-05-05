// REACT
import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../../constants/Colors";



interface i_AddComment { }
export default function AddComment({ }: i_AddComment) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  return (
    <View style={styles.container}>
      <Text>Add a comment</Text>
    </View>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: 14,
      borderRadius: 15,
      backgroundColor: plt.dark,
    },
  });
}