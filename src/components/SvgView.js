import { StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import PropTypes from "prop-types";

const SvgView = ({ styleView = {},  size = 24, svgFile, fill = 'none', rotation = 0 }) => {
    return (
          <View
            style={{ ...styles.container, ...styleView }}>
                <SvgXml width={size} height={size} fill={fill} rotation={rotation} xml={svgFile} />
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
        maxWidth: 24,
        width: 24,
        maxHeight: 24,
        height: 24,
    
    }
    
})

export default SvgView


SvgView.propTypes = {
    styleView: PropTypes.object,
    size: PropTypes.number,
     svgFile: PropTypes.string.isRequired,
    fill: PropTypes.string,
     rotation: PropTypes.number
}