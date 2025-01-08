import React from 'react'
import { GoBell } from "react-icons/go";
import { FaRegShareSquare } from "react-icons/fa";
import main from '../../assets/main.png'
const Header = () => {
  return (
    <div className=' flex items-center justify-between mr-6'>
        <h1 className=' text-[#000000] text-[32px] font-[700]'>Payments</h1>
          <div className=' flex items-center gap-4 mt-4'>
          <div className='border-[1px] border-[#d9d9e1] w-[55px] h-[55px] rounded-full flex items-center justify-center'>
          <span className=' text-[20px] text-[#000000]'><GoBell /></span>
        </div>
        <div className='border-[1px] border-[#d9d9e1] w-[55px] h-[55px] rounded-full flex items-center justify-center'>
          <span className=' text-[20px] text-[#000000]'><img src={main} alt="" /></span>
        </div>
        <div className='border-[1px] border-[#d9d9e1] w-[55px] h-[55px] rounded-full flex items-center justify-center'>
          <span className=' text-[20px] text-[#000000] bg-[#d9d9e1] w-[40px] h-[40px] rounded-full flex items-center justify-center'><FaRegShareSquare /></span>
        </div>

          </div>
      
    </div>
  )
}

export default Header