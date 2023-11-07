import { StyleSheet, TextInput, View, Dimensions } from "react-native";
import { useState } from "react";
import SvgButton from "./SvgButton";
import SendSvg from "../assets/images/send.svg";
import inputProps from "../assets/data/input.json"
import PropTypes from "prop-types";


const CommentInput = ({hasShowedKeyboard}) => {
    const [isFocused, setIsFocused] = useState(false)
    const [inputValue, setInputValue]= useState('')
    const { placeholder, pattern, type, minlength = '0', keyboardType = 'default' } = inputProps['comment'];
    const toggleFocus = focusStatus => {
       if (isFocused !== focusStatus) setIsFocused(focusStatus)    
    }
    
    const reset = ()=> setInputValue('')

    const onSubmit = () => {
        if (!inputValue) return alert('Fill the comment')
        console.log({ comment: inputValue })
        reset()
    }

     return (
        <View style={hasShowedKeyboard ?  styles.inputBox : {...styles.inputBox, bottom: 43}}>
         
        <TextInput
            style={[styles.input, isFocused && styles.inputFocused]}
            onChangeText={setInputValue}
            onFocus={() => { toggleFocus(true) }}
            onBlur={() => {toggleFocus(false)}}
            value = {inputValue}
            placeholder={placeholder}
            placeholderTextColor = '#BDBDBD'
            pattern={pattern}
            textContentType={type}
            minlength={minlength}
            maxlength='300'
            keyboardType={keyboardType}
            multiline={true}
            required />
         
            <SvgButton styleButton={styles.buttonSvg} onPress={onSubmit} svgWidth='34' svgHeight='34' svgFile={SendSvg} />  
           
        </View>
      )


}

const windowWidth = Dimensions.get('window').width;

 const styles = StyleSheet.create({
    inputBox: {
         position: 'absolute',
        
         width: windowWidth - 32, 
       bottom: 0,
    left: 16,
    },
    input: {
        padding: 16,
        maxHeight: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor:  '#E8E8E8', 
        backgroundColor:'#F6F6F6',
        fontFamily: 'Inter-Medium',
        fontSize: 16,
    },
    inputFocused: {
        borderColor:  '#FF6C00',
        backgroundColor: '#fff', 
     },
     buttonSvg: {
        width: 34,
        height: 34,
        position: 'absolute',
        bottom: 8,
        right: 8,
        borderRadius: 34,
        backgroundColor: '#FF6C00',
    }
})   

export default CommentInput


CommentInput.propTypes = {
   hasShowedKeyboard: PropTypes.bool.isRequired
}