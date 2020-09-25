import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video/Video';
import db from './firebase';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection('videos').onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className='app'>
      <div className='app__videos'>
        {videos.map(({ url, channel, description, song, likes, messages, shares }) => (
          <Video
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}
          />
        ))}

        {/* <Video
          url=''
          channel='JonathanAP'
          description='Web & Mobile Developer'
          song='TIK TOK Clone by JAP'
          likes={111}
          messages={222}
          shares={333}
        /> */}
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
