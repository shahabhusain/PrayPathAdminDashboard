import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import cart from '../../assets/cart.png'
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
const Cards = () => {
    const [open, setOpen] = useState(1);

    // Sample user data
    const users = [
        { name: 'Szűts Gabriella', email: 'michelle.rivera@example.com', status: 'Disabled', profileImage: cart },
        { name: 'Virág Mercédesz', email: 'sara.cruz@example.com', status: 'Disabled', profileImage: cart },
        { name: 'Kelemen Krisztina', email: 'debra.holt@example.com', status: '', profileImage: cart },
        { name: 'Illés Éva', email: 'debbie.baker@example.com', status: '', profileImage: cart },
        { name: 'Hajdú Dominika', email: 'georgia.young@example.com', status: '', profileImage: cart },
        { name: 'László Cintia', email: 'curtis.weaver@example.com', status: '', profileImage: cart },
        { name: 'Takács Bianka', email: 'dolores.chambers@example.com', status: '', profileImage: cart },
        { name: 'Kovács Tímea', email: 'deanna.curtis@example.com', status: '', profileImage: cart },
        { name: 'Kiss Dorka', email: 'jackson.graham@example.com', status: 'Disabled', profileImage: cart },
    ];

    return (
        <div className='mr-6'>
            {/* Filter and search */}
            <div className='flex items-center justify-between  mt-8'>
                <div className='flex items-center gap-3'>
                    <button onClick={() => setOpen(1)} className={`py-2 px-3 rounded-md text-[12px] font-[400] ${open === 1 ? "bg-[#f0efef]" : "border-[1px] border-[#f0efef]"}`}>All</button>
                    <button onClick={() => setOpen(2)} className={`py-2 px-3 rounded-md text-[12px] font-[400] ${open === 2 ? "bg-[#f0efef]" : "border-[1px] border-[#f0efef]"}`}>New User</button>
                    <button onClick={() => setOpen(3)} className={`py-2 px-3 rounded-md text-[12px] font-[400] ${open === 3 ? "bg-[#f0efef]" : "border-[1px] border-[#f0efef]"}`}>Disable User</button>
                </div>
                <span className='bg-[#F8F8F8] py-2 px-3 rounded-2xl flex gap-1 items-center'>
                    <FiSearch /> 
                    <input className='focus:outline-none bg-transparent text-[#434343]' type="text" placeholder='Search' />
                </span>
            </div>

            {/* Table */}
            <div className='mt-6'>
                <table className='w-full border-collapse'>
                    <thead>
                        <tr className='text-left border-b-[#e8e7e7] border-b-[1px]'>
                            <th className='py-3 px-4 text-[14px] font-[400] text-[#949494]'>Name</th>
                            <th className='py-3 px-4 text-[14px] font-[400] text-[#949494]'>Email Address</th>
                            <th className='py-3 px-4 text-[14px] font-[400] text-[#949494]'>Account Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className='border-b'>
                                <td className='py-4 px-4 flex items-center gap-3 text-[16px] font-[500] text-[#434343]'>
                                    <img src={user.profileImage} alt={user.name} className='w-8 h-8 rounded-full' />
                                    {user.name}
                                </td>
                                <td className='py-3 px-4 text-[14px] font-[400] text-[#434343]'>{user.email}</td>
                                <td className='py-3 px-4'>
                                    {user.status ? (
                                        <span className='text-[#E13434] bg-[#E134341A] px-3 py-2 rounded-full text-[15px]'>{user.status}</span>
                                    ) : '-'}
                                </td>
                                <td className='py-3 px-4 text-[#712A8F] text-[14px] font-[400] cursor-pointer flex items-center gap-1'>
                                     <Link to="/cartsdetail">View Profile</Link>
                                     <span><MdArrowOutward /></span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Cards;
