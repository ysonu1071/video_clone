import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import computerPhoto from "../photos/StreamHUb.gif"

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate({pathname:"/videos", search:"?page=1"})
    }

  return (
    <div className=''>
        <Navbar/>
          <main className='w-full h-[90vh] bg-gray-300 px-2  md:flex justify-center items-center'>
              <img src={computerPhoto} alt="" className='md:w-[400px] lg:w-[600px]' />
              <div className='w-[90vw] flex flex-col items-center md:w-[400px] lg:w-[600px] h-[200px]'>
                <div className='text-3xl text-center md:text-5xl'>Short videos for everyone.</div>
                <p className='text-center text-xl mt-2'>Entertain you self, fresh your mind.</p>
                <button className='text-xl px-5 py-2 bg-green-600 text-white rounded-3xl mt-5' onClick={handleClick}>Watch now</button>
              </div>
          </main>
        <Footer/>
    </div>
  )
}

export default Home;