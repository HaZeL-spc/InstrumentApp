import React from "react";
import cinematicVideo from "../video/cinematicVideo.mp4";

const MainVideo = () => {
  return (
    <div className="main-video-div">
      {/* <video autoPlay loop playsInline className='main-video' width="250"> */}
      <video autoPlay muted loop playsInline className="main-video">
        <source src={cinematicVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default MainVideo;
