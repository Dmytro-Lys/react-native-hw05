import { StyleSheet } from "react-native";
import TextButton from "./TextButton";
import PropTypes from "prop-types"


const FormSubmitButton = ({ text, onPress, marginTop=43,  buttonColor='#FF6C00', textColor = 'white', disabled = false }) => {
    
const styles = StyleSheet.create({
    buttonSubmit: {
        borderRadius: 100,
        marginTop: marginTop,
        paddingHorizontal: 32,
        paddingVertical: 16,
        backgroundColor: buttonColor,

    },
    buttonSubmitText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        textAlign: 'center',
        color: textColor,
        
    }

})   
    return (
        <TextButton text={text} onPress={onPress} styleButton={styles.buttonSubmit} styleText={styles.buttonSubmitText} disabled={disabled} />
     )
}



export default FormSubmitButton;

FormSubmitButton.propTypes = {
   text: PropTypes.string.isRequired ,
    onPress: PropTypes.func.isRequired,
    marginTop: PropTypes.number,
    buttonColor: PropTypes.string,
    textColor: PropTypes.string,
   disabled: PropTypes.bool
}