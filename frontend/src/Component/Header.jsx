import React from 'react'
import user1 from "../assets/user1.png"
const myName=import.meta.env.VITE_MY_NAME
function Header() {
  return (
    <div className='w-full h-full border border-black-500'>
        <div className="w-full h-full">

      <div className='w-48 h-48 mx-auto'>
        <img src={user1} alt="" className='w-full h-full object-contain' />
      </div>
      <div className='w-full text-center'>
        <span className='font-bold text-xl block' >{myName}</span>
      </div>
        </div>
    </div>
  )
}

export default Header
