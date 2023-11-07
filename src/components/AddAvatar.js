import { StyleSheet, View } from 'react-native';
import Avatar from './Avatar';
import SvgPlusButton from './SvgPlusButton';
import defaultAvatar from '../assets/images/avatar.jpg'
import PropTypes from "prop-types";

const AddAvatar = ({ avatarImage, handleChange }) => {
    
    const addAvatar = () => handleChange("avatar", defaultAvatar)
  
    const removeAvatar = () => handleChange("avatar", null)


    return (
         <View style={styles.box}>
           {avatarImage ? <Avatar avatarImage={avatarImage} size={120} /> : <Avatar size={120} />}
           {avatarImage ? <SvgPlusButton onPress={removeAvatar} styleButton={{ ...styles.buttonAdd, ...styles.buttonRemove }} stroke='#e8e8e8' rotate='45'/> : <SvgPlusButton onPress={addAvatar} styleButton={styles.buttonAdd} stroke='#ff6c00'/>}
        </View>
    )
}


const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{translateX: -50}],
  },
  buttonAdd: {
    position: 'absolute',
    right: -12.5,
    bottom: 12.5,
    width: 25,
    height: 25,
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ff6c00',
  },
  buttonRemove: {
     borderColor: '#e8e8e8',
  }, 
   
});

export default AddAvatar


AddAvatar.propTypes = {
   avatarImage: PropTypes.number,
   handleChange: PropTypes.func.isRequired
}