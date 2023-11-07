import { StyleSheet, ImageBackground, View, Dimensions } from 'react-native';
import { useState } from 'react';
import bgImage from '../assets/images/photo_bg.jpg'
import { AddAvatar, FormTitle,  LogOut, PostsList } from '../components';
import defaultAvatar from '../assets/images/avatar.jpg'
import postsData from "../assets/data/posts.json"

const ProfileScreen = () => {
  const [avatar, setAvatar] = useState(defaultAvatar)
  const handleChangeAvatar = (_, value) => { setAvatar(value) }
  const userName = 'Natali Romanova'
  return (
    
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.imageBg}>
        <View style={styles.profileContainer}>
        <AddAvatar avatarImage={avatar} handleChange={handleChangeAvatar} />
        <LogOut stylesLogOut={styles.logOut}/>
            <FormTitle text={userName} />
           {postsData.length>0 && <PostsList posts={postsData} visibleLikes={true} visibleRegion = {false} />}   
      </View>       
     </ImageBackground>  
        
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 119,
  },
   profileContainer: {
     flex: 1,
     flexDirection: 'column',
    width: windowWidth, 
    pozition: 'relative',   
    paddingHorizontal: 16,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
     buttonSvgFooter: {
        maxWidth: 40,
        height: 40,
  },
      logOut: {
        top: 22,
        right: 16,
  },
  buttonUserSvg: {
       maxWidth: 70,
        height: 40,
        borderRadius: 40,
        backgroundColor: '#FF6C00',
    }
   
});


export default ProfileScreen