import { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, View, Text } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useRoute } from '@react-navigation/native';
import CameraBlackSvg from "../assets/images/camera_black.svg";
import CameraWhiteSvg from "../assets/images/camera_white.svg";
import defaultPost from '../assets/images/post.jpg'
import SvgButton from "./SvgButton";
import PropTypes from "prop-types";

const PostContent = ({ contentImage, handleChange }) => {
   const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  
  const isFocused = useIsFocused()
  
  useEffect(() => {
    (async () => {

      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

 
  
  const addPost = async () => {
    try {
      if (cameraRef) {
        const { uri } = await cameraRef.takePictureAsync();
        await MediaLibrary.createAssetAsync(uri);
        if (uri) handleChange("postImage", { value: uri, validation: true })
      }
    } catch (err) {
      console.log(err)
    }
  }
  

   
  
  return (
      <View style={styles.contentContainer }>
      {hasPermission && isFocused ?
       <View style={styles.cameraWrapper}>
        <Camera
          style={styles.camera}
          type={Camera.Constants.Type.back}
          ref={setCameraRef}
        >
          <View style={ styles.buttonWrapper}>
            <SvgButton styleButton={{ ...styles.buttonDisabled, ...styles.buttonEnabled }} onPress={addPost} svgWidth='24' svgHeight='24' svgFile={CameraWhiteSvg} />
          </View>
        </Camera>
      </View>
        : <View style={styles.contentImage}>
          <SvgButton styleButton={styles.buttonDisabled} onPress={addPost} svgWidth='24' svgHeight='24' svgFile={CameraBlackSvg} disabled={true} />
        </View>
      }
        <Text style={styles.contentText }>{contentImage.value ? "Редагувати фото" : "Завантажте фото"}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
   
  },
  cameraWrapper: {
      borderRadius: 8,
       marginBottom: 8,
       backgroundColor: 'transparent',
     overflow: 'hidden',
  },
  camera: {
    // flex: 1,
  },
  
  buttonWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      maxHeight: 240,
       backgroundColor: 'transparent',
        height: 240,
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
   buttonDisabled: {
        width: 60,
        maxHeight: 60,
        borderRadius: 60,
        backgroundColor: '#FFF',
   },
   buttonEnabled: {
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