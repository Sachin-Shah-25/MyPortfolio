import React from 'react'
import img1 from '../assets/img1.png'
import { Link } from 'react-router-dom'
function MyProject() {
    return (
        <div className='w-full flex px-8 mt-12'>
            <div className='w-1/6 h-40 '>
                <img className='w-full h-full object-cover' src={img1} alt="" />
            </div>
            <div className='w-full ps-5'>
                <h2 className='font-bold text-3xl'>Javascript Project</h2>
                <span className='mt-3 block text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque officia ipsum cumque aliquam voluptatem quasi, dolor, exercitationem nesciunt eligendi quibusdam earum, corrupti suscipit obcaecati? Tenetur cumque ipsa velit eveniet odit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id explicabo molestiae commodi provident eveniet, expedita impedit dolor numquam dolorum eaque voluptatibus reprehenderit illo facilis unde minima optio nihil magnam consequatur!</span> <i class="fa-solid fa-eye float-right text-gray-500 cursor-pointer"></i>
                <div className=' mt-5 py-1 ps-1 flex justify-between' >
                    <ul className='flex text-gray-500 text-sm gap-x-3'>
                        <li>2 likes</li> |
                        <li>10 comments</li>
                    </ul>
                    <div className='pe-3'>
                        <i class="fa-brands fa-github me-2 text-gray-500 cursor-pointer ">.</i>
                        <span className='text-sm text-gray-500 '>5 days ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProject
