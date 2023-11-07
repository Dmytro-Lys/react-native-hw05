import {StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";
import inputProps from "../assets/data/input.json"
import ShowButton from "./ShowButton";
import ErrorMessage from "./ErrorMessage";
import PropTypes from "prop-types";


const Input = ({ inputName, handleChange, inputValue, handleValidation, inputValidation }) => {
    const [isFocused, setIsFocused] = useState(type === 'password' ? true : false)
    const { placeholder, pattern, type, minlength = '0', keyboardType = 'default' } = inputProps[inputName];
    const [secureTextShow, setSecureTextShow] = useState(type === 'password')
    const inputInvalid = 'red'
    const toggleFocus = focusStatus => {
       if (isFocused !== focusStatus) setIsFocused(focusStatus)    
    }
    
    const toggleSecureTextShow = () => secureTextShow ? setSecureTextShow(false) :  setSecureTextShow(true)
    
    const toggleValidate = (newValue) => {
    if (inputValidation[inputName] !== newValue) handleValidation(inputName, newValue)
  }
    const inputValidate = value => value.match(pattern) !== null && value.length >= minlength
    
    const handleChangeInput = value => {
        handleChange(inputName, value)
        toggleValidate(inputValidate(value))
     }

    const styles = StyleSheet.create({
    inputBox: {
      position: 'relative',    
    },
    input: {
        padding: 16,
        maxHeight: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: inputValidation[inputName] ?  '#E8E8E8' : inputInvalid,
        backgroundColor:'#F6F6F6',
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
    },
    inputFocused: {
        borderColor:  inputValidation[inputName] ?  '#FF6C00' : inputInvalid,
        backgroundColor: '#fff' 
    }
})   

    return (
        <View style={styles.inputBox}>
         
        <TextInput
            style={[styles.input, isFocused && styles.inputFocused]}
            onChangeText={handleChangeInput}
            onFocus={() => { toggleFocus(true) }}
            onBlur={() => {toggleFocus(false)}}
            value = {inputValue[inputName]}
            placeholder={placeholder}
            placeholderTextColor = '#BDBDBD'
            pattern={pattern}
            textContentType={type}
            minlength={minlength}
            maxlength='30'
            secureTextEntry={secureTextShow}
            keyboardType={keyboardType}
            required />
         
            {type === 'password' && <ShowButton titleShow={secureTextShow ? "Показати" : "Сховати"} onPressShow={toggleSecureTextShow} />} 
            {!inputValidation[inputName] && <ErrorMessage message={`Incorrect ${inputName}`}/>}
        </View>
      )
}



export default Input;

Input.propTypes = {
   inputName: PropTypes.string.isRequired ,
    handleChange: PropTypes.func.isRequired,
    inputValue: PropTypes.object.isRequired,
   handleValidation: PropTypes.func.isRequired,
   inputValidation: PropTypes.object.isRequired
}