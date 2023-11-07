import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from "react-native"
// import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
// import * as Location from "expo-location";


const MapScreen = () => {
  const { params: { latitude, longitude } } = useRoute();
  // const [location, setLocation] = useState(null);
  const location = {
    latitude: Number.parseFloat(latitude),
    longitude: Number.parseFloat(longitude)
 }
  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestBackgroundPermissionsAsync();
  //     if (status !== "granted") {
  //       console.log("Permission to access location was denied");
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     const coords = {
  //       latitude: location.coords.latitude,
  //       longitude: location.coords.longitude,
  //     };
  //     setLocation(coords);
  //     // console.log(location.coords)
  //   })();
  // }, []);

    return (
        <View style={styles.container}>
             <MapView
        style={styles.mapStyle}
       region={{
         ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // showsUserLocation={true}
          // mapType="standard"
          mapType='standard'
          provider={PROVIDER_GOOGLE}
        minZoomLevel={10}
        // onMapReady={() => console.log("Map is ready")}
        // onRegionChange={() => console.log("Region change")}
      >
          <Marker
          title="Postlocation"
          coordinate={location}
          description='Hello'
        />
      </MapView>
       </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapStyle: {
       width: Dimensions.get("window").width,
       height: Dimensions.get("window").height,
  },
})

export default MapScreen