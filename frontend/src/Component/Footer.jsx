import React from 'react'
import user1 from "../assets/user1.png"
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
    return (
        <div className='w-full py-20  flex flex-col justify-center items-center'>
            <div className=' flex items-center'>
                <div className='w-10 h-10'>
                    <img src={user1} className='w-full h-full object-contain' alt="" />
                </div>
                <p className='text-sm font-bold ml-3 header_name'>Sachin Shah</p>
            </div>
            <div className='mt-5'>
                <div className=" flex w-full items-start justify-start gap-5">
                    <a href="https://github.com/Sachin-Shah-25" target='_blank' className='text-gray-300 text-sm'><FaGithub></FaGithub></a>
                    <a href="#" className='text-gray-300 text-sm'><FaLinkedin></FaLinkedin></a>
                    <a href="https://www.youtube.com/@CodingErrors-25" className='text-gray-300 text-sm'><FaYoutube></FaYoutube></a>
                </div>
            </div>
              <ul className=' flex items-center gap-10 font-semibold mt-10'>
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
        }
       

        ].map((item, ind) => {
          return <li
            className={` overflow-hidden relative`}
            key={ind}>
            <a className='font-normal text-sm' href={item.link}
              rel="noopener noreferrer"
              target={`${ind == 1 || ind == 2 ? "_blank" : ""}`}
            >{item.name}</a></li>
        })}

      </ul>
        </div>
    )
}

export default Footer
