// REACT
import { AntDesign, Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Touchable, TouchableOpacity, StatusBar, Platform, SafeAreaView, Share } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../../constants/Colors";

const ICON_SIZE = 32;

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
    message:
      'React Native | A framework for building native apps using React',
  });

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.close} onPress={() => navigation.goBack()}>
        <AntDesign name="close" size={ICON_SIZE * 1.15} color={plt.dominant} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.others} onPress={onShare}>
        <Entypo name="share" size={ICON_SIZE} color={plt.dominant} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.others} onPress={() => setLike(v => !v)}>
        <AntDesign name={like ? "heart" : "hearto"} size={ICON_SIZE} color={plt.dominant} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.others} onPress={() => console.log('map')}>
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
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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