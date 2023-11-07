import {  StyleSheet, View, Text } from "react-native";
import { Avatar,  PostsList } from "../components";
import defaultAvatar from '../assets/images/avatar.jpg'
import postsData from "../assets/data/posts.json"

const PostsScreen = () => {
    
    return (
        <View style={styles.container}>
              <View style={styles.postsContainer}>
                <View style={styles.userContainer}>
                    <Avatar avatarImage={defaultAvatar}  />
                    <View style={styles.userTextContainer}>
                        <Text style={styles.userText}>Natali Romanova</Text>
                        <Text style={styles.emailText}>test@mail.com</Text>
                    </View>
                   
                </View>    
                 {postsData.length>0 && <PostsList posts={postsData}/>}
            </View>

       </View>     
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    postsContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 32,
    },
    userContainer: {
        flexShrink: 1,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8,
        marginBottom: 32,
    },
    userTextContainer: {
        flex: 1,
        flexDirection: 'column',
        maxHeight: 60,
    },
    userText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 13,
        color: '#212121',
    },
    emailText: {
         fontFamily: 'Roboto-Regular',
        fontSize: 11,
        color: 'rgba(33, 33, 33, 0.80)',
    },
     buttonSvg: {
        maxWidth: 40,
        height: 40,
        position: 'absolute',
        bottom: 0,
        right: 10,
    },
      buttonAdd: {
        maxWidth: 70,
        height: 40,
        borderRadius: 40,
        backgroundColor: '#FF6C00',
    },
    buttonSvgFooter: {
        maxWidth: 40,
        height: 40,
        
    }
})

export default PostsScreen;