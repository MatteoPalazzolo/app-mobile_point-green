// REACT
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, BackHandler, FlatList } from 'react-native';
// CUSTOM
import { toTheme, palette, ThemeContext, t_ColorTheme } from "../../constants/Colors";
import { } from "../../constants/Types";
// COMPONENTS
import AddPin from './components/AddPin';
import PinCard, { i_PinInfo } from './components/PinCard';
import PinTabBar from './components/PinTabBar';


interface i_PinsScreen { }
export default function PinScreen({ }: i_PinsScreen) {

  type t_CardData = {
    content: i_PinInfo,
    key: number
  };

  const feedItems: i_PinInfo[] = [
    {
      imageURL: 'https://www.sgsgroup.it/-/media/global/images/structural-website-images/hero-images/hero-agri-forestry.jpg',
      title: 'The Wood',
      distance: 20,
      visits: 400,
      value: 400,
      tags: ['boring', 'scary', 'morning', 'this must be quite long as test', 'nice planks', ''],
      ratings: 3,
    },
    {
      imageURL: 'https://www.pandotrip.com/wp-content/uploads/2013/05/Untitled-103-980x735.jpg',
      title: 'The Flowers',
      distance: 30,
      visits: 1100,
      value: 900,
      tags: ['funny', 'funky', 'furry', 'fruit', 'flowers'],
      ratings: 5,
    },
    {
      imageURL: 'https://www.guidatorino.com/wp-content/uploads/2019/09/lazza-torino-venaria-2019.jpg',
      title: 'Zzala',
      distance: 1,
      visits: 157,
      value: 999,
      tags: ['sono con te però...', 'non devi farmi male...', 'se sono cerbero...', 'verrai con me nell \'Ade...', 'ZZZalLa'],
      ratings: 6,
    }
  ];

  const mineItems: i_PinInfo[] = [
    {
      imageURL: 'https://www.rocchette.com/wp-content/uploads/attrazioni-naturali-maremma.jpg',
      title: 'My Zoo',
      distance: 50,
      visits: 660,
      value: 7800,
      tags: ['horse', 'horsy', 'bird', 'birdy', 'watching'],
      ratings: 3,
    },
    {
      imageURL: 'https://www.pandotrip.com/wp-content/uploads/2013/05/Untitled-103-980x735.jpg',
      title: 'The Flowers',
      distance: 30,
      visits: 1100,
      value: 900,
      tags: ['funny', 'funky', 'furry', 'fruit', 'flowers'],
      ratings: 5,
    },
    {
      imageURL: 'https://static.tripzilla.com/thumb/2/8/92200_800x.jpg',
      title: 'La New Zealand...',
      distance: 0,
      visits: 0,
      value: 0,
      tags: ['the only one', '', '', '', ''],
      ratings: 2,
    }
  ];

  const historyItems: i_PinInfo[] = [
    {
      imageURL: 'https://www.rocchette.com/wp-content/uploads/attrazioni-naturali-maremma.jpg',
      title: 'My Zoo',
      distance: 50,
      visits: 660,
      value: 7800,
      tags: ['horse', 'horsy', 'bird', 'birdy', 'watching'],
      ratings: 3,
    },
    {
      imageURL: 'https://www.pandotrip.com/wp-content/uploads/2013/05/Untitled-103-980x735.jpg',
      title: 'The Flowers',
      distance: 30,
      visits: 1100,
      value: 900,
      tags: ['funny', 'funky', 'furry', 'fruit', 'flowers'],
      ratings: 5,
    },
    {
      imageURL: 'https://static.tripzilla.com/thumb/2/8/92200_800x.jpg',
      title: 'La New Zealand...',
      distance: 0,
      visits: 0,
      value: 0,
      tags: ['the only one'],
      ratings: 2,
    }
  ];

  const items: { [key: string]: i_PinInfo[] } = {
    'Feed': feedItems,
    'Mine': mineItems,
    'History': historyItems,
  }

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const [currentTab, setCurrentTab] = useState(Object.keys(items)[0]);

  const itemsData: t_CardData[] = [
    { // this is the ADD PIN button
      imageURL: '',
      title: '',
      distance: 0,
      visits: 0,
      value: 0,
      tags: [],
      ratings: 0,
    },
    ...items[currentTab]
  ].map((e, i) => (
    { content: e, key: i + 101 }
  ));


  return (
    <View style={styles.container}>
      <PinTabBar tabs={Object.keys(items)} currentTab={currentTab} setTab={setCurrentTab} />
      <FlatList
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        data={itemsData}
        renderItem={({ item }: { item: t_CardData }) => item.key === 101 ? <AddPin /> : <PinCard cardInfo={item.content} />}>
      </FlatList>
    </View>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    container: {
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
  })
}