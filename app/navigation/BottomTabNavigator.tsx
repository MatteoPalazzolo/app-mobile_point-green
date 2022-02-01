// npm install @react-navigation/bottom-tabs
// npm install react-native-ionicons@^4.x

// IMPORT
import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import { palette, t_ColorTheme } from "../constants/Colors";

export default function BottomTabNavigator({ children, tab, colorTheme }: { children: JSX.Element[], tab: any, colorTheme: t_ColorTheme }): JSX.Element {

  const icon: t_a = ({ route }: { route: { name: string } }) => {
    const updateIcon: t_b = ({ focused, color, size }) => {
      const iconData = screensIcons[route.name];
      const iconName: any = focused ? iconData.focus : iconData.idle;
      const iconSize: number = iconData.size;
      return <Ionicons name={iconName} color={color} size={size * iconSize} />
    }
    return {
      tabBarIcon: updateIcon,
      ...screenOptions
    };
  }

  const screenOptions: any = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarActiveTintColor: palette[colorTheme].dominant,
    tabBarInactiveTintColor: palette[colorTheme].dominant,
    tabBarLabelStyle: {
      paddingBottom: 4,
      fontSize: 12,
    },
    tabBarStyle: [
      {
        height: 65,
        elevation: 3,
        backgroundColor: palette[colorTheme].light,
        /*
        position: "absolute",
        bottom: 20,
        right: 50,
        left: 50,
        borderRadius: 15,*/
      },
      null
    ]
  };

  return (
    <NavigationContainer>
      <tab.Navigator
        initialRouteName={"Home"}
        screenOptions={icon}>
        {children}
      </tab.Navigator>
    </NavigationContainer>
  );
}

type t_screenIcon = { [screenName: string]: { idle: any, focus: any, size: number } };

const screensIcons: t_screenIcon = {
  "Home": { idle: "home-outline", focus: "home", size: 1.15 },
  "TestOne": { idle: "add-circle-outline", focus: "add-circle", size: 1.4 },
  "TestTwo": { idle: "cart-outline", focus: "cart", size: 1.15 }
};

type t_a = (dict: { route: any }) => {};
type t_b = (dict: { focused: any, color: any, size: any }) => JSX.Element;
