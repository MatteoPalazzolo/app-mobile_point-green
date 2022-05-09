// REACT
import React, { Dispatch, Fragment, SetStateAction, useContext } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback as TouchWF, StyleProp, ViewStyle } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../constants/Colors";
import { } from "../../../constants/Types";
import { t_Tabs } from '../typePinsScreen';


interface i_TabBarItem {
  label: t_Tabs,
  index: number,
  currentTab: t_Tabs,
  setCurrentTab: Dispatch<SetStateAction<t_Tabs>>,
  switchTab: (index: number) => void,
}
function TabBarItem({ label, index, switchTab, currentTab, setCurrentTab }: i_TabBarItem) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  return (
    <TouchWF onPress={() => [switchTab(index), setCurrentTab(label)]}>
      <Text style={[styles.text, { color: currentTab === label ? plt.complementary : plt.dark }]}>{label}</Text>
    </TouchWF>
  );
}

interface i_PinTabs {
  tabs: t_Tabs[],
  switchTab: (index: number) => void,
  currentTab: t_Tabs,
  setCurrentTab: Dispatch<SetStateAction<t_Tabs>>,
  style?: StyleProp<ViewStyle>,
}
export default function PinTabs({ tabs, switchTab, currentTab, setCurrentTab, style }: i_PinTabs) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  return (
    <View
      style={[styles.container, style]}>
      {tabs.map((e, i) => (
        <Fragment key={25 + i}>
          <TabBarItem label={e} index={i} switchTab={switchTab} currentTab={currentTab} setCurrentTab={setCurrentTab} />
          {i === tabs.length - 1 ? undefined : <View style={styles.separator} />}
        </Fragment>
      ))}
    </View>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => {
  const plt = palette[colorTheme];
  return StyleSheet.create({
    container: {
      width: '88%',

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    text: {
      fontWeight: '300',
      fontSize: 26,
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    separator: {
      width: 2, height: 26,
      borderRadius: 100,
      backgroundColor: plt.dark,
    },

  });
};