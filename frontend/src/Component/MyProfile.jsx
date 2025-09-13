import React from 'react'
import Header from './Header'
import MyLanguage from './MyLanguage'

function MyProfile() {

    const myLanguage=[
        {
            lag:"Javascript",
            spec:["Variables","Oops","Promise","Error Handling","Many More"]
        },
        {
            lag:"Python",
             spec:["Variables","Oops","Promise","Error Handling","Many More"]
        },
        {
            lag:"React",
             spec:["Variables","Oops","Promise","Error Handling","Many More"]
        },
        {
            lag:"Typescript",
             spec:["Variables","Oops","Promise","Error Handling","Many More"]
        },
        {
            lag:"MongoDB",
             spec:["Variables","Oops","Promise","Error Handling","Many More"]
        },
        {
            lag:"Postgres",
             spec:["Variables","Oops","Promise","Error Handling","Many More"]
        }
    ]
    return (
        <div className='w-full h-full px-8'>
            <Header />
            <div className="w-full h-full flex gap-9 mt-10">
{
    myLanguage.map((elem)=>{
        return <MyLanguage lag={elem} />
    })
}             
            </div>
        </div>
    )
}

export default MyProfile
