// REACT
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// CUSTOM
import { ThemeContext } from '../../App';
import { palette, t_ColorTheme } from "../constants/Colors";
import { } from "../constants/Types";


interface i_OptionsMenu { }
export default function OptionsMenu({ }: i_OptionsMenu) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>OptionsMenu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: { textAlign: "center" },
});
