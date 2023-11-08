import {  Image } from "react-native"
import exampPost from "../assets/images/post.jpg"


    const getURI = (file) => {
        const imageUri = Image.resolveAssetSource(file).uri
        const fullPath = imageUri.slice(0, imageUri.indexOf("?"))
        const path = fullPath.slice(0, fullPath.lastIndexOf("/") + 1)
        const fullFileName = fullPath.slice(fullPath.lastIndexOf("/") + 1, fullPath.length)
        const indexDpi = fullFileName.indexOf("@")
        const dpi = indexDpi > 0 ? fullFileName.slice(indexDpi, indexDpi + 3) : ''
        return {
            path,
            dpi
        }
}
    
const imageToUri = (image) => {
        const { path, dpi } = getURI(exampPost)
    // const newFileName = dpi ? `${image.slice(0, image.indexOf("."))}${dpi}.jpg` : image;
    const newFileName =  `${image}.jpg`;
        return `${path}${newFileName}`
}

export {imageToUri}
    