
import { StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RegistrationScreen, LoginScreen, Home, CommentsScreen, MapScreen } from './src/screens'
import { GoBack } from './src/components';



const MainStack = createStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Inter-Medium': require('./src/assets/fonts/Inter-Medium.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }
  
  
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={RegistrationScreen} options={{headerShown: false }}/>
        <MainStack.Screen name="Login" component={LoginScreen} options={{headerShown: false }}/>
        <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <MainStack.Screen name="Comments" component={CommentsScreen} options={{ 
          title: "Коментарі",
                    headerLeft: () => (<GoBack/>),
                     headerStyle: styles.header,
                     headerTitleStyle: styles.textHeader,
         }} />
        <MainStack.Screen name="Map" component={MapScreen} options={{ 
          title: "Карта",
          headerLeft: () => (<GoBack/>),
          headerStyle: styles.header,
          headerTitleStyle: styles.textHeader,
          
         }} />
      </MainStack.Navigator>
    </NavigationContainer>
 
  );
}
const windowWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    header: {
         borderBottomWidth: 1,
        borderColor: "lightgray",
         shadowColor: 'rgba(0, 0, 0, 0.30)',
       },
  textHeader: {
        paddingTop: 12,
        width: windowWidth - 32 ,
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        textAlign: 'center',
        lineHeight: 22,
    color: '#212121',
        // borderWidth: 1,
  },
});
