import React from "react";
import "./VideoItem.css";

class videoItem extends React.Component{

    videoSelect=(event)=>{
        this.props.selectVideo(this.props.video);
    }

    render=()=>{
        const video=this.props.video;
        return (
            <div className="video-item item" onClick={this.videoSelect}>
              <div className="media">
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                <div className="media-body">
                  <h5 className="mt-0">{video.snippet.title} </h5>
                  <small>{video.snippet.channelTitle}</small>
                  <p>{video.snippet.description}</p>
                </div>
              </div>
            </div>
          );
    }
}

export default videoItem;
