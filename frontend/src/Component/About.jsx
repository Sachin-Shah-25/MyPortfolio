import React from 'react'
import user1 from "../assets/user1.png"
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function About() {
    return (
        <div className=' h-full w-full  px-[15vw] bg-zinc-900 text-white py-20  '>
            <div className='flex justify-between '>
                <div className='flex w-full items-center about_head'>
                    <div className='w-40 h-40'>
                        <img src={user1} className='w-full h-full object-contain' alt="" />
                    </div>
                    <div className='ml-2'>
                        <p className='text-[30px] font-bold about_my_name '>Sachin Shah</p>
                        <div className="icons_links flex w-full items-start justify-start gap-5">
                            <a href="https://github.com/Sachin-Shah-25" target='_blank' className='text-gray-300 text-sm'><FaGithub></FaGithub></a>
                            <a href="#" className='text-gray-300 text-sm'><FaLinkedin></FaLinkedin></a>
                            <a href="https://www.youtube.com/@CodingErrors-25" className='text-gray-300 text-sm'><FaYoutube></FaYoutube></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-zinc-500 mt-10'>
              Meet Sachin Shah is a passionate tech educator and content creator running a YouTube channel dedicated to coding tutorials and practical projects. Focusing on web development and modern JavaScript frameworks like React, he helps learners understand complex programming concepts through simple, hands-on examples. His goal is to make coding accessible, engaging, and fun for beginners and aspiring developers alike.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae non praesentium, ullam quibusdam porro consequuntur assumenda laudantium impedit dignissimos eum sint, accusamus quo voluptatum! Sunt saepe soluta delectus ducimus minima architecto, molestias recusandae dolore itaque enim provident modi numquam earum in et consectetur explicabo aperiam impedit tenetur quas! Minima modi eveniet perspiciatis voluptatum dicta accusamus aliquam rerum delectus consequuntur quam et, minus excepturi aut blanditiis sapiente, sequi hic ipsum autem recusandae nisi distinctio neque voluptates! Animi reiciendis cumque, delectus minus, porro fugiat in aperiam odio exercitationem sed doloremque dolor excepturi asperiores adipisci commodi dolore deleniti cum veritatis similique! Placeat, necessitatibus?
                <br /> <br />

                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos tenetur a sapiente asperiores tempore earum, neque repellendus ea autem omnis. Minus aspernatur debitis quod ratione repudiandae accusamus magni maxime, corrupti cum obcaecati? Doloribus, sapiente fuga corporis ut dolor voluptatum rerum! Ratione ad voluptatum, aliquam ut dolore alias voluptas quo odit nam molestias quae tempore non fuga in quia dolorum impedit?
            </div>
        </div>
    )
}

export default About
