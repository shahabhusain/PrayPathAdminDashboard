import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=' flex gap-6'>
         <div className=' w-[20%]'>
         <SideBar />
         </div>
           <div className=' w-[80%] pb-12'>
           <Outlet />
           </div>
    </div>
  )
}

export default Layout