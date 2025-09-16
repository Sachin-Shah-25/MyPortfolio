import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import bg4 from "../assets/bg4.png"
import t3 from "../assets/t3.png"
import hos2 from "../assets/hos2.JPG"
import g3 from "../assets/g3.JPG"
import h4 from "../assets/h4.JPG"

function Project({item,id}) {
    const imgArr=[t3,hos2,g3,h4]
    return (
        <div 
        className='pro w-60 overflow-hidden cursor-pointer relative'>
            <div className='w-full h-[20vh] object-cover'>
                <img src={imgArr[id]} className='rounded-lg w-full h-full' alt="" />
            </div>
            <div className='title mt-3 w-full text-lg font-bold text-wrap'><p className='text-2xl text-zinc-500'>{item.name.substring(0,15)+"..."}</p></div>
            <div className='w-full mt-2 relative'>
                <p className='w-full text-sm text-zinc-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nam dolore sunt cupiditate eum consequatur quaerat deleniti quis adipisci, iusto aliquam sequi suscipit obcaecati praesentium beatae eaque molestiae distinctio a?</p>

                <div className='git_button w-full h-full absolute  flex items-center justify-center bg-zinc-900'><a href="#" className='py-2 px-5 flex items-center bg-zinc-700 rounded-full tracking-[1px]'>Github   <span className='ml-1 -rotate-45'><FaArrowRightLong/></span> </a>   </div>
            </div>
        </div>
    )
}

export default Project
