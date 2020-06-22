import React,{useCallback, useRef, useState} from 'react';
import WebCam from 'react-webcam'
import { UploadResume } from '../_Api/User';



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
        mediaRef.current.start()
    },[webRef, setCapture, mediaRef])
    
    const handleDataAvailable = useCallback(({data})=>{
                if(data.size > 0){
                    setData((prev)=> prev.concat(data))
                }
    },[setData])

    const handleStopCapture = useCallback(()=>{
        mediaRef.current.stop();
        setCapture(false);
        if(recordedData.length){
            const blob = new Blob(recordedData,{
                type: 'video/webm'
            })
            let uploadVideo = new FormData()
            uploadVideo.append('file', blob)
            UploadResume(uploadVideo, '5eecf2f463e798de20c51d70')
                .then(res=>console.log(res.data))
                .catch(err=>console.log(err))
            const url = URL.createObjectURL(blob)
            console.log(url)
        }
    }, [mediaRef, webRef, setCapture, recordedData])


    return(
        <>
        <WebCam
         audio={true}
         ref={webRef}
        />
        <button onClick={CaptureVideoCallback}>Start</button>
        <button onClick={handleStopCapture}>Stop</button>
        </>
    )

}

export {WebCamContent}