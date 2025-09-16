import React from 'react'
import Project from './Project'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import t3 from "../assets/t3.png"
import hos2 from "../assets/hos2.JPG"
import g3 from "../assets/g3.JPG"
import h4 from "../assets/h4.JPG"
import { motion } from 'framer-motion';

function MyProjects() {
    const arr=[
    {
        name:"Todo Application",
        img:"t3"
    } ,
    {
        name:"Hospital Management",
        img:"hos2"
    } ,
    {
        name:"Gym Application",
        img:"g3"
    } ,
    {
        name:"Hotel Booking System",
        img:"h4"
    } ,
    

    ]
    return (
        <div className='w-full h-[80vh] mt-[100px] overflow-hidden'>
            <div className='project_container h-[55vh] flex z-[999] justify-between  relative overflow-hidden'>
                <div className=' text-2xl right-3 bottom-[-5px] rounded-full relative z-[999] flex items-end'> <div className='rotate-[30deg] cursor-pointer bg-zinc-800 p-2 text-2xl rounded-full'>
                    <FaChevronLeft /> </div></div>
                <motion.div 
                initial={{x:0}}
                animate={{x:-500}}
                transition={{
                    duration:10,
                    repeat:Infinity,
                    ease:"linear"
                }}
                className='absolute left-0 top-0 z-[500] pt-5'>
                    <div className='w-full flex items-center px-2 gap-10 overflow-hidden'>
                      {
                        arr.map((item,index)=>{
                            return <Project item={item} key={index} id={index} ></Project>
                        })
                      }
                    </div>
                </motion.div>
                <div className='flex items-end left-3 bottom-[-5px] text-2xl rounded-full relative z-[999]'> <div className= 'rotate-[300deg] bg-zinc-800 p-2 cursor-pointer text-2xl rounded-full'>
                    <FaChevronRight /> </div> </div>
            </div>
        </div>
    )
}

export default MyProjects
