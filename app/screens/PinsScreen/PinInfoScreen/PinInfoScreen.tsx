// REACT
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Button from '../../../components/Button';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../constants/Colors";
import { t_RootStackParamList } from '../../../navigation/typeNavigation';
import { prettifyDistance, prettifyUnits } from '../../../utilities/PrettifyData';
import IconInfoBox from '../components/PinCard/components/IconInfoBox';
import RatingsBox from '../components/PinCard/components/RatingsBox';
import TagsList from '../components/PinCard/components/TagBox';
import CommentModal from './components/CommentModal';
import Carousel from './components/Carousel';
import Comment from './components/Comment';
import Separator from './components/Separator';
import IconBar from './components/IconBar';
import { average } from '../../../utilities/Math';


type t_PinInfoScreen = NativeStackScreenProps<t_RootStackParamList, 'PinInfo'>;
export default function PinInfoScreen({ route, navigation }: t_PinInfoScreen) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const params = route.params;
  const info = params.cardInfo;

  const [visible, setVisible] = useState(false);

  return (<>
    <CommentModal visible={visible} setVisible={setVisible} commentsList={info.commentsData} />
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <IconBar />
      <Carousel images={info.imagesData} />
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
      <RatingsBox value={Math.round(average(info.commentsData.map(i => i.rating)))} starSize={45} style={styles.ratingsBox} />
      <Separator style={styles.separator}>Comments</Separator>
      <Button text='ADD COMMENT' fontSize={18} onPress={() => setVisible(true)} style={styles.addComment} />
      <View style={styles.commentsBox}>
        {info.commentsData.map((e, i) => <Comment commentInfo={e} style={styles.comment} key={'comment' + i} />)}
      </View>
    </ScrollView>
  </>
  );
}

// JSON.stringify(cardInfo, null, 4)

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
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
      marginLeft: '4%',
      marginRight: '8%',
      marginBottom: 50,
    },
    addComment: {
      width: '90%',
      alignSelf: 'center',
      marginVertical: 20,
    },
    comment: {
      marginBottom: 20,
    },

  });
};