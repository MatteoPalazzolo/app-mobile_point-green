// IMPORT
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// CUSTOM
import { palette, ThemeContext, t_ColorTheme } from "../constants/Colors";
import { screens } from "./screens";
import { t_RootStackParamList } from "./typeNavigation";
import NavRadialMenu from "./components/NavRadialMenu";


const stack = createNativeStackNavigator<t_RootStackParamList>();

interface i_Navigation { }
export default function Navigation({ }: i_Navigation): JSX.Element {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);
  const navContainerRef = useNavigationContainerRef<t_RootStackParamList>();

  return (
    <>
      <NavigationContainer ref={navContainerRef}>
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
      <NavRadialMenu navContainerRef={navContainerRef} />
    </>
  );
}

const screenOptions = {
  headerShown: false,
}

const getStyle = (colorTheme: t_ColorTheme) => (
  StyleSheet.create({
  })
);