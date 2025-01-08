import React from 'react'
import { LuUsersRound } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import total from '../../assets/total.png'
const Cards = () => {
  return (
    <div className=' flex items-center justify-between gap-x-6 mt-12 mr-8'>
        <div className='w-[33%] border-[#e6e4e4] py-6 shadow-sm px-6 rounded-md border-[1px] flex justify-between'><div className=' flex flex-col '><h1 className=' text-[#222222E5] text-[15px] font-[500]'>Seekers</h1> <h2 className=' text-[#712A8F] text-[26px] font-[700]'>345</h2></div>
         <div className=' bg-[#55833B0D] w-[55px] h-[55px] rounded-md flex items-center justify-center'>
            <span className=' text-[#55833B] text-[20px]'><LuUsersRound /></span>
         </div>
        </div>
        <div className='w-[33%] border-[#e6e4e4] py-6 shadow-sm px-6 rounded-md border-[1px] flex justify-between'>
        <div className=' flex flex-col '><h1 className=' text-[#222222E5] text-[15px] font-[500]'>Professionals</h1> <h2 className=' text-[#712A8F] text-[26px] font-[700]'>35</h2></div>
         <div className=' bg-[#55833B0D] w-[55px] h-[55px] rounded-md flex items-center justify-center'>
            <span className=' text-[#55833B] text-[20px]'><FaRegStar /></span>
         </div>
        </div>
        <div className='w-[33%] border-[#e6e4e4] py-6 shadow-sm px-6 rounded-md border-[1px] flex justify-between'>
        <div className=' flex flex-col '><h1 className=' text-[#222222E5] text-[15px] font-[500]'>Total Revenue</h1> <h2 className=' text-[#712A8F] text-[26px] font-[700]'>8900k</h2></div>
         <div className=' bg-[#55833B0D] w-[55px] h-[55px] rounded-md flex items-center justify-center'>
            <span className=' text-[#55833B] text-[20px]'><img src={total} alt="" /></span>
         </div>
        </div>
    </div>
  )
}

export default Cards