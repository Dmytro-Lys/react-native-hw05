import { StyleSheet, View, TouchableWithoutFeedback, KeyboardAvoidingView, Dimensions, Keyboard } from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from "expo-location";

import PostContent from "../components/PostContent"
import CreatePostsInput from './CreatePostsInput';
import FormSubmitButton from './FormSubmitButton';
import SvgButton from './SvgButton';
import SvgView from './SvgView';
import TrashSvg from "../assets/images/trash.svg";
import MapPinSvg from "../assets/images/map-pin.svg";


const CreatePostsForm = () => {
    
    const defaultValues = {
        postImage: { value: null, validation: true },
        postName: { value: '', validation: true },
        postLocation: { value: '', validation: true }
    }
  
    const [formValues, setFormValues] = useState(defaultValues)
    const [isShownKeyboard, setIsShownKeyboard] = useState(null)
    const [hasShowedKeyboard, setHasShowedKeyboard] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {
            if (isSubmit) {
                let { status } = await Location.requestBackgroundPermissionsAsync();
                if (status !== "granted") {
                    console.log("Permission to access location was denied");
                }

                let location = await Location.getCurrentPositionAsync({});
                const coords = {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                };
                setLocation(coords);
            }
    })();
  }, [isSubmit]);
    
    
    
    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            if (!hasShowedKeyboard) setHasShowedKeyboard(true)
            setIsShownKeyboard(Keyboard._currentlyShowing.endCoordinates.height);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setIsShownKeyboard(null);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);



  
    const handleFormValueChange = (key, value) => {
        setFormValues(
            {
                ...formValues,
                [key]: { ...formValues[key], ...value }
            }
        );
    };
    
    const checkEmpty = () => Object.values(formValues).some(field => !field.value)

    const checkFormValidation = () => Object.values(formValues).every(field => field.validation)
    
    const reset = () => {
        setFormValues(
            {
                ...formValues,
                ...defaultValues
            });
        setIsSubmit(false);
        setLocation(null);
    }

   
    const getPostLocationText = () => {
        const { postLocation: { value } } = formValues
        const indexRegion = value.lastIndexOf(",");
        const country = indexRegion >= 0 ? value.slice(indexRegion + 1, value.length) : value;
        const region = indexRegion >= 0 ? value.slice(0, indexRegion) : '';
        return {
            region,
            country
        }
    }
    
    const getPostLocation = () => {
       formValues.postLocation.value = {...location, ...getPostLocationText()}
    }
    
    const onSubmit = () => setIsSubmit(true)
    
    const handleSubmit = () => {
        getPostLocation();
        const sendValues = Object.entries(formValues).reduce((obj, [key, value]) => {
            return {...obj, [key]: value.value }
        }, {})
        console.log(sendValues)
        reset()
    }

    useEffect(() => {
        if (location) {
           handleSubmit()
       }
    }, [location])
    
   
    return (
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <View style={styles.formWrapper}>
                    <View style={isShownKeyboard ? { ...styles.form, marginTop: -1 * isShownKeyboard} : styles.form}> 
                        <PostContent contentImage={formValues.postImage} handleChange={handleFormValueChange}/>
                        <View style={styles.formElements}>
                            <CreatePostsInput inputName="postName" handleChange={handleFormValueChange} inputValue={formValues.postName} />
                            <CreatePostsInput inputName="postLocation" handleChange={handleFormValueChange} inputValue={formValues.postLocation} >
                                <SvgView styleView={styles.iconMap} svgFile={MapPinSvg} />
                            </CreatePostsInput>    
                        </View>
                        {checkEmpty() || !checkFormValidation()
                            ? <FormSubmitButton text="Опублікувати" onPress={onSubmit} marginTop={0} buttonColor='#f6f6f6' textColor='#bdbdbd' disabled={true} />
                            : <FormSubmitButton text="Опублікувати" onPress={onSubmit} marginTop={0}/>
                        }
                        <SvgButton styleButton={styles.buttonTrash} onPress={reset} svgWidth='24' svgHeight='24' svgFile={TrashSvg}  />    
                    </View> 
                </View>
            </KeyboardAvoidingView> 
        </TouchableWithoutFeedback>  
        
       
    )
}
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
      width: windowWidth,
  },
  form: {
      flex: 1,
      flexDirection: 'column',
    paddingHorizontal: 16,
      paddingTop: 32,
    rowGap: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
      backgroundColor: '#fff',
      },
  formElements: {
    flex: 1,
    maxHeight: 116,  
    rowGap: 16,
    },
    buttonTrash: {
         maxWidth: 70,
        width: 70,
        maxHeight: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: '#f6f6f6',
        marginTop: '7%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
     iconMap: {
        position: 'absolute',
        bottom: 16,
        left: 0,
  }
 
});


export default CreatePostsForm