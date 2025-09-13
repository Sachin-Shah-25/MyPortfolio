import React from 'react'
import MyProfile from './Component/MyProfile'
import MyAllProjects from './Component/MyAllProjects'
import MyAllTemplates from './Component/MyAllTemplates'

function Container() {
  return (
    <div className='w-full h-full border border-blue-400'>
     <MyProfile/>
     <MyAllProjects/>
     <MyAllTemplates/>
    </div>
  )
}

export default Container
