import React, { useState } from 'react'
import cart from '../../assets/cart.png'
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
const ReportsCart = () => {
    const [open, setOpen] = useState(1);

    const users = [
        { data:"Feb 1, 2021", description:"pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.", time:"04:02 am", subject:"test issue", name: 'Szűts Gabriella',  email: 'michelle.rivera@example.com', status: 'new',   profileImage: cart },
        { data:"Feb 2, 2023", description:"pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.", time:"04:02 am", subject:"test issue", name: 'Virág Mercédesz',  email: 'sara.cruz@example.com',       status: 'new', profileImage: cart },
        { data:"Feb 3, 2021", description:"pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.", time:"04:02 am", subject:"test issue", name: 'Kelemen Krisztina',email: 'debra.holt@example.com',      status: 'new',profileImage: cart },
        { data:"Feb 4, 2010", description:"pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.", time:"04:02 am", subject:"test issue", name: 'Illés Éva',        email: 'debbie.baker@example.com',    status: 'resolve', profileImage: cart },
        { data:"Feb 5, 2018", description:"pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.", time:"04:02 am", subject:"test issue", name: 'Hajdú Dominika',   email: 'georgia.young@example.com',   status: 'resolve',   profileImage: cart },
        { data:"Feb 6, 2012", description:"pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.", time:"04:02 am", subject:"test issue", name: 'László Cintia',    email: 'curtis.weaver@example.com',   status: 'resolve', profileImage: cart },
        { data:"Feb 7, 2011", description:"pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.", time:"04:02 am", subject:"test issue", name: 'Takács Bianka',    email: 'dolores.chambers@example.com',status: 'resolve',profileImage: cart },
        { data:"Feb 8, 2020", description:"pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.", time:"04:02 am", subject:"test issue", name: 'Kovács Tímea',     email: 'deanna.curtis@example.com',   status: 'disable',   profileImage: cart },
        { data:"Feb 9, 2025", description:"pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.", time:"04:02 am", subject:"test issue", name: 'Kiss Dorka',       email: 'jackson.graham@example.com',  status: 'disable',profileImage: cart },
    ];
  return (
    <div className=' mr-6'>
         <div className='flex items-center justify-between mt-8'>
                                <div className='flex items-center gap-3'>
                                    <button onClick={() => setOpen(1)} className={`py-2 px-3 rounded-md text-[12px] font-[400] ${open === 1 ? "bg-[#f0efef]" : "border-[1px] border-[#f0efef]"}`}>All</button>
                                    <button onClick={() => setOpen(2)} className={`py-2 px-3 rounded-md text-[12px] font-[400] ${open === 2 ? "bg-[#f0efef]" : "border-[1px] border-[#f0efef]"}`}>New Unseen</button>
                                    <button onClick={() => setOpen(3)} className={`py-2 px-3 rounded-md text-[12px] font-[400] ${open === 3 ? "bg-[#f0efef]" : "border-[1px] border-[#f0efef]"}`}>Pending</button>
                                    <button onClick={() => setOpen(4)} className={`py-2 px-3 rounded-md text-[12px] font-[400] ${open === 4 ? "bg-[#f0efef]" : "border-[1px] border-[#f0efef]"}`}>Resolve</button>
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
                                                                            <th className='py-3 px-4 text-[14px] font-[400] text-[#949494]'>Time</th>
                                                                            <th className='py-3 px-4 text-[14px] font-[400] text-[#949494]'>Subject</th>
                                                                            <th className='py-3 px-4 text-[14px] font-[400] text-[#949494]'>Description</th>  
                                                                            <th className='py-3 px-4 text-[14px] font-[400] text-[#949494]'>Status</th>   
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
                                                                                <td className='py-3 px-4 text-[14px] font-[400] text-[#434343]'><div className=' flex flex-col'> <span className=' text-[12px] font-[700] text-[#333A44]'>{user.data}</span> <span className=' text-[10px] font-[400]'>{user.time}</span></div></td>
                                                                                <td className='py-3 px-4 text-[14px] font-[400] text-[#434343]'>{user.subject}</td>
                                                                                <td className='py-3 px-4 text-[12px] font-[400] text-[#434343]'>{user.description}</td>
                                                                                <td className='py-3 px-4'>
                                                                                    <span className={`${user.status === "resolve" ? "text-[#4FAD2E] bg-[#4FAD2E1A]" : user.status === "disable" ? "text-[#E13434] bg-[#E134341A]" : user.status === "new" ? "text-[#712A8F] border-[1px] border-[#712A8F]" : null} px-3 py-2 rounded-full text-[15px]`}>{user.status}</span>
                                                                                </td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>


    </div>
  )
}

export default ReportsCart