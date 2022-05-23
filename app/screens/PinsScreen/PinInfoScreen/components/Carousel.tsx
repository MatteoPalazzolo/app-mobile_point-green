// REACT
import { AntDesign } from '@expo/vector-icons';
import React, { useCallback, useContext, useReducer } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, SafeAreaView } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../../constants/Colors";
import { safeArea } from '../../../../utilities/StylesPattern';
import { t_ImageInfo } from '../../typePinsScreen';
import PointTab from './PointTab';

const { width } = Dimensions.get('screen');


interface i_Carousel {
  images: t_ImageInfo[],
  children?: JSX.Element,
}
export default function Carousel({ images, children }: i_Carousel) {


  const tabReducer = useCallback((state: { currentTab: number }, action: { scrollX: number }) => {
    const len = images.length + (children ? 1 : 0);
    for (let i = 0; i < len; i++) {
      const distance = Math.abs(action.scrollX - width * i); // distance(scroll, i page)
      if (distance < width * .5)
        return { currentTab: i }
    }
    return { currentTab: 0 }
  }, [images]);
  const [tab, dispatch] = useReducer(tabReducer, { currentTab: 0 }, undefined);


  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme, tab.currentTab, images.length);
  const plt = palette[colorTheme];


  const renderImage = useCallback(({ item, index }: { item: t_ImageInfo, index: number }) => (<>
    <Image
      source={{ uri: item.url }}
      style={styles.image}
    />
    {(index === images.length - 1) && (
      <SafeAreaView style={[styles.safeArea, styles.last]}>
        {children}
      </SafeAreaView>
    )}
  </>), []);


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
        {children && (<>
          {/* <AntDesign name={tab.currentTab === images.length ? "pluscircle" : "pluscircleo"} size={14} color={plt.complementary} /> */}
          <View style={styles.lastTabBg}>
            <Text style={styles.lastTabFg}>+</Text>
          </View>

        </>
        )}
      </View>
    </View>
  );
}


const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];

  return StyleSheet.create({
    ...safeArea,
    container: {
      width,
      height: 350,
    },
    image: {
      width,
      height: '100%',
      backgroundColor: plt.dark,
    },
    last: {
      width,
      height: '100%',
      backgroundColor: plt.dominant,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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
    lastTabBg: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      backgroundColor: false && tab === imagesLen ? plt.complementary : plt.dominant,
      borderRadius: 100,
      width: 12, height: 12,
    },
    lastTabFg: {
      position: 'absolute',
      transform: [{ translateY: -.8 }, { translateX: -.1 }],
      color: false && tab === imagesLen ? plt.dominant : plt.complementary,
      fontSize: 18,
    },
  });
}