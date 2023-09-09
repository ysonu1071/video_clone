import React from 'react'
import pagenotfound from "../photos/pagenotfound.png"
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
    const navigate = useNavigate();
  return (
    <div className='w-full h-screen flex flex-col items-center'>
        <img src={pagenotfound} alt="" />
        <div className='flex flex-col items-center'>
            <div className='text-3xl'>Page not found!</div>
            <button className='px-4 py-2 bg-green-600 text-white rounded-3xl mt-5' onClick={()=>navigate("/")}>Go to home page</button>
        </div>
    </div>
  )
}

export default PageNotFound