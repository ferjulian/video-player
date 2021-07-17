import React from 'react';
import VideoItem from './VideoItem';

//Paso el props como argumento, para usarlo como tal y no tener que llamar al prop completo "props.videos.length" 

const VideoList = ({videos, onVideoSelect}) => {

    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideoList;