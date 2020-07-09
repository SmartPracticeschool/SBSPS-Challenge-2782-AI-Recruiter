# -*- coding: utf-8 -*-
"""
Created on Sat Jun 27 12:36:07 2020

@author: Devdarshan
"""

import librosa
import soundfile
import  pickle
import numpy as np

model = pickle.load(open("model.pkl", 'rb'))
def extract_feature(file_name, mfcc, chroma, mel):
    with soundfile.SoundFile(file_name) as sound_file:
        X = sound_file.read(dtype="float32")
        sample_rate=sound_file.samplerate
        if chroma:
            stft=np.abs(librosa.stft(X))
        result=np.array([])
        if mfcc:
            mfccs=np.mean(librosa.feature.mfcc(y=X, sr=sample_rate, n_mfcc=40).T, axis=0)
            result=np.hstack((result, mfccs))
        if chroma:
            chroma=np.mean(librosa.feature.chroma_stft(S=stft, sr=sample_rate).T,axis=0)
            result=np.hstack((result, chroma))
        if mel:
            mel=np.mean(librosa.feature.melspectrogram(X, sr=sample_rate).T,axis=0)
            result=np.hstack((result, mel))
    return result
'''
import sounddevice as sd
from scipy.io.wavfile import write

fs = 44100  # Sample rate
seconds = 3  # Duration of recording

myrecording = sd.rec(int(seconds * fs), samplerate=fs, channels=2)
sd.wait()  # Wait until recording is finished
write('output.wav', fs, myrecording)  # Save as WAV file

from pydub import AudioSegment
sound = AudioSegment.from_wav("D:/IBM HACK 2020/SBSPS-Challenge-2782-AI-Recruiter/ML MODELS/Speech Analyser/blocking.wav")
sound = sound.set_channels(1)
sound.export("test.wav", format="wav")
'''
feature = extract_feature("blocking.wav",mfcc=True, chroma=True, mel=True)
manualtest = []
manualtest.append(feature)
prediction = model.predict(manualtest)



