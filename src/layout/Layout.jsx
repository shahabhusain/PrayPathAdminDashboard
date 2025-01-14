import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=' flex gap-6'>
         <div className=''>
         <SideBar />
         </div>
           <div className=' w-[100%] pb-12 ml-[15rem]'>
           <Outlet />
           </div>
    </div>
  )
}

export default Layout