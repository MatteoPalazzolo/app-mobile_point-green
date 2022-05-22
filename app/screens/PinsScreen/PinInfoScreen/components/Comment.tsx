// REACT
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useCallback, useContext, useReducer, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../../constants/Colors";
import RatingsBox from '../../components/PinCard/components/RatingsBox';
import { t_Comment } from '../../typePinsScreen';
import Line from './Line';

const ICON_SIZE = 20;

interface i_Comment { commentInfo: t_Comment, style?: {} }
export default function Comment({ commentInfo: data, style }: i_Comment) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];


  const votesReducer = useCallback(
    ({ up, down }: { up: boolean, down: boolean }, { toUp }: { toUp: boolean }) => {

      if (toUp) {
        up = !up;
        down = false;
      }
      else {
        down = !down;
        up = false;
      }

      return { up, down };
    }, []);


  const [vState, votesDispatch] = useReducer(votesReducer, { up: false, down: false }, undefined);
  const [collapse, setCollapse] = useState(true);

  return (
    <View style={style}>
      <View style={styles.header}>
        <Image style={styles.icon} source={{ uri: data.icon }} />
        <View style={styles.textBox} >
          <Text style={styles.user} >{data.user}</Text>
          <Text style={styles.date} >{data.date}</Text>
        </View>
      </View>
      <Line style={styles.line} />
      <Pressable onPressIn={() => setCollapse(p => !p)}><Text style={styles.comment} numberOfLines={collapse ? 5 : undefined}>{data.comment}</Text></Pressable>
      <View style={styles.footer}>
        <View style={styles.votes}>
          <TouchableOpacity style={styles.votesBtn} onPress={() => votesDispatch({ toUp: true })}>
            <MaterialCommunityIcons name={vState.up ? "thumb-up" : "thumb-up-outline"} size={ICON_SIZE} color="black" />
            <Text style={styles.votesText}>{data.upvotes + (vState.up ? 1 : 0)}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.votesBtn} onPress={() => votesDispatch({ toUp: false })}>
            <MaterialCommunityIcons name={vState.down ? "thumb-down" : "thumb-down-outline"} size={ICON_SIZE} color="black" />
            <Text style={styles.votesText}>{data.downvotes + (vState.down ? 1 : 0)}</Text>
          </TouchableOpacity>
        </View>
        <RatingsBox value={data.rating} starSize={26} style={styles.ratings} />
      </View>
    </View>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    header: {
      display: 'flex',
      flexDirection: 'row',
    },
    textBox: {
      marginTop: 10,
      marginLeft: 16,
      marginBottom: 5,
    },
    user: {
      fontSize: 20,
      textTransform: 'capitalize',
    },
    date: {
      fontSize: 14,
      fontStyle: 'italic',
      opacity: .8,
    },
    icon: {
      width: 60, height: 60,
      margin: 5,
      marginRight: 0,
      borderRadius: 5,
    },
    line: {
      width: '96%',
    },
    comment: {
      marginTop: 5,
      marginHorizontal: '4%',
    },
    footer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 5,
      marginHorizontal: '2%',
    },
    ratings: {
      width: 120,
      paddingHorizontal: 0, //OVERRIDE
      marginRight: 10,
    },
    votes: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    },
    votesBtn: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      marginLeft: 10,
    },
    votesText: {
      marginLeft: 5,
    }
  });
}