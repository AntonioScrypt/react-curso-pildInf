import React, { useRef } from "react";
import video from './assets/video.mp4';

function App() {

  const videoRef = useRef(null);
  const actPlay = () => { videoRef.current.play() };
  const actPause = () => { videoRef.current.pause() };

  return (
    <div>
      <video ref={videoRef} width={400}>
        <source src={video} type="video/mp4" ></source>
      </video>
      <div>
        <button onClick={actPlay}>
          Play
        </button>
        <button onClick={actPause}>
          Pause
        </button>
      </div>
    </div>
  );
}

export default App;
