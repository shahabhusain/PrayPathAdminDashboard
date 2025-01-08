import React from 'react';
import image from '../../../assets/image.png'
import { FaPlay } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegImages } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
const Media = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold text-black mb-6">Media</h1>

      {/* Intro Video Section */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-2 flex items-center">
          <span className="material-icons text-gray-600 mr-2"><FaRegCirclePlay /></span> Intro Video
        </h2>
        <div className=" rounded-lg relative">
              <img className='w-[200px] h-[120px]' src={image} alt="" />
              <button className=' absolute top-[2.5rem] left-20 bg-[#5C5C5C] py-3 px-3 rounded-full text-white'><FaPlay /></button>
        </div>
      </div>

      {/* Images Section */}
      <div>
        <h2 className="text-lg font-medium mb-2 flex items-center">
          <span className="material-icons text-gray-600 mr-2"><FaRegImages /></span> Images
        </h2>
        <div className="flex space-x-4">
          {/* Example images */}
          {[
             image,
             image,
             image,
             image,
          ].map((image, index) => (
            <div
              key={index}
              className="relative w-[150px] h-[100px] rounded-lg overflow-hidden bg-gray-200"
            >
              <img src={image} alt="image" className="w-full h-full object-cover" />
              <button className="absolute top-2 right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center">
                <span className="material-icons text-sm"><MdDelete /></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
