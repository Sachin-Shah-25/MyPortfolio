import React, { useEffect, useState } from 'react'
import Header from './Component/Header'
import MyProfile from './Component/MyProfile'
import Lang from './Component/Lang'
import MyProjects from './Component/MyProjects'
import YoutVideos from './Component/YoutVideos'
import About from './Component/About'
import Footer from './Component/Footer'

function Comtainer() {

  return (
    <div className="text-white w-full  overflow-auto  bg-[url('./assets/bg2.png')] bg-cover bg-center h-full">
      <div className='container_child h-full w-full px-[15vw] backdrop-blur-2xl'>
        <Header />
        <MyProfile/>
        <Lang/>
        <MyProjects/> 
        <YoutVideos/>
        <Footer/>
      </div>
    </div>
  )
}

export default Comtainer
