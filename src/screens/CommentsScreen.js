import {  ScrollView, StyleSheet, View, Text, Image, Dimensions, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from "react-native";
import { Header,  SvgButton, CommentInput } from "../components";
import {useState, useEffect} from 'react'
import defaultAvatar from '../assets/images/avatar.jpg'
import PostImage from '../assets/images/second-post.jpg'
import ArrowSvg from "../assets/images/arrow.svg";


const CommentsScreen = () => {

    const [isShownKeyboard, setIsShownKeyboard] = useState(null)
    const [hasShowedKeyboard, setHasShowedKeyboard] = useState(false)
    
    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            if (!hasShowedKeyboard) setHasShowedKeyboard(true)
            setIsShownKeyboard(Keyboard._currentlyShowing.endCoordinates.height);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setIsShownKeyboard(null);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
 const back = () => alert('back')
    return (
        
        <View style={styles.container}>
           
            <Header title="Коментарі">
                <SvgButton styleButton={styles.buttonSvg} onPress={back} svgWidth='24' svgHeight='24' svgFile={ArrowSvg} />
            </Header> 
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <View style={isShownKeyboard ? { ...styles.contentContainer, marginTop: -1 * isShownKeyboard} : styles.contentContainer}>
                <Image style={styles.postImage} source={PostImage} resizeMode="cover" />
                {/* <ScrollView>

                </ScrollView> */}
                <CommentInput hasShowedKeyboard={hasShowedKeyboard}/>
                    </View>    
            </KeyboardAvoidingView>            
            </TouchableWithoutFeedback>    
        </View>
    )
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
         alignItems: 'flex-end',
        paddingTop: 43,
    },
    contentContainer: {
        flex: 1,
        paddingTop: 32,
        paddingHorizontal: 16,
        width: windowWidth,
    },
     buttonSvg: {
        maxWidth: 40,
        height: 40,
        position: 'absolute',
        bottom: 0,
       left: 10,
    },
      postImage: {
        height: 240,
        maxWidth: windowWidth - 32,
         borderRadius: 8,
        overflow: 'hidden',
    },
      
})

export default CommentsScreen