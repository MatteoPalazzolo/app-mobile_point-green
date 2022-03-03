// IMPORT
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from '@expo/vector-icons';

// CUSTOM
import { ThemeContext } from "../../App";
import { palette, t_ColorTheme } from "../constants/Colors";
import { t_Screen } from "./Screens";

const Stack = createNativeStackNavigator();

interface i_Navigation { screens: t_Screen[] }
export default function Navigation({ screens }: i_Navigation): JSX.Element {

  const colorTheme: t_ColorTheme = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}>
        {screens.map((s, i) =>
          (<Stack.Screen name={s.label} component={s.child.type} initialParams={s.child.props} key={i} />)
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  headerShown: false,
}

const styles = StyleSheet.create({
});