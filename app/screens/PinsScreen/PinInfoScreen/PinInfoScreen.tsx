// REACT
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FontDisplay } from 'expo-font';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../constants/Colors";
import { t_RootStackParamList } from '../../../navigation/typeNavigation';
import { prettifyDistance, prettifyUnits } from '../../../utilities/PrettifyData';
import { safeArea } from '../../../utilities/StylesPattern';
import IconInfoBox from '../components/PinCard/components/IconInfoBox';
import RatingsBox from '../components/PinCard/components/RatingsBox';
import TagsList from '../components/PinCard/components/TagBox';
import { t_Comment } from '../typePinsScreen';
import AddComment from './components/AddComment';
import Carousel from './components/Carousel';
import Comment from './components/Comment';
import Separator from './components/Separator';


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

  const commentInfos: t_Comment[] = [
    {
      user: "Alberto Angela",
      date: '02/05/2022',
      icon: 'https://www.ilmessaggero.it/photos/MED/68/20/6616820_08150456_alberto.jpg',
      comment: `Io e cinque garçons
Un Casio, tre moto e un casco integrale
Oh, maman, maman, ho sentito che ti stavi preoccupando
Tranquilla, maman, son con lei che sta shakerando
Shakerando, ah, shakerando
Poto stase non c'è sta shakerando
Shakerando, ah, shakerando (shakerando)
Shakerando (shakerando)
Non parlo, lei mi ha tolto les paroles (Shh)
Fuori ho tre amici in meno e non ci sto pensando
Tanto li avrei persi tutti nel giro di un anno
(Tanto li avrei persi tutti nel giro di un anno, maman, oh, maman)
Non parlo più con maman
Dovrei dirle tante di quelle cose che ho fatto
Quelle notti lunghe le passavo sotto là, bro
Nel frattempo non aspettavo nessuno a vuoto
Ora se mi muovo ce ne sono sotto quattro
E una mi, mi parla come se fosse di un altro
Io mi sveglio un giorno bene, uno incazzato
Dormo assieme agli angeli e mi sveglio con un altro`,
      upvotes: 105,
      downvotes: 1,
      ratings: 4,
    },
    {
      user: "Alberto Angela",
      date: '02/05/2022',
      icon: 'https://www.ilmessaggero.it/photos/MED/68/20/6616820_08150456_alberto.jpg',
      comment: `Io e cinque garçons
Un Casio, tre moto e un casco integrale
Oh, maman, maman, ho sentito che ti stavi preoccupando
Tranquilla, maman, son con lei che sta shakerando
Shakerando, ah, shakerando
Poto stase non c'è sta shakerando
Shakerando, ah, shakerando (shakerando)
Shakerando (shakerando)
Non parlo, lei mi ha tolto les paroles (Shh)
Fuori ho tre amici in meno e non ci sto pensando
Tanto li avrei persi tutti nel giro di un anno
(Tanto li avrei persi tutti nel giro di un anno, maman, oh, maman)
Non parlo più con maman
Dovrei dirle tante di quelle cose che ho fatto
Quelle notti lunghe le passavo sotto là, bro
Nel frattempo non aspettavo nessuno a vuoto
Ora se mi muovo ce ne sono sotto quattro
E una mi, mi parla come se fosse di un altro
Io mi sveglio un giorno bene, uno incazzato
Dormo assieme agli angeli e mi sveglio con un altro`,
      upvotes: 105,
      downvotes: 1,
      ratings: 4,
    },
  ];

  const info = {
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum temporibus repellat fugiat! Perspiciatis placeat nemo repellat ad laudantium rerum corrupti.",
    user: "Gigiovanni",
    date: "15/04/2022",
    ...cardInfo,
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Carousel images={images} />
      <Text style={styles.title}>{info.title}</Text>
      <Text style={styles.description}>{info.description}</Text>
      <Text style={styles.metadata}>{info.user} - {info.date}</Text>
      <Separator style={styles.separator}>Info</Separator>
      <View style={styles.coordsBox}>
        <IconInfoBox icon={<FontAwesome5 name="ruler" size={24} />} value={prettifyDistance(info.distance)} />
        <IconInfoBox icon={<Ionicons name="people" size={31} />} value={prettifyUnits(info.visits, 'ppl')} />
        <IconInfoBox icon={<FontAwesome5 name="coins" size={24} />} value={prettifyUnits(info.value, '$')} />
      </View>
      <TagsList tags={info.tags} style={styles.tagsList} />
      <RatingsBox value={info.ratings} starSize={45} style={styles.ratingsBox} />
      <Separator style={styles.separator}>Comments</Separator>
      <View style={styles.commentsBox}>
        <AddComment />
        {commentInfos.map((e, i) => <Comment commentInfo={e} style={styles.comment} key={'comment' + i} />)}
      </View>
    </ScrollView>
  );
}

// JSON.stringify(cardInfo, null, 4)

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    ...safeArea,
    container: {},
    title: {
      marginTop: 16,
      fontSize: 26,
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    description: {
      marginTop: 8,
      fontSize: 18,
      opacity: .8,
      fontWeight: '300',
      paddingHorizontal: 12,
      textAlign: 'center',
    },
    metadata: {
      marginTop: 16,
      fontSize: 16,
      opacity: .6,
      textAlign: 'center',
      fontStyle: 'italic',
    },
    separator: {
      marginTop: 20,
    },
    coordsBox: {
      marginTop: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    tagsList: {
      marginTop: 16,
    },
    ratingsBox: {
      marginTop: 12,
    },
    commentsBox: {
      paddingHorizontal: '4%'
    },
    comment: {
      marginBottom: 20,
    }
  });
};