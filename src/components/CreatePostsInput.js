import {StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

import inputProps from "../assets/data/input.json"
import ErrorMessage from "./ErrorMessage";
import PropTypes from "prop-types";


const CreatePostsInput = ({ inputName, handleChange, inputValue, children }) => {
    const [isFocused, setIsFocused] = useState(false)
    const { placeholder, pattern, type, minlength = '0', keyboardType = 'default' } = inputProps[inputName];
    const inputInvalid = 'red'
    const toggleFocus = focusStatus => {
       if (isFocused !== focusStatus) setIsFocused(focusStatus)    
    }
    
    const inputValidate = value => value.match(pattern) !== null && value.length >= minlength
    
    const handleChangeInput = newValue => handleChange(inputName, { value: newValue, validation: inputValidate(newValue)})

    const styles = StyleSheet.create({
    inputBox: {
      position: 'relative',    
    },
    input: {
        paddingVertical: 16,    
        maxHeight: 50,
        height: 50,
        paddingLeft: type === 'location' ? 28 : 0,
        borderBottomWidth: 1,
        borderColor: inputValue.validation ?  '#E8E8E8' : inputInvalid,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        },
    notLocation: {
        fontFamily: 'Roboto-Medium',
    },
    inputFocused: {
        borderColor:  inputValue.validation ?  '#FF6C00' : inputInvalid,
    }
})   

    return (
        <View style={styles.inputBox}>
         
        <TextInput
            style={[styles.input, isFocused && styles.inputFocused, type !== 'location' && inputValue.value  && styles.notLocation]}
            onChangeText={handleChangeInput}
            onFocus={() => { toggleFocus(true) }}
            onBlur={() => {toggleFocus(false)}}
            value = {inputValue.value}
            placeholder={placeholder}
            placeholderTextColor = '#BDBDBD'
            pattern={pattern}
            textContentType={type}
            minlength={minlength}
            maxlength='30'
            keyboardType={keyboardType}
            required />
            {!inputValue.validation && <ErrorMessage message={`Incorrect ${inputName}`} />}
            {children}
        </View>
      )
}



export default CreatePostsInput;

CreatePostsInput.propTypes = {
   inputName: PropTypes.string.isRequired ,
    handleChange: PropTypes.func.isRequired,
    inputValue: PropTypes.object.isRequired
 
}

