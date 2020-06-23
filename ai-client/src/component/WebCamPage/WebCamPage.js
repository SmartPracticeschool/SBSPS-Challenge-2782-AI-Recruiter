import React from 'react';
import RecordRTC from 'recordrtc'
import WebCam from 'react-webcam'
import { UploadVideo } from '../_Api/User';

const WebCamPage = (props)=>{
     
     let recorder = null
     let webRef = React.useRef()

    React.useEffect(()=>{
        CheckStartVideo()
    },[])
     const CheckStartVideo = ()=>{
         if(window.confirm('Start Recording')){
             CaptureVideo()
         }
     }
     const CaptureVideo =()=>{
            navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true,
                
            }).then(async function(stream){
                
                 recorder = RecordRTC(stream, {
                    type: 'video',
                    canvas: {
                        width: 440,
                        height: 340
                    },
                })
                
               
                recorder.startRecording()
                console.log(recorder)


            })
     }
     const UploadRecording = ()=>{
         recorder.stopRecording(()=>{
             let blob = recorder.getBlob();
             let dataProcess = new FormData()
             dataProcess.append('file', blob)

             console.log(props.user.id)
             UploadVideo(dataProcess, props.user.id)
                .then(res=>console.log(res.data))
                .catch(err=>{console.log(err.error)})
             let url = URL.createObjectURL(blob)
             console.log(url)
         })
     }

   
    return(
        <>
        <WebCam />

       
        <button onClick={UploadRecording}>Submit</button>
        </>
    )
}

function mapStateToProps(state){
    return{
        user: state.user.user
    }
}

export {WebCamPage}