import React from 'react';
import RecordRTC from 'recordrtc'
import WebCam from 'react-webcam'
import { UploadVideo, UploadAudio } from '../_Api/User';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'


const videoStyle={
    height:250,
    width:500
}

const WebCamPages = (props)=>{
     
     let recorder = null
     let webRef = React.useRef()
     let audioRecorder = null

    React.useEffect(()=>{
        CheckStartVideo()
    },[])
     const CheckStartVideo = ()=>{
         if(window.confirm('Start Recording')){
             CaptureVideo()
             CaptureAudio()
         }else{
             props.history.push('/')
           
         }
     }
     const CaptureVideo =()=>{
            navigator.mediaDevices.getUserMedia({
                video: true,
                
                
            }).then(async function(stream){
                
                 recorder = RecordRTC(stream, {
                    type: 'video',
                    canvas: {
                        width: 440,
                        height: 340
                    },
                })
                recorder.stream = stream
                
               
                recorder.startRecording()
                console.log(recorder)


            })
     }

     const CaptureAudio = ()=>{
        navigator.mediaDevices.getUserMedia({
              audio: true
        }).then((stream)=>{
            audioRecorder = RecordRTC(stream, {
                type: 'audio'
            })

            audioRecorder.stream =stream;
            audioRecorder.startRecording()
            

        })
  }
     const UploadRecording = ()=>{
         recorder.stopRecording(()=>{
             audioRecorder.stopRecording(()=>{
                let blobVideo = recorder.getBlob();
                let blobAudio = audioRecorder.getBlob();
   
                
                recorder.stream.stop()
                audioRecorder.stream.stop()
                let url = URL.createObjectURL(blobVideo)
                let url2 = URL.createObjectURL(blobAudio)
                console.log(url, url2)
                let videoProcess = new FormData()
                let audioProcess = new FormData()
                videoProcess.append('video', blobVideo)
                audioProcess.append('audio', blobAudio)
                UploadVideo(videoProcess, props.user.id, props.test_id)
                   .then(res=>{
                       UploadAudio(audioProcess, props.user.id, props.test_id)
                            .then(res=>{console.log(res.data)
                               window.close()
                            })
                            .catch(err=>console.log(err))
                      
                   })
                   .catch(err=>{console.log(err)})
               
             })
             
         })
     }

   
    return(
        < div className="webcam">
        <WebCam
        videoConstraints={videoStyle}
        />
        <div className="container">
            <div className="text-center mt-5">
                <div className="title">
                    <p className="h5">InterView are based on your video stream</p>
                </div>
            </div>
        </div>

       <div className="update-btn webcam-btn">
        <button className="btn" onClick={UploadRecording}>Submit</button>
        </div>
        </ div>
    )
}

function mapStateToProps(state){
    return{
        user: state.user.user
    }
}

const WebCamPage = withRouter(connect(mapStateToProps, null)(WebCamPages))
export {WebCamPage}