// REACT
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../../../constants/Colors";


interface i_TagBox {
  value: string,
}
function TagBox({ value }: i_TagBox) {

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
  style: {},
}
export default function TagsList({ tags, style }: i_TagsList) {
  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  return (
    <View style={[styles.tagsList, style]}>
      {tags.slice(0, 5).map((e, i) => (
        <TagBox value={e} key={i} />
      ))}
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
      borderWidth: 3,
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

