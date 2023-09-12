import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleHamIcon } from '../utils/headerSlice';

const Head = () => {

    const dispatch= useDispatch();

    const handleToggle=()=>{
        dispatch(toggleHamIcon())
    }


  return (
    <div className='grid grid-flow-col mx-10 h-12 shadow-md bg-cyan-100 mt-3 items-center justify-between '>
        <div className=" flex col-span-2 h-8 gap-3">
            <img src="https://cdn-icons-png.flaticon.com/128/7710/7710488.png" alt="hamburger icon" className='h-9/10' onClick={()=>handleToggle()}/>
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="youtubeicon "className='h-full' />
        </div>
        <div className="flex col-span-8 gap-2">
            <input type="text" className='w-1/2 ' />
            <button>Search</button>
        </div>
        <div className="flex col-span-2 h-6 gap-6">
            <img src="https://cdn-icons-png.flaticon.com/128/2645/2645890.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/456/456212.png" className ="h-full"alt="" />
        </div>
    </div>
  )
}

export default Head