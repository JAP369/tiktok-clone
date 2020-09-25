import React, { useRef, useState } from 'react';
import './Video.css';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className='video'>
      <video
        className='video__player'
        loop
        ref={videoRef}
        onClick={onVideoPress}
        src={url}></video>
      <Footer channel={channel} description={description} song={song} />
      <Sidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
