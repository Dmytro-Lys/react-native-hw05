import {StyleSheet, View, Text } from "react-native"
import { SvgXml } from 'react-native-svg';
import LikeSvg from "../assets/images/thumbs-up.svg";
import LikeSvgFill from "../assets/images/thumbs-up-fill.svg";
import PropTypes from "prop-types";

const Likes = ({ likesCount }) => {
    return (
        <View style={styles.container}>
            <SvgXml style={styles.svg} width={24} height={24} fill={'none'} rotation={0} xml={likesCount > 0 ? LikeSvgFill : LikeSvg} />
            <Text style={likesCount > 0 ? styles.counter : { ...styles.counter, color: '#bdbdbd' }}>{likesCount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
          justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: 4,
    },
    
    svg: {
        maxHeight: 24,
        maxWidth: 24,
        
    },
    counter: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#212121',
      
    }
    
})

export default Likes


Likes.propTypes = {
   likesCount: PropTypes.number.isRequired 
}