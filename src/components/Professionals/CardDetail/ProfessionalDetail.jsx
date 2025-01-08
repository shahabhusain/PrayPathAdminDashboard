import React, { useState } from 'react'
import cartDetail from '../../../assets/main.png'
import BasicInfo from './BasicInfo'
import Media from './Media'
import Review from './Review'
const ProfessionalDetail = () => {
    const [open, setOpen] = useState(1)
  return (
    <div className=' flex justify-between mt-8'>
        {/*  */}
        <div className=' w-[32%]  "'>
        <div className="border-[1px] px-3 py-3  border-[#0000000D] rounded-lg shadow-sm">
                             <div className='flex items-center gap-3'>
                             <img
                                src={cartDetail}
                                alt="Profile"
                                className="w-[70px] h-[70px] rounded-full object-cover "
                            />
                            <div className=' flex items-center gap-3'>
                              <div>
                              <h1 className="text-[24] text-[#181B20] font-semibold">Bransim Hanry</h1>
                            <p className="text-[10px] font-[400] text-[#949494] max-w-[152px]">
                                Faith-driven church teaching professional
                            </p>
                              </div>
                            <button className=" px-4 py-2 text-[12px] font-[500] border-[1px] border-[#712A8F] text-[#712A8F] rounded-full">
                                Disable User
                            </button>
                            </div>
                             </div>
                            <div className=' flex items-center gap-6 mt-4'>
                                <h1 className=' bg-[#F3F3F6] w-[170px] h-[100px] py-3 px-4 rounded-xl text-[#222222E5] font-[500] text-[16px]'>Total Earning    <span className=' text-[20px] font-[700] text-[#712A8F]'>$890</span></h1>
                                <h1 className=' bg-[#F3F3F6] w-[170px] h-[100px] py-3 px-4 rounded-xl text-[#222222E5] font-[500] text-[16px]'>Pending Payments <span className=' text-[20px] font-[700] text-[#712A8F]'>$430</span></h1>
                            </div>
                            </div>

         <div className='border-[1px] px-3 py-3 mt-5  border-[#0000000D] rounded-lg shadow-sm'>
              <div className=' flex flex-col gap-3 '>
              <h1 className=' text-[#434343] font-[600] text-[18px]'>Packages</h1>
                <div className=' w-[360px] h-[110px] bg-[#F3F3F6] py-3 rounded-md px-3'>
                    <div className=' flex items-center justify-between'>
                    <h1 className=' flex flex-col gap-1 text-[#434343] font-[700] text-[18px]'><span className='text-[12px] font-[500] text-[#949494]'>Session Duration</span> 30 mins</h1>
                    <p className='text-[#434343] font-[700] text-[18px]'>$100 USD</p>
                     
                    </div>
                    <div className=' h-[1px] w-full bg-[#0000000D] mt-2'></div>
                     <p className=' text-[14px] font-[400] text-[#949494] mt-1'>In-depth review with tailored recommendations.</p>
                </div>

                <div className=' w-[360px] h-[110px] bg-[#F3F3F6] py-3 rounded-md px-3'>
                    <div className=' flex items-center justify-between'>
                    <h1 className=' flex flex-col gap-1 text-[#434343] font-[700] text-[18px]'><span className='text-[12px] font-[500] text-[#949494]'>Session Duration</span> 30 mins</h1>
                    <p className='text-[#434343] font-[700] text-[18px]'>$100 USD</p>
                     
                    </div>
                    <div className=' h-[1px] w-full bg-[#0000000D] mt-2'></div>
                     <p className=' text-[14px] font-[400] text-[#949494] mt-1'>In-depth review with tailored recommendations.</p>
                </div>

                <div className=' w-[360px] h-[110px] bg-[#F3F3F6] py-3 rounded-md px-3'>
                    <div className=' flex items-center justify-between'>
                    <h1 className=' flex flex-col gap-1 text-[#434343] font-[700] text-[18px]'><span className='text-[12px] font-[500] text-[#949494]'>Session Duration</span> 30 mins</h1>
                    <p className='text-[#434343] font-[700] text-[18px]'>$100 USD</p>
                     
                    </div>
                    <div className=' h-[1px] w-full bg-[#0000000D] mt-2'></div>
                     <p className=' text-[14px] font-[400] text-[#949494] mt-1'>In-depth review with tailored recommendations.</p>
                </div>


                


                
              </div>
         </div>
        </div>
        {/*  */}

        <div className='w-[65%] mr-6 '>
            <div className='border-[1px] px-3 py-3  border-[#0000000D] rounded-lg shadow-sm '>
                <div className=' bg-[#F8F8F8] py-2 px-3 rounded-md w-fit'>
                    <button onClick={() => setOpen(1)} className={` py-2 px-3 text-[16px] font-[500] rounded-sm${open === 1 ? " bg-white shadow-sm" : " text-[#949494]"}`}>Basic Info</button>
                    <button onClick={() => setOpen(2)} className={` py-2 px-3 text-[16px] font-[500] rounded-sm${open === 2 ? " bg-white shadow-sm" : " text-[#949494]"}`}>Media Upload</button>
                    <button onClick={() => setOpen(3)} className={` py-2 px-3 text-[16px] font-[500] rounded-sm${open === 3 ? " bg-white shadow-sm" : " text-[#949494]"}`}>Review</button>
                </div>

                {
                    open === 1 ? <><BasicInfo /></> : open === 2 ? <><Media /></> : open === 3 ? <><Review /></> : null
                }
            </div>
        </div>
    </div>
  )
}

export default ProfessionalDetail