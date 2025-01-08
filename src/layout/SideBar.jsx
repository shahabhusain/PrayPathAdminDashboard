import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md";
import { LuUsersRound } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { FaRegFlag } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
const SideBar = () => {
  const [open, setOpen] = useState(1)
  return (
    <div className='bg-[#F3F3F6] h-screen sticky top-0'>
      <div className='flex items-center justify-center pt-8'>
      <img className='w-[73px] h-[50px]' src={logo} alt="" />
      </div>
      <ul className=' flex flex-col gap-8 mt-16'>
        <Link to="/" onClick={() => setOpen(1)} className={`cursor-pointer flex items-center gap-3 ${open === 1 ? "active" : " px-6 text-[#949494]"}`}> <span className=' text-[20px]'><MdOutlineDashboard /></span> Dashboard</Link>
        <Link to="/user" onClick={() => setOpen(2)} className={`cursor-pointer flex items-center gap-3 ${open === 2 ? "active" : " px-6 text-[#949494]"}`}> <span className=' text-[20px]'><LuUsersRound /></span> Users</Link>
        <Link to="/payment" onClick={() => setOpen(3)} className={`cursor-pointer flex items-center gap-3 ${open === 3 ? "active" : " px-6 text-[#949494]"}`}> <span className=' text-[20px]'><MdPayment /></span> Payments</Link>
        <Link to="/professionals" onClick={() => setOpen(4)} className={`cursor-pointer flex items-center gap-3 ${open === 4 ? "active" : " px-6 text-[#949494]"}`}> <span className=' text-[20px]'><FaRegStar /></span> Professionals</Link>
        <Link to="/reports" onClick={() => setOpen(5)} className={`cursor-pointer flex items-center gap-3 ${open === 5 ? "active" : " px-6 text-[#949494]"}`}> <span className=' text-[20px]'><FaRegFlag /></span> Reports</Link>
      </ul>
    </div>
  )
}

export default SideBar