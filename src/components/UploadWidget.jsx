import { useEffect, useRef } from "react"

const UploadWidget = () => {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dsnppvdae',
            uploadPreset:'PicnicApp'
        }, function(error, result) {
                console.log(result);
                console.log('Success!');
                
                
        })
        
    }, [])
    return (
        <button onClick={() => widgetRef.current.open()}>Upload</button>
    )
}

export default UploadWidget