import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Dimensions } from "react-native";
import { LogOut, Icons, GoBack } from "../components";
import PostsScreen from "./PostsScreen"
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";




const Tabs = createBottomTabNavigator();


const Home = () => {

   
    return (
        <Tabs.Navigator
             screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Posts") {
            iconName = focused
              ? "grid-white"
              : "grid";
          } else if (route.name === "Profile") {
             iconName = focused
              ? "user-white"
              : "user";
          } else { iconName = 'plus'}
          return <Icons iconName={iconName} isFocused={focused}  />;
                    },
                    tabBarStyle: styles.containerFooter,
      })}
            >
              <Tabs.Screen name="Posts" component={PostsScreen} options={{
                     title: "Публікації",
                     headerStyle: styles.header,
                     headerTitleStyle: styles.textHeader,
                    headerRight: () => (<LogOut stylesLogOut={styles.logOut} />),
                     tabBarShowLabel: false,
                }}/>
                <Tabs.Screen name="CreatePost" component={CreatePostsScreen} options={{
                     title: "Створити публікацію",
                     headerStyle: styles.header,
                    headerTitleStyle: styles.textHeader,
                    headerLeft: () => (<GoBack/>),
                    tabBarShowLabel: false,
                     tabBarStyle: styles.containerFooterHide,
                }} />    
                <Tabs.Screen name="Profile" component={ProfileScreen} options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                }} />
          
         </Tabs.Navigator>
   )
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
        width: windowWidth - 32,
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        textAlign: 'center',
        lineHeight: 22,
        color: '#212121',
  },
    containerFooter: {
         paddingHorizontal: (windowWidth - 210) / 2 ,
  },
  containerFooterHide: {
      display: 'none',
    },
    logOut: {
       bottom: 0,
       right: 10,
    }
})

export default Home