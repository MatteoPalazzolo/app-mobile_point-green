// REACT
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback as TouchWF, StyleProp, ViewStyle, Dimensions } from 'react-native';
// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../../../constants/Colors";
import { t_Tabs } from '../typePinsScreen';



interface i_TabBarItem {
  label: string,
  tab: { index: number, label: t_Tabs },
  setTab: (index: number) => void,
}
function TabBarItem({ label, tab, setTab }: i_TabBarItem) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  return (
    <TouchWF onPress={e => setTab(tab.index)}>
      <Text style={[styles.text, { color: tab.label === label ? plt.complementary : plt.dark }]}>{label}</Text>
    </TouchWF>
  );
}



interface i_PinTabs {
  tabs: t_Tabs[],
  tab: { index: number, label: t_Tabs },
  setTab: (index: number) => void,
  style?: StyleProp<ViewStyle>,
}
export default function PinTabs({ tabs, tab, setTab, style }: i_PinTabs) {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);
  const plt = palette[colorTheme];

  return (
    <View style={[styles.container, style]}>
      {tabs.map((e, i) => <TabBarItem label={e} tab={tab} setTab={setTab} key={'TabBarItem' + i} />)}
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
      marginHorizontal: 8,
      fontWeight: '300',
      fontSize: 26,
      textAlign: 'center',
      textTransform: 'capitalize',
    },
  });
};