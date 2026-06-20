import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div>
      <div className='flex w-full max-w-300 m-auto justify-between p-3 sm:px-5 items-center'>
        <img className='w-20 h-12 sm:w-22 md:w-25 md:h-14 lg:w-28 lg:h-15' src={assets.mainLogo} alt="main logo" />
        <div><img className='w-10 h-10 md:w-11 md:h-11 lg:w-14 lg:h-14 rounded-full object-cover' src={assets.profileImage} /></div>
      </div>
    </div>
  )
}

export default Navbar