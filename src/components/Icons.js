import { StyleSheet, View } from "react-native";
import { SvgXml } from 'react-native-svg';
import SvgPlus from "./SvgPlus";
import GridSvg from "../assets/images/grid.svg";
import GridWhiteSvg from "../assets/images/grid-white.svg";
import UserSvg from "../assets/images/user.svg";
import UserWhiteSvg from "../assets/images/user-white.svg";
import PropTypes from "prop-types";

const Icons = ({ iconName, isFocused, size = 24 }) => {
    const icons = {
        grid: GridSvg,
        "grid-white": GridWhiteSvg,
        user: UserSvg,
        "user-white": UserWhiteSvg,
    }

    return (
          <View
            style={isFocused ? { ...styles.container,  backgroundColor: '#FF6C00' }: styles.container}>
            {iconName === "plus" ? isFocused ? <SvgPlus stroke={'white'} /> : <SvgPlus stroke={'#212121'} />
                : <SvgXml width={size} height={size} fill={'none'} rotation={0} xml={icons[iconName]} />}
          </View>    
    )
    
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
       width: 70,
        maxHeight: 40,
        borderRadius: 40,
    },
    focusedIcon: {
        backgroundColor: '#FF6C00',
    },
    
})
export default Icons


Icons.propTypes = {
   iconName: PropTypes.string.isRequired ,
    isFocused: PropTypes.bool.isRequired,
    size : PropTypes.number
}