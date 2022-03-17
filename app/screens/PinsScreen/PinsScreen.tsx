// REACT
import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, BackHandler, FlatList } from 'react-native';
// CUSTOM
import { ThemeContext } from '../../../App';
import { palette, t_ColorTheme } from "../../constants/Colors";
import { } from "../../constants/Types";
// COMPONENTS
import AddPin from './components/AddPin';
import PinCard from './components/PinCard';
import PinTabBar from './components/PinTabBar';


interface i_PinsScreen { }
export default function PinScreen({ }: i_PinsScreen) {

  type t_CardData = { content: {}, key: number };
  const items: t_CardData[] = [
    {},
    {},
    {},
    {},
    {},
  ].map((e, i) => (
    { content: e, key: i }
  ));

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  return (
    <View style={styles.container}>
      <PinTabBar />
      <FlatList
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={
          ({ item }: { item: t_CardData }) => {
            if (item.key === 0)
              return <AddPin />
            else
              return <PinCard />
          }
        }>
      </FlatList>
    </View>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => (
  StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#bbb',
    },
    scrollView: {
      width: '90%',
      backgroundColor: '#bbb',
    },
    text: { textAlign: "center" },
  })
);