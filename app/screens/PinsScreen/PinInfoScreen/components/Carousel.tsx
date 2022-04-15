// REACT
import React, { useCallback, useContext, useReducer } from 'react';
import { View, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../../constants/Colors";
import PointTab from './PointTab';

const { width } = Dimensions.get('screen');

type t_ImageInfo = { url: string, key: string, }

interface i_Carousel {
  images: t_ImageInfo[],
}
export default function Carousel({ images }: i_Carousel) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  const renderImage = useCallback(({ item }: { item: t_ImageInfo }) => (
    <Image
      source={{ uri: item.url }}
      style={styles.image}
    />
  ), []);

  const tabReducer = useCallback((state: { currentTab: number }, action: { scrollX: number }) => {
    for (let i = 0; i < images.length; i++) {
      const distance = Math.abs(action.scrollX - width * i); // distance(scroll, i page)
      if (distance < width * .5)
        return { currentTab: i }
    }
    return { currentTab: 0 }
  }, [images]);
  const [tab, dispatch] = useReducer(tabReducer, { currentTab: 0 }, undefined);

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderImage}
        keyExtractor={item => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={e => dispatch({ scrollX: e.nativeEvent.contentOffset.x })}
      />
      <View style={styles.tabBar}>
        {images.map((e, i) => (
          <PointTab focus={tab.currentTab === i} key={"PointTab" + i} />
        ))}
      </View>
    </View>
  );
}


const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];

  return StyleSheet.create({
    container: {
      width,
      height: 350,
    },
    image: {
      width,
      height: '100%',
      backgroundColor: plt.dark,
    },
    tabBar: {
      // width: 100,
      height: 26,
      backgroundColor: plt.dominant,
      borderRadius: 100,

      position: 'absolute',
      alignSelf: 'center',
      bottom: 12,

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',

      paddingHorizontal: 8,
    },
  });
}