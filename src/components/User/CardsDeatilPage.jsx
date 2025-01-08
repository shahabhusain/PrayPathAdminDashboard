import React from 'react';
import cartDetail from '../../assets/main.png'
const CardsDeatilPage = () => {
    return (
        <div className=" mt-6">
            <div className=" rounded-xl  overflow-hidden">
                <div className="grid grid-cols-3 gap-6">
                    {/* Left Section */}
                    <div className="col-span-1  ">
                        {/* Profile Card */}
                        <div className="flex items-center gap-3 border-[1px] py-6 px-3 border-[#0000000D] rounded-lg shadow-sm">
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

                        {/* Basic Info */}
                        <div className="mt-6 border-[1px] py-5 px-5 border-[#0000000D] rounded-lg shadow-sm">
                            <h2 className="text-lg font-medium mb-4">Basic Info</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[14px] font-[600] text-[#434343] mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border rounded-lg p-2 text-gray-800 bg-[#F6F6F6] focus:outline-none focus:ring-1 focus:ring-purple-500"
                                        placeholder="Bransim"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-[600] text-[#434343] mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full border rounded-lg p-2 text-gray-800 bg-[#F6F6F6] focus:outline-none focus:ring-1 focus:ring-purple-500"
                                        placeholder="hanry463@gmail.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-[600] text-[#434343] mb-1">
                                        Professional Bio
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border rounded-lg p-2 text-gray-800 bg-[#F6F6F6] focus:outline-none focus:ring-1 focus:ring-purple-500"
                                        placeholder="Faith-driven church teaching professional"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-[600] text-[#434343] mb-1">
                                        Description
                                    </label>
                                    <textarea
                                        className="w-full border rounded-lg p-2 text-gray-800 bg-[#F6F6F6] focus:outline-none focus:ring-1 focus:ring-purple-500"
                                        rows="3"
                                        placeholder=' Faith-driven church teaching professional with 2 years experience.'
                                    >
                                       
                                    </textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-span-2 p-6 border-[1px] py-5 px-5 border-[#0000000D] rounded-lg shadow-sm mr-6">
                        {/* Reviews Section */}
                        <h2 className="text-lg font-medium mb-4">Reviews</h2>
                        <div className=" space-y-4">
                            {[1, 2, 3, 4].map((_, index) => (
                                <div className=''>
                                <div
                                    key={index}
                                    className="flex  gap-4 "
                                >
                                    <img
                                        src={cartDetail}
                                        alt="Reviewer"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-sm font-semibold">
                                                    Kristin Watson
                                                </h3>
                                                <p className="text-xs text-gray-500">
                                                    Indonesia
                                                </p>
                                            </div>
                                            <span className="text-xs text-gray-400">2 min ago</span>
                                        </div>
                                      
                                    </div>
                                    
                                </div>
                                <div>
                                       <div className="flex items-center text-yellow-400 mt-1 ">
                                            {'★★★★★'.split('').map((star, i) => (
                                                <span key={i}>{star}</span>
                                            ))}
                                        </div>
                                        <p className="text-sm text-gray-700 mt-2">
                                            Duis at ullamcorper nulla, eu dictum eros.
                                        </p>
                                       </div>
                                       <div className=' h-[1px] w-full bg-[#0000000D] mt-4'></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardsDeatilPage;
