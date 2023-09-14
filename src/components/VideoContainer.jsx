import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [video, setVideo]=useState([]);

    useEffect(()=>{
        getVideos();
    },[]);

    const getVideos= async()=>{
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        setVideo(json.items);
        
    }
    return (
      <div className='flex flex-wrap'>
        {video.length > 0 ? (
          video.map(video=><Link to={"/watchpage?v="+video.id} key={video.id}><VideoCard  info={video} /></Link>)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    )
    
}

export default VideoContainer