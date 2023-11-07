import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgButton from './SvgButton';
import ArrowLeftSvg from "../assets/images/arrow-left.svg";


const GoBack = () => {
    const { goBack } = useNavigation()
       
    return(    
        <SvgButton styleButton={styles.buttonBack} onPress={goBack} svgWidth='24' svgHeight='24' svgFile={ArrowLeftSvg} />
    )
}


const styles = StyleSheet.create({
    buttonBack: {
     maxWidth: 40,
        height: 40,
        position: 'absolute',
        bottom: 0,
       left: 16,
  }
})

export default GoBack