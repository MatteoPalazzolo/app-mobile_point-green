// IMPORT
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// CUSTOM
import { ThemeContext } from "../../App";
import { palette, t_ColorTheme } from "../constants/Colors";
import { t_RootStackParamList, screens, t_Screen } from "./screens";


const stack = createNativeStackNavigator<t_RootStackParamList>();

interface i_Navigation { }
export default function Navigation({ }: i_Navigation): JSX.Element {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={screenOptions}>
        {screens.map((s, i) =>
        (<stack.Screen
          name={s.label}
          component={s.screen.type}
          initialParams={s.screen.props}
          options={s.options}
          key={i} />)
        )}
      </stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  headerShown: true,
}

const getStyle = (colorTheme: t_ColorTheme) => (
  StyleSheet.create({
  })
);