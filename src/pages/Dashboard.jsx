import React from 'react'
import Header from '../components/Dashboard/Header'
import Cards from '../components/Dashboard/Cards'
import EngageUser from '../components/Dashboard/EngageUser'
import Revenue from '../components/Dashboard/Revenue'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div>
        <Cards />
      </div>
      <div className=' flex gap-4'>
        <div className=' w-[50%]'><EngageUser /></div>
         <div className='w-[50%]'><Revenue /></div>
      </div>
    </div>
  )
}

export default Dashboard