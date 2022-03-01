// expo install react-native-maps

// IMPORT
import React, { FC, useContext, useState } from 'react';
import MapView, { Marker, MapTypes, PROVIDER_GOOGLE } from 'react-native-maps';
import { View, Switch, StyleSheet, Text } from 'react-native';
// COMPONENTS
import CoinCounter from '../components/CoinCounter';
import NavRadialMenu from '../components/NavRadialMenu';
// CUSTOM
import { palette, t_ColorTheme } from "../constants/Colors";
import { ThemeContext } from '../../App';
import { darkMode, lightMode } from '../constants/MapStyles';

type t_region = { latitude: number, longitude: number, latitudeDelta: number, longitudeDelta: number, };
const region: t_region = {
  latitude: 45.0691,
  longitude: 7.6841,
  latitudeDelta: 1,
  longitudeDelta: 1,
};

type t_marker = { title: string, description: string, coordinate: { latitude: number, longitude: number } }[];
const markers: t_marker = [
  { title: "New Spot 1", description: "new for real", coordinate: { latitude: 45.24337, longitude: 10.27919 } },
  { title: "New Spot 2", description: "new for real", coordinate: { latitude: 45.24337, longitude: 11.27919 } },
];

interface i_MapScreen { }
export default function MapScreen({ }: i_MapScreen) {

  // MAP TYPE
  const [mapType, setMapType] = useState<MapTypes>("standard");
  function switchMap() {
    setMapType(previousState => previousState == "standard" ? "satellite" : "standard")
  }

  // COLOR THEME
  var colorTheme: t_ColorTheme = useContext(ThemeContext);
  const styles = getStyle(colorTheme);


  return (<>
    <View style={styles.container}>

      <CoinCounter style={styles.coinCounter} />

      <MapView
        style={styles.map}
        region={region}
        mapType={mapType}
        /*userInterfaceStyle={colorTheme}*/
        customMapStyle={colorTheme === "light" ? lightMode : darkMode}
        provider={PROVIDER_GOOGLE}>

        {markers.map((m, i) => (<Marker title={m.title} description={m.description} coordinate={m.coordinate} key={i} />))}

      </MapView>

      <View style={styles.hotBar}>
        <Text style={styles.textColor}>Map Type</Text>
        <Switch
          trackColor={{ true: palette[colorTheme].text, false: palette[colorTheme].text }}
          thumbColor={palette[colorTheme].light}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switchMap}
          value={mapType == "satellite"}
        />
      </View>

    </View>
    <NavRadialMenu radius={120} navButtons={[]} />
  </>
  );
}

const getStyle = (colorTheme: t_ColorTheme) => (
  StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      flex: 1,
    },
    hotBar: {
      alignItems: "center",
      position: "absolute",
      top: 25,
      left: 10,
      zIndex: 1,
      padding: 10,
      paddingBottom: 0,
      backgroundColor: palette[colorTheme].accent,
      borderRadius: 10,
    },
    textColor: {
      color: palette[colorTheme].text,
    },
    coinCounter: {
      position: "absolute",
      top: 45,
      right: 20,
      zIndex: 1
    },
  }
  ));
