// REACT
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// CONSTS
import { palette, ThemeContext, t_ColorTheme } from "../../../constants/Colors";
import { } from "../../../constants/Types";
// ICONS
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
// UTILITIES
import { prettifyDistance, prettifyUnits } from '../../../utilities/PrettifyData';
// COMPONENTS
import IconInfoBox from './IconInfoBox';
import RatingsBox from './RatingsBox';
import TagsList from './TagBox';
import { t_PinInfo } from '../typePinScreen';


interface i_PinCard {
  cardInfo: t_PinInfo,
}
export default function PinCard({ cardInfo }: i_PinCard) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  const [pressed, setPressed] = useState(false);

  const { imageURL, title, distance, value, visits, tags, ratings } = cardInfo;

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.card}
      onPress={() => console.log("CARD")}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}>
      <View style={styles.container}>
        <Image style={[styles.image, { opacity: pressed ? .8 : 1 }]} source={{ uri: imageURL }} />
        <View style={styles.infoBox}>
          <Text style={styles.title}>{title.toUpperCase()}</Text>
          <View style={styles.coordsBox}>
            <IconInfoBox icon={<FontAwesome5 name="ruler" size={24} />} value={prettifyDistance(distance)} />
            <IconInfoBox icon={<Ionicons name="people" size={31} />} value={prettifyUnits(visits, 'ppl')} />
            <IconInfoBox icon={<FontAwesome5 name="coins" size={24} />} value={prettifyUnits(value, '$')} />
          </View>
          <TagsList tags={tags} style={styles.tagsList} />
          <RatingsBox value={ratings} style={styles.ratingsBox} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];

  const borderRadius = 15;

  const cardShadow = {
    shadowColor: plt.dark,
    shadowOffset: { width: 0, height: 4 }, // IOS
    shadowOpacity: 0.30, // IOS
    shadowRadius: 4.65, // IOS
    elevation: 8, // ANDROID
  }

  return StyleSheet.create({
    card: {
      backgroundColor: 'white',
      borderRadius: borderRadius,
      ...cardShadow,

      marginBottom: 35,
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
      width: '100%', height: 250,
    },
    infoBox: {
      backgroundColor: plt.dominant,
      borderRadius: borderRadius,
      position: 'relative',
      bottom: 15,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      marginTop: 16,
      marginBottom: 15,
    },
    coordsBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 20,
    },
    tagsList: {
      marginBottom: 10,
    },
    ratingsBox: {
      marginBottom: 0,
    }
  });
}