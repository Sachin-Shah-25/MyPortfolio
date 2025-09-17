import React from 'react'
import { motion } from 'framer-motion'
import y7 from './assets/y7.png'
import y8 from './assets/y8.png'
import y2 from './assets/y2.webp'
import y6 from './assets/y6.webp'
import y3 from './assets/y3.webp'
import y4 from './assets/y4.webp'
import { FiExternalLink } from "react-icons/fi";

function MyVideos({ref,item,index}) {
const arr= [y7,y8,y2,y6,y3,y4]
    return (
        <motion.div
           
            drag
             dragConstraints={ref}
            className="thum w-[250px] cursor-grab h-[200px] p-1  rounded-2xl border border-zinc-800 relative   overflow-hidden"
        >
            <a  href={item.link} target='_blank' className='absolute bottom-0 bg-zinc-900 right-0 rounded-md p-1 text-lg font-bold cursor-pointer '> <FiExternalLink/> </a>
            <img src={arr[index]} draggable={false} className="object-cover w-full h-full rounded-2xl" alt="" />
        </motion.div>

    )
}

export default MyVideos
