import React from 'react'

function MyLanguage({lag}) {
  return (
    <div className='w-1/6 border border-black-600 ps-3 rounded-sm'>
      <div className="span block text-lg">
        <span className='text-center font-bold'>{lag.lag}</span>
      </div>
      <ul className='mt-2'>
        {
            lag.spec.map((lang)=>{
       return <li className='flex'><span>- </span><p className='ms-2'>{lang}</p></li>
            })
        }
       
      </ul>
    </div>
  )
}

export default MyLanguage
