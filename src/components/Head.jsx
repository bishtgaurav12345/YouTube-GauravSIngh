import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHamIcon } from '../utils/headerSlice';
import { SEARCH_SUGGESTION_API } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice';
import store from '../utils/store';

const Head = () => {
    const [searchText, setSearchText]=useState();
    const [suggestion,SetSuggestion]= useState([]);
    const dispatch= useDispatch();

    const searchCache = useSelector (store => store.search )


    const getSuggestion = async()=>{
        console.log("api call for -",searchText);
        const data =await fetch(SEARCH_SUGGESTION_API+searchText);
        const json = await data.json();
        console.log(json);
        SetSuggestion(json[1]);

        dispatch(cacheResults({
            [searchText]:json[1],
        }))
        

    }

    useEffect(()=>{
    const timer= setTimeout(()=>{
        if(searchCache[searchText]){
            SetSuggestion(searchCache[searchText]);
        }else {
        if(searchText=== undefined) return null;
        getSuggestion();}},200)
        return()=>{
        clearTimeout(timer);
    };
    },[searchText]);


    const handleToggle=()=>{
        dispatch(toggleHamIcon())
    }




  return (
    <div className='relative '>
    <div className='grid grid-flow-col mx-10 h-16 shadow-md bg-slate-50 mt-3 items-center justify-between  fixed top-0 left-0 right-0'>
        <div className=" flex col-span-2 h-8 gap-3">
            <img src="https://cdn-icons-png.flaticon.com/128/7710/7710488.png" alt="hamburger icon" className='h-9/10' onClick={()=>handleToggle()}/>
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="youtubeicon "className='h-full' />
        </div>
        <div className="flex-col col-span-8 gap-2">
            <div className='w-full'>
                <input type="text" className='w-1/2 rounded-l-full py-1 border border-slate-900 px-4 ' placeholder='search' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button className=' px-7 py-1 rounded-r-full bg-slate-300 border border-slate-900'>Search</button>
            </div>
            <div className='w-[36rem] bg-slate-100 rounded-lg fixed mt-2  border border-gray-900 '>
                <ul>
                    {suggestion.map(s=><li className=' px-4 my-1 hover:bg-gray-300'key={s}>{s}</li>)}
                    
                </ul>
            </div>
        </div>
        <div className="flex col-span-2 h-6 gap-6">
            <img src="https://cdn-icons-png.flaticon.com/128/2645/2645890.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/456/456212.png" className ="h-full"alt="" />
        </div>
    </div>
    </div>
  )
}

export default Head