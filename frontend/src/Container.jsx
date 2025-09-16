import React, { useEffect, useState } from 'react'
import Header from './Component/Header'
import MyProfile from './Component/MyProfile'
import Lang from './Component/Lang'
import MyProjects from './Component/MyProjects'
import YoutVideos from './Component/YoutVideos'
import About from './Component/About'

function Comtainer() {

  return (
    <div className="text-white w-full  overflow-auto pb-20  bg-[url('./assets/bg2.png')] bg-cover bg-center h-full">
      <div className='h-full w-full px-[15vw] backdrop-blur-2xl'>
        <Header />
        <MyProfile/>
        <Lang/>
        <MyProjects/>
        <YoutVideos/>
      </div>
    </div>
  )
}

export default Comtainer
