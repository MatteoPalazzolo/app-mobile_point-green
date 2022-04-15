// REACT
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../constants/Colors";
import UserIcon from '../../../navigation/nav_icons/UserIcon';
import { t_RootStackParamList } from '../../../navigation/typeNavigation';
import { safeArea } from '../../../utilities/StylesPattern';
import Carousel from './components/Carousel';


type t_PinInfoScreen = NativeStackScreenProps<t_RootStackParamList, 'PinInfo'>
export default function PinInfoScreen({ route, navigation }: t_PinInfoScreen) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);

  const cardInfo = route.params.cardInfo;
  const images = [
    { key: '5781', url: 'https://www.pbs.org/wnet/nature/files/2019/07/Super-Hummingbirds-2-1280x675.jpg' },
    { key: '1564', url: 'https://www.oxfordmartin.ox.ac.uk/images/_1200x630_crop_center-center_82_none/AdobeStock_274966107_Nature_based_Solutions.jpeg?mtime=1574933958' },
    { key: '1654', url: 'https://mymodernmet.com/wp/wp-content/uploads/2021/04/Nature-Sounds-For-Well-Being-03.jpg' },
  ];

  const info = {
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum temporibus repellat fugiat! Perspiciatis placeat nemo repellat ad laudantium rerum corrupti.",
    user: "Gigiovanni",
    date: "15/04/2022",
    ...cardInfo,
  }

  return (
    <View style={[styles.container, styles.safeArea]}>
      <Carousel images={images} />
      <Text style={styles.title}>{info.title}</Text>
      <Text style={styles.description}>{info.description}</Text>
      <Text style={styles.metadata}>{info.user} - {info.date}</Text>
      <Separator />
      <Text>{JSON.stringify(cardInfo, null, 4)}</Text>
    </View>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    ...safeArea,
    container: {},
    title: {
      marginTop: 12,
      fontSize: 22,
      textAlign: "center",
      textTransform: 'uppercase',
    },
    description: {
      marginTop: 6,
      fontSize: 14,
      textAlign: "center",
    },
    metadata: {
      marginTop: 8,
      fontSize: 14,
      opacity: .75,
      textAlign: "center",
      fontStyle: 'italic',
    },
  });
};