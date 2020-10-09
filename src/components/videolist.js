import React from "react";
import VideoItem from "./videoitem";

const videoList =(props)=>{
    const videos=props.videos;
    const renderedList=videos.map((video)=>{
       return  <VideoItem key={video.id.videoId} video={video} selectVideo={props.selectedVideo} />;
    });
    let list;
    if(props.video===null){
        list = "ui list not"
        console.log(props);
    }
    else{
        list= "ui list"
    }
    return(
        <div className={list}>{renderedList}</div>
    );
}

export default videoList;