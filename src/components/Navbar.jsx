import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='w-full h-16 flex items-center justify-center bg-blue-800 md:px-20 md:justify-normal cursor-pointer' onClick={()=> navigate("/")} >
        <div className='text-2xl font-bold'><span className=' text-white'>Video</span><span className=' text-yellow-500'>Clone</span></div>
    </div>
  )
}

export default Navbar