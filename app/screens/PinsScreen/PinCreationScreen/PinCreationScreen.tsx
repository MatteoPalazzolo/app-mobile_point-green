// REACT
import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, PlatformColor } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../constants/Colors";
import { safeArea } from '../../../utilities/StylesPattern';
import { t_ImageInfo } from '../typePinsScreen';
import Carousel from '../PinInfoScreen/components/Carousel';
import { MaterialIcons } from '@expo/vector-icons';


interface i_PinCreationScreen { }
export default function PinCreationScreen({ }: i_PinCreationScreen) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  type s = { imagesData: t_ImageInfo[] };
  const info: s = {
    imagesData: [
      { key: 'image1', url: 'https://www.eea.europa.eu/themes/biodiversity/state-of-nature-in-the-eu/state-of-nature-2020-subtopic/image_print' },
    ],
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Carousel
        images={info.imagesData}
        last={
          <TouchableOpacity onPress={() => console.log('hi')}>
            <MaterialIcons name="add-a-photo" size={72} color={plt.accent} />
          </TouchableOpacity>
        } />
    </ScrollView>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => (
  StyleSheet.create({
    ...safeArea,
    container: {},
    addImages: {
      fontSize: 50,
    },
  })
);