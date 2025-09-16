import React from 'react'
import Header from './Header'
import MyLanguage from './MyLanguage'
import user1 from '../assets/user1.png'
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function MyProfile() {

   
    return (
        <div className='profile_container w-full flex justify-center gap-10 pt-40'>
            <div className="gap-10 border-blue-600">
                <div className='myphoto h-[18vw] w-[18vw]'>
                    <img src={user1} className='h-full w-full object-contain' alt="" />
                </div>
                <div className="icons_links flex w-full items-center pt-5 justify-center gap-8">
                    <a href="https://github.com/Sachin-Shah-25" target='_blank' className='text-xl'><FaGithub></FaGithub></a>
                    <a href="#" className='text-xl'><FaLinkedin></FaLinkedin></a>
                    <a href="https://www.youtube.com/@CodingErrors-25" target='_blank' className='text-xl'><FaYoutube></FaYoutube></a>
                </div>
            </div>
                <div className='profile_detail'>
                <div className='my_name_container w-full text-[6vw] '>
                    <h1 className='my_name h-full font-sans flex gap-5 font-bold  leading-5 mt-10'><span className='flex h-full' >I'm</span> <span className='text-cyan-400 w-full h-full'>Sachin Shah</span></h1>
                </div>
                
                <div className='w-full mt-12'>
                    <p className='text-sm'>Meet Sachin Shah is a passionate tech educator and content creator running a YouTube channel dedicated to coding tutorials and practical projects. Focusing on web development and modern JavaScript frameworks like React, he helps learners understand complex programming concepts through simple, hands-on examples. His goal is to make coding accessible, engaging, and fun for beginners and aspiring developers alike.</p>
                </div>
                <div className='h-[2px] w-full bg-zinc-800 mt-[50px] hr overflow-hidden'></div>
                </div>
        </div>
    )
}

export default MyProfile
