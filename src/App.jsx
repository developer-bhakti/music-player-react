import React, { useRef, useState } from 'react'
import './App.css';
const App = () => {
  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songname:'Chasing',
    songArtist: 'NEFFEX',
    songSrc: '../public/Assets/songs/Chasing - NEFFEX.mp3',
    songAvatar: '../public/Assets/Images/image1.jpg'
  })

  const [audioProgress, setAudioProgress]  = useState(0)

  const currentAudio = useRef()

  const handleMusicProgressBar =(e) => {
    setAudioProgress(e.target.value)
  }

  let avatarClass = ['objectFitCover', 'objectFitContain', 'none']
  const [avatarClassIndex, setAvatarClassIndex] = useState(0)
  const handleAvatar = () => {
    if (avatarClassIndex >= avatarClass.length -1) {
      setAvatarClassIndex(0)
    } else {
      setAvatarClassIndex(avatarClassIndex + 1)
    }
  }

  const handleAudioPlay = () => {

  }

  return (
    <>
    <div className="container">
      <audio src={currentMusicDetails.songSrc} ref={currentAudio}></audio>
      <video src="../public/Assets/Videos/video1.mp4" autoPlay muted loop className='backgroundVideo'></video>
      <div className="blackScreen"></div>
      <div className="music-Container">
         <p className="musicPlayer">Music Player</p>
         <p className="music-Head-Name">{currentMusicDetails.songname}</p>
         <p className="music-Artist-Nam">{currentMusicDetails.songArtist}</p>
         <img src={currentMusicDetails.songAvatar} className={avatarClass[avatarClassIndex ]} onClick={handleAvatar} alt="song Avtar" id='songAvatar' />
         <div className="musicTimerDiv">
          <p className="musicCurrentTime">00 : 00</p>
          <p className="musicTotalLength">03 : 49</p>
         </div>
         <input type="range" name='musicProgressBar' className='musicProgressBar' value={audioProgress} onChange={handleMusicProgressBar}/>
         <div className="musicControler">
          <i className='fa-solid fa-backward musicControler'></i>
          <i className='fa-solid fa-circle-play playBtn' onClick={handleAudioPlay}></i>
          <i className='fa-solid fa-forward musicControler'></i>
         </div>
      </div>
      <div className="chngeBackBtn">
        Change Background
      </div>
    </div>
    </>
  );
}

export default App