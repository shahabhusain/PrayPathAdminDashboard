import React from 'react'
import CartDetail from '../../../assets/cart.png'
const Review = () => {
  return (
    <div>
         <div className=" px-4 pt-12">
                        {/* Reviews Section */}
                        <div className=" space-y-4">
                            {[1, 2, 3, 4].map((_, index) => (
                                <div className=''>
                                <div
                                    key={index}
                                    className="flex  gap-4 "
                                >
                                    <img
                                        src={CartDetail}
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
  )
}

export default Review