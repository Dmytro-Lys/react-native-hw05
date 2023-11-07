import {StyleSheet, ImageBackground, View , Text} from "react-native"
import CameraBlackSvg from "../assets/images/camera_black.svg";
import CameraWhiteSvg from "../assets/images/camera_white.svg";
import defaultPost from '../assets/images/post.jpg'
import SvgButton from "./SvgButton";
import PropTypes from "prop-types";

const PostContent = ({ contentImage , handleChange }) => {
  
  const addPost = () => handleChange("postImage", { value: defaultPost, validation: true })
  
  const removePost = () =>  handleChange("postImage", { value: null, validation: false })

   
  
  return (
      <View style={styles.contentContainer }>
      <ImageBackground source={contentImage.value} resizeMode="cover" style={contentImage.validation ? styles.contentImage :{...styles.contentImage, ...styles.contentImageInvalid} } >
        {contentImage.value 
          ? <SvgButton styleButton={{ ...styles.buttonAdd, ...styles.buttonRemove }} onPress={removePost} svgWidth='24' svgHeight='24' svgFile={CameraWhiteSvg} /> 
          : <SvgButton styleButton={styles.buttonAdd} onPress={addPost} svgWidth='24' svgHeight='24' svgFile={CameraBlackSvg}  />
        }            
        </ImageBackground>
        <Text style={styles.contentText }>{contentImage.value ? "Редагувати фото" : "Завантажте фото"}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
  contentContainer: {
   
   },
   contentImage: {
      
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      maxHeight: 240,
      marginBottom: 8,
      height: 240,
      backgroundColor: '#e8e8e8',
     overflow: 'hidden',
    },
   contentImageInvalid: {
     borderWidth: 1,
     borderColor: 'red',
   },
   buttonAdd: {
        width: 60,
        maxHeight: 60,
        borderRadius: 60,
        backgroundColor: '#FFF',
   },
   buttonRemove: {
        backgroundColor: 'rgba(255, 255, 255, 0.30)',
   },
   contentText: {
     fontFamily: 'Roboto-Regular',
     fontSize: 16,
     color: "#BDBDBD",
     
   }
 
});

export default PostContent


PostContent.propTypes = {
   contentImage: PropTypes.object.isRequired ,
    handleChange: PropTypes.func.isRequired
}