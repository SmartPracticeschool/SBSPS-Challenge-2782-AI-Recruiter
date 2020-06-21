import React,{useCallback, useRef, useState} from 'react';
import WebCam from 'react-webcam'



const WebCamContent = (props)=>{

    const webRef = useRef(null);
    const mediaRef = useRef(null);
    const [isCapture, setCapture] = useState(false)
    const [recordedData, setData] = useState([])

    const CaptureVideoCallback = useCallback(()=>{
        setCapture(true)
        mediaRef.current = new MediaRecorder(webRef.current.stream,{
            mimeType: 'video/webm'
        })
        mediaRef.current.addEventListener(
            'dataavailable',
            handleDataAvailable
        )

    },[webRef, setCapture, mediaRef])
    
    const handleDataAvailable = useCallback(({data})=>{
                if(data.size > 0){
                    setData((prev)=> prev.concat(data))
                }
    },[setData])

    const handleStopCapture = useCallback(()=>{
        mediaRef.current.stop();
        setCapture(false);
    }, [mediaRef, webRef, setCapture])

    const handleDownload = useCallback(()=>{
        if(recordedData.length){
            const blob = new Blob(recordedData,{
                type: 'video/webm'
            })
            const url = URL.createObjectURL(blob)
            window.URL.revokeObjectURL(url)
            setData([])
        }
    },[recordedData])
    return(
        <>
        <WebCam
         audio={true}
         ref={webRef}
        />
        </>
    )

}

export {WebCamContent}