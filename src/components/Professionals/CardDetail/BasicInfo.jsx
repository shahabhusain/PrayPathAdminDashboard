import React from 'react'

const BasicInfo = () => {
  return (
    <div>
         <div className=" px-4 pt-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[14px] font-[600] text-[#434343] mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border rounded-lg p-3 text-gray-800 bg-[#F6F6F6] focus:outline-none focus:ring-1 focus:ring-purple-500"
                                        placeholder="Bransim"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-[600] text-[#434343] mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full border rounded-lg p-3 text-gray-800 bg-[#F6F6F6] focus:outline-none focus:ring-1 focus:ring-purple-500"
                                        placeholder="hanry463@gmail.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-[600] text-[#434343] mb-1">
                                        Professional Bio
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border rounded-lg p-3 text-gray-800 bg-[#F6F6F6] focus:outline-none focus:ring-1 focus:ring-purple-500"
                                        placeholder="Faith-driven church teaching professional"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-[600] text-[#434343] mb-1">
                                        Description
                                    </label>
                                    <textarea
                                        className="w-full border rounded-lg p-3 text-gray-800 bg-[#F6F6F6] focus:outline-none focus:ring-1 focus:ring-purple-500"
                                        rows="5"
                                        placeholder=' Faith-driven church teaching professional with 2 years experience.'
                                    >
                                       
                                    </textarea>
                                </div>
                            </div>
                        </div>
    </div>
  )
}

export default BasicInfo