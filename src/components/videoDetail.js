import React from "react";
import "./videoDetail.css";

const videoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  } else {
    const src="https://www.youtube.com/embed/".concat(video.id.videoId).concat("?autoplay=1");
    return (
      <div className="card videoDetail" >
        <div className="ui embed">
            <iframe src={src} title="video player" allow="autoplay;" allowFullScreen/>
        </div>
        <div className="card-body">
          <h5 className="card-title"> {video.snippet.title} </h5>
          <p className="card-text">
              {video.snippet.description}
          </p>
        </div>
      </div>
    );
  }
};

export default videoDetail;
