import { motion } from 'framer-motion'
import React from 'react'

function Lang() {
  const getFun = (e) => {
    console.log(e.innerHeight)
  
  }
  return (
    <div className='w-full  font-sarif font-bold mt-[190px]'>
      <div className='w-full'>
        <h1 className='w-full text-[5vw] leading-none'>
          {/* <span className='text-cyan-500 text-[6vw]'>Lang.</span> */}
           {/* <span className='text-2xl'>I Know</span> */}
           </h1>
      </div>

      <div onClick={(e) => getFun(e)} className='lang shadow-inner shadow-zinc-800/100 rounded-lg p-10 mt-8  flex items-end w-full h-72 relative  overflow-hidden'>
        <div

          className='-z-5 absolute flex items-start top-0 py-6'>
          <div className='lang_left bg-cyan-800 capitalize px-5 py-2 rounded-full tracking-[2px]'>React</div>
          <div className='lang_right h-52 w-[1px] bg-zinc-800 ml-10'></div>
          <div className='px-10 lang_right_content'>
            <p className=' text-sm text-zinc-500 leading-[23px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, odio voluptatem, beatae repellat laboriosam maxime quae soluta debitis ut, culpa ipsam fugit nihil aspernatur voluptatibus officiis necessitatibus quisquam libero illo, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ratione ipsum quae molestias nisi maiores repudiandae provident? Sequi voluptatem, magni consequatur, ducimus, temporibus voluptatum ipsa dolores earum eligendi ab distinctio. </p>
          </div>

        </div>

        <div className='w-full flex justify-around gap-2 flex-wrap'>
          {[
            { name: "css", color: "#fffa3d" },
            { name: "html", lcolor: "#fffff" },
            { name: "javascript", lcolor: "#fffff" },
            { name: "python", lcolor: "#fffff" },
            { name: "react", lcolor: "#fffff" },
            { name: "react", lcolor: "#fffff" },
            { name: "Typescript", lcolor: "#fffff" }
          ].map((item, index) => {
            return <motion.div key={index} className='hover:scale-[1.05] duration-[0.2s] z-40 capitalize cursor-pointer px-5 py-2 rounded-full tracking-[2px] bg-zinc-800 border-zinc-700 border'>{item.name}</motion.div>
          })}

        </div>
      </div>

    </div>
  )
}

export default Lang
