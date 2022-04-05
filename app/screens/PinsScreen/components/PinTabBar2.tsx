// REACT
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback as TouchWF } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../constants/Colors";
import { } from "../../../constants/Types";


interface i_TabBarItem {
  label: string,
  currentTab: string,
  setTab: Function,
}
function TabBarItem({ label, setTab, currentTab }: i_TabBarItem) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  return (
    <TouchWF onPress={() => setTab(label)}>
      <Text style={[styles.text, { color: currentTab === label ? plt.complementary : plt.dark }]}>{label}</Text>
    </TouchWF>
  );
}

interface i_PinTabBar {
  tabs: string[],
  currentTab: string,
  setTab: Function,
}
export default function PinTabBar({ tabs, currentTab, setTab }: i_PinTabBar) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  return (
    <View style={styles.container}>
      {/* {tabs.map((e, i) => (
        <TabBarPortion label={e} currentTab={currentTab} setTab={setTab} isLast={i !== tabs.length - 1} key={i} />
      ))} */}
      {tabs.map((e, i) => (
        <>
          <TabBarItem label={e} currentTab={currentTab} setTab={setTab} />
          {i === tabs.length - 1 ? undefined : <View style={styles.separator} />}
        </>
      ))}
    </View>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    container: {
      width: '80%',/* 
      marginTop: 45, */
      marginBottom: 20,

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    text: {
      fontWeight: '300',
      fontSize: 26,
      textAlign: 'center'
    },
    separator: {
      width: 2, height: 26,
      borderRadius: 100,
      backgroundColor: plt.dark,
    },

  });
};