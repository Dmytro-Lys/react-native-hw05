import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgButton from './SvgButton';
import LogOutSvg from "../assets/images/log-out.svg";
import PropTypes from "prop-types";

const LogOut = ({stylesLogOut}) => {
    const navigation = useNavigation()
    const logOut = () => navigation.navigate('Login')

    return (
        <SvgButton styleButton={{ ...styles.buttonSvg, ...stylesLogOut }} onPress={logOut} svgWidth='24' svgHeight='24' svgFile={LogOutSvg} />
  )
}

const styles = StyleSheet.create({
    buttonSvg: {
    maxWidth: 40,
    height: 40,
    position: 'absolute',
  }
})

export default LogOut


LogOut.propTypes = {
   stylesLogOut: PropTypes.object.isRequired 
}