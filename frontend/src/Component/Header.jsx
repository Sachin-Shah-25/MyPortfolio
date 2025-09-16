import React, { useState } from 'react'
import user1 from "../assets/user1.png"
import { Link } from 'react-router-dom'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaBars } from "react-icons/fa";
const myName = import.meta.env.VITE_MY_NAME
function Header() {
  const [getTop,setTop]=useState(0)
  return (
    <div className='w-full'>
       <span  onClick={()=>setTop(0)} className='absolute nav_open  right-10 text-2xl font-bold text-zinc-400 cursor-pointer'> <FaBars/> </span>
      <div style={{top:getTop}} className='header w-full  py-3  px-20 fixed left-0 top-0 flex justify-between items-center border-black-800'>
      <span  onClick={()=>setTop(-280)} className='absolute nav_close right-10 text-2xl font-bold text-zinc-400 cursor-pointer'> <IoMdCloseCircleOutline/> </span>
      <div className='icons flex items-center'>
        <div className='w-12 h-12'>
          <img src={user1} className='w-full h-full object-contain' alt="" />
        </div>
        <p className='text-md font-bold ml-3 header_name'>Sachin Shah</p>
      </div>
      <ul className='nav_link flex items-center gap-10 font-semibold'>
        {[{
          name: "Home",
          link: "/"
        },
        {
          name: "Youtube",
          link: "https://www.youtube.com/@CodingErrors-25"
        },
        {
          name: "Github",
          link: "https://github.com/Sachin-Shah-25"
        },
        {
          name: "About",
          link: "/about"
        },

        ].map((item, ind) => {
          return <li
            className={` overflow-hidden relative ${ind == 3 ? "ml-[150px] bg-gray-600 rounded-full px-4 py-1 about " : "nav_links"}`}
            key={ind}>
            <a href={item.link}
              rel="noopener noreferrer"
              target={`${ind == 1 || ind == 2 ? "_blank" : ""}`}
            >{item.name}</a></li>
        })}

      </ul>
    </div>
    </div>
  )
}

export default Header
