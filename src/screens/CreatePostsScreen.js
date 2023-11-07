import { StyleSheet, View, Dimensions, ScrollView } from "react-native"

// import CreatePostsForm from "../components/CreatePostsForm"
import { Header, CreatePostsForm, SvgButton } from "../components"
import ArrowLeftSvg from "../assets/images/arrow-left.svg";



const CreatePostsScreen = () => {
    const back = () => alert('back')
    return (
        
        <View style={styles.container}>
            {/* <Header title="Створити публікацію">
                <SvgButton styleButton={styles.buttonSvg} onPress={back} svgWidth='24' svgHeight='24' svgFile={ArrowLeftSvg} />
            </Header>  */}
           <CreatePostsForm/>
        </View>
    )
}

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
         backgroundColor: 'white',
        // paddingTop: 43,
    },
     buttonSvg: {
        maxWidth: 40,
        height: 40,
        position: 'absolute',
        bottom: 0,
       left: 10,
    }
})

export default CreatePostsScreen