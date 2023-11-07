import {  StyleSheet, ScrollView, Dimensions } from "react-native"
import Post from "./Post"
import PropTypes from "prop-types";

const PostsList = ({posts, visibleLikes = false, visibleRegion = true}) => {
    return(
        <ScrollView style={styles.container}>
           { posts.map( (post, index) => {
               return <Post key={index} dataPost={post} visibleLikes={visibleLikes} visibleRegion={visibleRegion} />
           })}
        </ScrollView>
    )
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: windowWidth - 32,
    }
})

export default PostsList


PostsList.propTypes = {
   posts: PropTypes.array.isRequired ,
    visibleLikes: PropTypes.bool,
    visibleRegion: PropTypes.bool
}