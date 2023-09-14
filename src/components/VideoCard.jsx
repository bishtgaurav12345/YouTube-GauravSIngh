import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='p-2 my-2 mx-1 w-72 shadow-lg'>
        <img src={thumbnails.standard.url} alt="thumnails" />
        <ul>
            <li>{title}</li>
            <li>{channelTitle}</li>
            <li>{(statistics.viewCount)/1000}K</li>
        </ul>
    </div>
  )
}

export default VideoCard