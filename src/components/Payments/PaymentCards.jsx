import React, { useState } from 'react'
import cart from '../../assets/cart.png'
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
const PaymentCards = () => {
 const [open, setOpen] = useState(1);

    const users = [
        { data:"Feb 1, 2021", time:"04:02 am", amount:"$55.33", name: 'Szűts Gabriella',  email: 'michelle.rivera@example.com', status: 'paid',   profileImage: cart },
        { data:"Feb 2, 2023", time:"04:02 am", amount:"$52.33", name: 'Virág Mercédesz',  email: 'sara.cruz@example.com',       status: 'denied', profileImage: cart },
        { data:"Feb 3, 2021", time:"04:02 am", amount:"$45.33", name: 'Kelemen Krisztina',email: 'debra.holt@example.com',      status: 'pending',profileImage: cart },
        { data:"Feb 4, 2010", time:"04:02 am", amount:"$55.33", name: 'Illés Éva',        email: 'debbie.baker@example.com',    status: 'denied', profileImage: cart },
        { data:"Feb 5, 2018", time:"04:02 am", amount:"$65.33", name: 'Hajdú Dominika',   email: 'georgia.young@example.com',   status: 'paid',   profileImage: cart },
        { data:"Feb 6, 2012", time:"04:02 am", amount:"$85.33", name: 'László Cintia',    email: 'curtis.weaver@example.com',   status: 'denied', profileImage: cart },
        { data:"Feb 7, 2011", time:"04:02 am", amount:"$25.33", name: 'Takács Bianka',    email: 'dolores.chambers@example.com',status: 'pending',profileImage: cart },
        { data:"Feb 8, 2020", time:"04:02 am", amount:"$45.33", name: 'Kovács Tímea',     email: 'deanna.curtis@example.com',   status: 'paid',   profileImage: cart },
        { data:"Feb 9, 2025", time:"04:02 am", amount:"$95.33", name: 'Kiss Dorka',       email: 'jackson.graham@example.com',  status: 'pending',profileImage: cart },
    ];
  return (
    <div className='mr-6 '>
           <div className='flex items-center justify-between mt-8'>
                        <div className='flex items-center gap-3'>
                            <button onClick={() => setOpen(1)} className={`py-2 px-3 rounded-md text-[12px] font-[400] ${open === 1 ? "bg-[#f0efef]" : "border-[1px] border-[#f0efef]"}`}>All</button>
                            <button onClick={() => setOpen(2)} className={`py-2 px-3 rounded-md text-[12px] font-[400] ${open === 2 ? "bg-[#f0efef]" : "border-[1px] border-[#f0efef]"}`}>Unpaid</button>
                            <button onClick={() => setOpen(3)} className={`py-2 px-3 rounded-md text-[12px] font-[400] ${open === 3 ? "bg-[#f0efef]" : "border-[1px] border-[#f0efef]"}`}>Paid</button>
                            <button onClick={() => setOpen(4)} className={`py-2 px-3 rounded-md text-[12px] font-[400] ${open === 4 ? "bg-[#f0efef]" : "border-[1px] border-[#f0efef]"}`}>Denied</button>
                        </div>
                        <span className='bg-[#F8F8F8] py-2 px-3 rounded-2xl flex gap-1 items-center'>
                            <FiSearch /> 
                            <input className='focus:outline-none bg-transparent text-[#434343]' type="text" placeholder='Search Here...' />
                        </span>
                    </div>

                     <div className='mt-6'>
                                    <table className='w-full border-collapse'>
                                        <thead>
                                            <tr className='text-left border-b-[#e8e7e7] border-b-[1px]'>
                                                <th className='py-3 px-4 text-[14px] font-[400] text-[#949494]'>Name</th>
                                                <th className='py-3 px-4 text-[14px] font-[400] text-[#949494]'>Request Time</th>
                                                <th className='py-3 px-4 text-[14px] font-[400] text-[#949494]'>Request Amount</th>
                                                <th className='py-3 px-4 text-[14px] font-[400] text-[#949494]'>Amount Status</th>   
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user, index) => (
                                                <tr key={index} className='border-b'>
                                                    <td className='py-4 px-4 text-[16px] font-[500] text-[#434343] flex items-center gap-2 '>
                                                        <img src={user.profileImage} alt={user.name} className='w-8 h-8 rounded-full' />
                                                          <span className=' flex flex-col gap-'>
                                                          {user.name}
                                                          <span className=' text-[10px] font-[400] text-[#737791]'>{user.email}</span>
                                                          </span>
                                                    </td>
                                                    <td className='py-3 px-4 text-[14px] font-[400] text-[#434343]'>{user.data} <span>{user.time}</span></td>
                                                    <td className='py-3 px-4 text-[14px] font-[400] text-[#434343]'>{user.amount}</td>
                                                    <td className='py-3 px-4'>
                                                        <span className={`${user.status === "paid" ? "text-[#4FAD2E] bg-[#4FAD2E1A]" : user.status === "denied" ? "text-[#E13434] bg-[#E134341A]" : user.status === "pending" ? "text-[#DD730A] border-[1px] border-[#DD730A]" : null} px-3 py-2 rounded-full text-[15px]`}>{user.status}</span>
                                                    </td>
                                                    <td className='py-3 px-4 text-[#712A8F] text-[14px] font-[400] cursor-pointer flex items-center gap-1'>
                                                         <Link to="/">View Profile</Link>
                                                         <span><MdArrowOutward /></span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
    </div>
  )
}

export default PaymentCards