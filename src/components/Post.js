import {StyleSheet, View, Image, Text, Dimensions } from "react-native"
import SvgButton from "./SvgButton";
import Likes from "./Likes";
import CommentSvg from "../assets/images/message-circle.svg";
import CommentSvgFill from "../assets/images/message-circle-fill.svg";
import exampPost from "../assets/images/post.jpg"
import MapPinSvg from "../assets/images/map-pin.svg";
import PropTypes from "prop-types";

const Post = ({ dataPost, visibleLikes = false, visibleRegion = true }) => {
    const { postId, image, postName, postLocation, postComents, postLikes } = dataPost
   
    const getURI = (file) => {
        const imageUri = Image.resolveAssetSource(file).uri
        const fullPath = imageUri.slice(0, imageUri.indexOf("?"))
        const path = fullPath.slice(0, fullPath.lastIndexOf("/") + 1)
        const fullFileName = fullPath.slice(fullPath.lastIndexOf("/") + 1, fullPath.length)
        const indexDpi = fullFileName.indexOf("@")
        const dpi = indexDpi > 0 ? fullFileName.slice(indexDpi, indexDpi + 3) : ''
        return {
            path,
            dpi
        }
    }
    
    const imageToUri = (image) => {
        const { path, dpi } = getURI(exampPost)
        const newFileName = dpi ? `${image.slice(0, image.indexOf("."))}${dpi}.jpg` : image;
        return `${path}${newFileName}`
    }
   
    const imageUri = imageToUri(image)
   
    const addComment = () => alert('addComment');    
    return (
        <View style={styles.postContainer}>
            <Image style={styles.postImage} source={{uri: imageUri}} resizeMode="cover" />
            <Text style={styles.postName}>{postName}</Text>
            <View style={styles.bottomContainer}>
                <View style={visibleLikes ? { ...styles.CLContainer, maxWidth: 128 }: styles.CLContainer}>
                    <View style={styles.addComment}>
                        <SvgButton styleButton={styles.buttonSvg} onPress={addComment} svgWidth='24' svgHeight='24' svgFile={postComents.length > 0 ? CommentSvgFill : CommentSvg} />
                        <Text style={postComents.length > 0 ? styles.counter : { ...styles.counter, color: '#bdbdbd' }}>{postComents.length}</Text>
                    </View>    
                    {visibleLikes && <Likes likesCount={Number(postLikes)}/>}
                </View>
                <View style={styles.locationContainer}>
                    <SvgButton styleButton={styles.buttonMap} onPress={addComment} svgWidth='24' svgHeight='24' svgFile={MapPinSvg}/>
                    <Text style={styles.locationText}>{visibleRegion  ? `${postLocation.region} Region, ${postLocation.country}` : postLocation.country}</Text>
                </View>    
            </View>
        </View>
    )
    
}

export default Post



const styles = StyleSheet.create({
    postContainer: {
        flex: 1,
        flexDirection: 'column',
        rowGap: 8,
        width: '100%',
         paddingBottom: 32,
    },
    postImage: {
        height: 240,
        maxWidth: 343,
        width: '100%',
         borderRadius: 8,
        overflow: 'hidden',
        
    },
    postName: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        color: '#212121',
      
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 24,
        alignItems: 'center',
        width: '100%'
    },
    CLContainer: {
        flex: 1,
        flexDirection: 'row',
        columnGap: 8,
        maxWidth: 60,
    
    },
    addComment: {
         flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: 4,
        maxWidth: 60,
    },
    buttonSvg: {
        width: 24,
        maxWidth: 24,
        height: 24,
        maxHeight: 24,
    },
    counter: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#212121',
      
    },
    locationContainer: {
          flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
    buttonMap: {
         maxWidth: 24,
        width: 24,
        maxHeight: 24,
        height: 24,
    },
    locationText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#212121',
    }

    
})


Post.propTypes = {
   dataPost: PropTypes.object.isRequired ,
    visibleLikes: PropTypes.bool,
    visibleRegion: PropTypes.bool
}