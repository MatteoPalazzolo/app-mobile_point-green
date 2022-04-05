// REACT
import React, { useContext, useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, BackHandler, FlatList, Dimensions, StatusBar, SafeAreaView, Platform } from 'react-native';
// CUSTOM
import { toTheme, palette, ThemeContext, t_ColorTheme } from "../../constants/Colors";
import { } from "../../constants/Types";
// COMPONENTS
import AddPin from './components/AddPin';
import PinCard from './components/PinCard';
import PinTabBar from './components/PinTabBar';
import { t_CardData } from './typePinScreen';
import { usePinScreen } from './usePinScreen';

const { width, height } = Dimensions.get('screen');

interface i_PinsScreen { }
export default function PinScreen({ }: i_PinsScreen) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  const { tabScreens } = usePinScreen();


  return (
    <SafeAreaView style={styles.safeArea}>
      <View >
        <Text>Feed</Text>
        <Text>Mine</Text>
        <Text>History</Text>
      </View>
      <FlatList
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        style={{ width, height }}
        data={tabScreens}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <FlatList
              style={styles.scrollView}
              showsVerticalScrollIndicator={false}
              data={item}
              renderItem={({ item }: { item: t_CardData }) => item.key % 100 === 0 ? <AddPin /> : <PinCard cardInfo={item.content} />}>
            </FlatList>
          </View>
        )}>
      </FlatList>
    </SafeAreaView>
  );

}

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    safeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    cardContainer: {
      width,
      height,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: plt.dominant,
      marginTop: 45,
    },
    scrollView: {
      width: '85%',
      backgroundColor: plt.dominant,
    },
    text: { textAlign: "center" },
  });
}