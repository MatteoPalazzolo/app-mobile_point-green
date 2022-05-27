// REACT
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Share } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../../constants/Colors";
import { safeArea } from '../../../../utilities/StylesPattern';


const ICON_SIZE = 32;
const ACTIVE_OPACITY = .5;

interface i_IconBar {
  style?: {},
}
export default function IconBar({ style }: i_IconBar) {

  const colorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme, style);
  const plt = palette[colorTheme];
  const navigation = useNavigation();

  const [like, setLike] = useState(false);

  const onShare = async () => await Share.share({
    message: 'React Native | A framework for building native apps using React',
  });

  return (
    <SafeAreaView style={[safeArea, styles.container]}>
      <TouchableOpacity style={[styles.close, style]} onPress={() => navigation.goBack()}>
        <AntDesign name="close" size={ICON_SIZE * 1.15} color={plt.dominant} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={ACTIVE_OPACITY} style={styles.others} onPress={onShare}>
        <Entypo name="share" size={ICON_SIZE} color={plt.dominant} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.others} onPress={() => setLike(v => !v)}>
        <AntDesign name={like ? "heart" : "hearto"} size={ICON_SIZE} color={plt.dominant} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={ACTIVE_OPACITY} style={styles.others} onPress={() => console.log('map')}>
        <FontAwesome5 name="compass" size={ICON_SIZE * .95} color={plt.dominant} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const getStyle = (colorTheme: t_ColorTheme, style?: {}) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    container: {
      width: '100%',
      position: 'absolute',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      ...style,
    },
    close: {
      position: 'absolute',
      left: 8,
    },
    others: {
      marginVertical: 5,
      marginRight: 12,
    }
  });
}