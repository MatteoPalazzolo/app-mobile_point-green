// REACT
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// CUSTOM
import { ThemeContext } from '../../../../App';
import { palette, t_ColorTheme } from "../../../constants/Colors";
import { } from "../../../constants/Types";


interface i_PinCard {
  cardInfo?: {
    imageURL: string,
    title: string,
    distance: number,
    visits: number,
    value: number,
    tags: string[],
    ratings: '0' | '1' | '2' | '3' | '4' | '5',
  }
}
export default function PinCard({ cardInfo }: i_PinCard) {

  cardInfo = {
    imageURL: 'https://www.sgsgroup.it/-/media/global/images/structural-website-images/hero-images/hero-agri-forestry.jpg',
    title: 'The Wood',
    distance: 20,
    visits: 500,
    value: 500,
    tags: ['boring', 'scary', 'morning', 'this must be quite long as test'],
    ratings: '3',
  }

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  return (
    <TouchableOpacity style={styles.touchOpacity} activeOpacity={.8} onPress={() => console.log("CARD")}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: cardInfo.imageURL }} />
        <View style={styles.infoBox}>
          <Text style={styles.title}>{cardInfo.title.toUpperCase()}</Text>
          <View style={styles.coordsBox}>
            <View style={{ backgroundColor: 'red', width: 70, height: 40 }} />
            <View style={{ backgroundColor: 'red', width: 70, height: 40 }} />
            <View style={{ backgroundColor: 'red', width: 70, height: 40 }} />
          </View>
          <View style={styles.tagsList}>
            <View style={{ borderRadius: 50, backgroundColor: 'red', width: 70, height: 40, margin: 5 }} />
            <View style={{ borderRadius: 50, backgroundColor: 'red', width: 170, height: 40, margin: 5 }} />
            <View style={{ borderRadius: 50, backgroundColor: 'red', width: 240, height: 40, margin: 5 }} />
            <View style={{ borderRadius: 50, backgroundColor: 'red', width: 120, height: 40, margin: 5 }} />
          </View>
          <View style={styles.ratingsBox}>
            <View style={{ backgroundColor: 'green', width: 46, height: 46 }} />
            <View style={{ backgroundColor: 'green', width: 46, height: 46 }} />
            <View style={{ backgroundColor: 'grey', width: 46, height: 46 }} />
            <View style={{ backgroundColor: 'grey', width: 46, height: 46 }} />
            <View style={{ backgroundColor: 'grey', width: 46, height: 46 }} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];

  const borderRadius = 13.5

  const cardShadow = {
    shadowColor: plt.dark,
    shadowOffset: { width: 0, height: 4 }, // IOS
    shadowOpacity: 0.30, // IOS
    shadowRadius: 4.65, // IOS
    elevation: 8, // ANDROID
  }

  return StyleSheet.create({
    touchOpacity: {
      backgroundColor: 'white',
      borderRadius: borderRadius,
      ...cardShadow,

      marginBottom: 25,
    },
    container: {
      borderRadius: borderRadius,

      backgroundColor: plt.dominant,
      /*
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      */
    },
    image: {
      borderTopLeftRadius: borderRadius,
      borderTopRightRadius: borderRadius,
      width: '100%', height: 200,
    },
    infoBox: {

    },
    title: {
      fontSize: 22,
      textAlign: 'center',
      marginVertical: 10,
    },
    coordsBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 10,
    },
    tagsList: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',

      marginHorizontal: 20,
      marginBottom: 10,
    },
    ratingsBox: {
      width: '100%',
      paddingHorizontal: 10,

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',

      marginBottom: 15,
    }
  });
}