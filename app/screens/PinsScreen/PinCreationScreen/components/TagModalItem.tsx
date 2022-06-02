// REACT
import { ArrayHelpers } from 'formik';
import React, { useContext, useState } from 'react';
import { StyleSheet, Modal, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../../constants/Colors";

const CHECKBOX_SIZE = 24;

type t_ActionType = 'add' | 'remove';

interface i_TagModalItem {
  tagName: string,
  dispatch: React.Dispatch<{ type: t_ActionType, item: string }>,
}
export default function TagModalItem({ tagName, dispatch }: i_TagModalItem) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={checked}
        onValueChange={setChecked}
        color={plt.complementary}
        onTouchEnd={e => dispatch({ type: checked ? 'remove' : 'add', item: tagName })} />
      <Text style={styles.tagName}>{tagName}</Text>
    </View>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    checkbox: {
      width: CHECKBOX_SIZE,
      height: CHECKBOX_SIZE,
      marginLeft: '5%',
    },
    tagName: {
      textAlign: 'center',
      width: '77%',
      fontSize: 22,
    },
  });
}