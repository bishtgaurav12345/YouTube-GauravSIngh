import React from 'react'
import { useSelector } from 'react-redux';
import store from '../utils/store';
import { Link } from 'react-router-dom';

const Sidebar= () => {

 const isToggle=useSelector((store)=>store.header.hamIcon);
 if(!isToggle) return null;
  return (
    <div className='flex flex-col gap-4 w-32 mx-10'>
        <ul className='shadow-md '>
            <li><Link to={"/"}>Home</Link></li>
            <li>Subscription</li>
            <li>Shorts</li>
            <li></li>
        </ul>

        <ul className='shadow-md '>
            <li>Home</li>
            <li>Subscription</li>
            <li>Shorts</li>
            <li></li>
        </ul>

        <ul className='shadow-md '>
            <li>Home</li>
            <li>Subscription</li>
            <li>Shorts</li>
            <li></li>
        </ul>
    </div>
  )
}

export default Sidebar;
