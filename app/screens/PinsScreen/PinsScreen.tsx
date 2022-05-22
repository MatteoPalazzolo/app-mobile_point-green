// REACT
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useContext, useReducer, useRef, useState } from 'react';
import { View, StyleSheet, FlatList, Dimensions, SafeAreaView, } from 'react-native';
import Button from '../../components/Button';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../constants/Colors";
import { t_Navigation } from '../../navigation/typeNavigation';
import { safeArea } from '../../utilities/StylesPattern';
// COMPONENTS
import PinCard from './components/PinCard/PinCard';
import PinTabs from './components/PinTabs';
import { t_PinInfo, t_TabInfo, t_Tabs } from './typePinsScreen';
import { usePinScreen } from './usePinsScreen';

const { width } = Dimensions.get('screen');
const TABS: t_Tabs[] = ["feed", "mine", "history"];


interface i_PinsScreen { }
export default function PinScreen({ }: i_PinsScreen) {

  const navigation: t_Navigation = useNavigation();
  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const data = usePinScreen();

  const tabReducer = useCallback((state: { index: number, label: string }, action: { scrollX: number }) => {
    for (let i = 0; i < TABS.length; i++) {
      const distance = Math.abs(action.scrollX - width * i); // distance(scroll, i page)
      if (distance < width * .5) {
        console.log('PinTabs test 1');
        return { index: i, label: TABS[i] }
      }
    }
    console.log('PinTabs test 2');
    return { index: 0, label: TABS[0] }
  }, []);

  const [tab, dispatch] = useReducer(tabReducer, { index: 0, label: TABS[0] }, undefined);


  const flatListRef = useRef<FlatList<any>>(null);

  const setTab = useCallback((index: number): void => {
    flatListRef.current?.scrollToOffset({ animated: true, offset: index * width });
    dispatch({ scrollX: index * width });
  }, [flatListRef.current]);


  const renderCard = useCallback(({ item, index }: { item: t_PinInfo, index: number }) => (<>
    {(index === 0) && <Button text='ADD PIN' onPress={() => navigation.navigate('PinCreation')} style={styles.addPin} />}
    <PinCard cardInfo={item} />
  </>), []);

  const renderPage = useCallback(({ item }: { item: t_TabInfo }) => (
    <View style={styles.cardContainer}>
      <FlatList
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        data={item.data}
        renderItem={renderCard}
      />
    </View>
  ), []);

  return (
    <SafeAreaView style={[styles.safeArea]}>
      <PinTabs
        tabs={TABS}
        tab={tab}
        setTab={setTab}
        style={styles.tabs}
      />
      <FlatList
        onScroll={e => dispatch({ scrollX: e.nativeEvent.contentOffset.x })}
        ref={flatListRef}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderPage}
      />
    </SafeAreaView>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    ...safeArea,
    tabs: {
      alignSelf: 'center',
      marginTop: 12,
      marginBottom: 8,
    },
    cardContainer: {
      width,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: plt.dominant,
      paddingBottom: 50,
    },
    scrollView: {
      width: '85%',
      backgroundColor: plt.dominant,
    },
    text: { textAlign: "center" },
    addPin: {
      marginTop: 15,
      marginBottom: 20,
    }
  });
}