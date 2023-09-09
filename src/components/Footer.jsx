import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <div className='bg-blue-800 h-[50px] flex flex-col justify-between items-center md:px-20 md:flex-row text-gray-300'>
        <p > <CopyrightIcon/> All rights reserved - 2023</p>
        <p >Developed by Sonu Kumar</p>
    </div>
  )
}

export default Footer