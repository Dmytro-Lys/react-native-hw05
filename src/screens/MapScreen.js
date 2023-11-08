import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from "react-native"
import { useRoute } from '@react-navigation/native';
//  import {GOOGLE_MAP_API_KEY} from "@env"


const MapScreen = () => {
  // console.log(PROVIDER_GOOGLE)
  const { params: { latitude, longitude } } = useRoute();
  // const [location, setLocation] = useState(null);
  const location = {
    latitude: Number.parseFloat(latitude),
    longitude: Number.parseFloat(longitude)
 }
 
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
          mapType='standard'
          // provider={PROVIDER_GOOGLE}
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