import React, { useRef } from 'react'
import Project from './Project'
import { motion } from 'framer-motion'
import MyVideos from '../MyVideos'


function YoutVideos() {
  const ref = useRef()
  const arr = [{
    name: "Why Industry Uses useMemo in Most Cases 🚀",
    link:"https://www.youtube.com/watch?v=eX6BfCE1al4"
  },
  {
    name: "React useEffect Async hai ya Nahi? | Complete Explanation",
    link:"https://www.youtube.com/watch?v=759hTO03jmo"
  },
  {
    name: "How to send email in development Node js",
    link:"https://www.youtube.com/watch?v=HHRJRcIJX7o"
  },
  {
    name: "Don't Use SetInterval Or Loop Openly in react",
    link:"https://www.youtube.com/watch?v=Im7cFwpQkLQ"
  }, {
    name: "How to add Google Login and Signup ( Auth 2.0 ) Make easy authentication",
    link:"https://www.youtube.com/watch?v=UAp-GW6G6SI"
  },
  {
    name:"Run react app without main.jsx",
    link:"https://www.youtube.com/watch?v=cLNlBFSvWxY"
  }
  ]
  return (
    <div className='w-full h-[80vh] mt-[100px] overflow-hidden '>
      <div className='YoutVideo_container h-[80vh] rounded-sm flex z-[999] justify-between  relative overflow-hidden'>

        <div
          ref={ref}
          className='yt w-full flex   flex-wrap px-2 justify-around gap-y-5 overflow-x-hidden  overflow-y-auto pt-5'>
          {
           arr.map((item, ind) => {
              return <MyVideos ref={ref} key={ind} item={item} index={ind}  ></MyVideos>
            })
          }

        </div>

      </div>
    </div>
  )
}

export default YoutVideos
