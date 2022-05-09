// REACT
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useContext, useRef, useState } from 'react';
import { View, StyleSheet, FlatList, Dimensions, SafeAreaView, } from 'react-native';
import Button from '../../components/Button';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../constants/Colors";
import { t_OnScrollEventHandler } from "../../constants/Types";
import { t_Navigation } from '../../navigation/typeNavigation';
import { safeArea } from '../../utilities/StylesPattern';
// COMPONENTS
import PinCard from './components/PinCard/PinCard';
import PinTabs from './components/PinTabs';
import { t_PinInfo, t_TabInfo, t_Tabs } from './typePinsScreen';
import { usePinScreen } from './usePinsScreen';

const { width } = Dimensions.get('screen');

interface i_PinsScreen { }
export default function PinScreen({ }: i_PinsScreen) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  const data = usePinScreen();

  const [clicked, setClicked] = useState(false);
  const flatListRef = useRef<FlatList<any>>(null);

  const switchTab = useCallback((index: number): void => {
    setClicked(true);
    flatListRef.current?.scrollToOffset({ animated: true, offset: index * width });
    setClicked(false);
  }, []);

  const tabs: t_Tabs[] = ["feed", "mine", "history"];
  const [currentTab, setCurrentTab] = useState<t_Tabs>("feed");

  const onScroll: t_OnScrollEventHandler = useCallback(
    event => {
      if (clicked) return;
      const posX = event.nativeEvent.contentOffset.x;
      let i = 0;
      for (i; i < tabs.length; i++) {
        if (posX < (width * (i + 1)) + 1) {
          break;
        }
      }
      setCurrentTab(tabs[i]);
    },
    []);

  const navigation: t_Navigation = useNavigation();
  const onBtnPress = useCallback(() => navigation.navigate('PinCreation'), []);

  const renderCard = useCallback(({ item }: { item: t_PinInfo }) => (
    !item ?
      <Button text='ADD PIN' onPress={onBtnPress} style={styles.addPin} /> :
      <PinCard cardInfo={item} />
  ), []);

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
        tabs={tabs}
        switchTab={switchTab}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        style={styles.tabs}
      />
      <FlatList
        onScrollEndDrag={onScroll}
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