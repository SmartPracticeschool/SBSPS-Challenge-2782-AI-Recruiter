import React from 'react';
import Recordrtc from 'recordrtc'

const AudioRecording = (props)=>{

   let recorder = null

    const StartRecording = ()=>{
          navigator.mediaDevices.getUserMedia({
                audio: true
          }).then((stream)=>{
              recorder = Recordrtc(stream, {
                  type: audio
              })

              recorder.stream =stream;
              recorder.startRecording()
              console.log(recorder)

          })
    }

    const StopRecording = ()=>{
        recorder.stopRecording()
        let blob = recorder.getBlob()
        let url = URL.createObjectURL(blob)
        let dataProcess = new FormData()
        dataProcess.append('recording', blob)
    }

    return(
        <div></div>
    )

}

export {AudioRecording}