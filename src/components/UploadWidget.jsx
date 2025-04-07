import { useEffect, useRef } from "react"
import styles from './UploadWidget.module.css'

const UploadWidget = (props) => {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dsnppvdae',
            uploadPreset:'PicnicApp', 
                cropping: true,
                showAdvancedOptions: true,
                sources: ['local', 'url'],
                multiple: false,
                maxImageFileSize: 2000000,
        }, function(error, result) {
                console.log(result);
                console.log(props.formData);
                if (result.event === 'success') {
                    console.log(result.info.url);
                    props.setFormData({...props.formData, image: result.info.url})
                }   
        })

    }, [])
    return (
        <button className={styles.button} onClick={() => widgetRef.current.open()}>Upload</button>
    )
}

export default UploadWidget