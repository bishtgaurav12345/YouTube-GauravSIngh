import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeSideBar } from '../utils/headerSlice';
import { API_KEY } from '../utils/constant';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';


const WatchPage = () => {
    // const [watchVideo,setWatchVideo]=useState([]);

    // const {snippet,statistics}= watchVideo;
    // const {thumbnails,title,channelTitle}=snippet;
    const [searchParams]= useSearchParams();
    
    // console.log(videoId);
   

    // useEffect(()=>{
    //     getWatchVideo();
    // },[videoId]);

    // const getWatchVideo= async()=>{
    //     const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
    //     const json= await data.json();
    //     setWatchVideo(json.items[0]);
    //     console.log(json.items[0]);

    // <div  className='px-10 pt-5' >
          /* {watchVideo ? (
            <>
              <img src={watchVideo?.snippet?.thumbnails?.standard?.url} alt="video" />
              <ul>
                <li>{watchVideo?.snippet?.title}</li>
                <li>{watchVideo?.snippet?.channelTitle}</li>
                <li>{(watchVideo?.statistics?.viewCount) / 1000}k</li>
              </ul>
            </>
          ) : (
            <div>Loading...</div>
          )} */
        // </div>

    // }

    
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(closeSideBar());
    },[]);


    return (
      <div className='mx-10 mt-3'>
        <div>
           {<iframe width="1000" height="600" src={`https://www.youtube.com/embed/${searchParams.get("v")}`}title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}
        </div>
        <div> 
          <CommentsContainer/>
        </div>
      </div>
    )
}

export default WatchPage;