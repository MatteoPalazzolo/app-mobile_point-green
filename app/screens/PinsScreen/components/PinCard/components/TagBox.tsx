// REACT
import { AntDesign } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, ViewStyle, Button, TouchableOpacity } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../../../constants/Colors";
import { t_OnPress } from '../../../../../constants/Types';

const ACTIVE_OPACITY = .6;

interface i_TagBox {
  value: string,
}
export function TagBox({ value }: i_TagBox) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  return (
    <View style={styles.tagBox}>
      <Text style={styles.text} numberOfLines={1}>{value}</Text>
    </View>
  );
}


interface i_TagsList {
  tags: string[],

  style?: ViewStyle,
  onAddPress?: t_OnPress;
}
export default function TagsList({ tags, style, onAddPress }: i_TagsList) {
  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  return (
    <View style={[styles.tagsList, style]}>
      {tags.slice(0, 5).map((e, i) => (
        <TagBox value={e} key={i} />
      ))}
      {onAddPress && (
        <TouchableOpacity onPress={onAddPress} activeOpacity={ACTIVE_OPACITY}>
          <View style={[styles.tagBox, { aspectRatio: 1 }]}>
            <AntDesign name="plus" size={28} color={plt.complementary} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];

  return StyleSheet.create({
    tagsList: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',

      paddingHorizontal: 18,
    },
    tagBox: {
      margin: 3,
      height: 38,
      borderRadius: 100,
      borderWidth: 2, // MAYBE 3
      borderColor: plt.complementary,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
    },
    text: {
      marginHorizontal: 12,
      marginVertical: 0,
      fontSize: 18,
      position: 'relative',
      bottom: 1,
      textTransform: 'capitalize',
    },
  });
}

