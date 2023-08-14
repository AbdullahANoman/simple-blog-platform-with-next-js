import Image from 'next/image';
import React from 'react';
import { FaStar ,FaChartBar } from "react-icons/fa";
import { BsStopwatch,BsImage } from "react-icons/bs";
const CategoriesIcon = () => {
    return (
        <div className='flex justify-center gap-5 mt-5'>
            <div className='border-gray-400 border px-2 py-2 hover:bg-[#FF7141] hover:border-none duration-500' style={{borderRadius: '50%'}}>
                <FaStar className='text-gray-500' size={18} title='Rate Post'></FaStar>
            </div>
            <div className='border-gray-400 border px-2 py-2 hover:bg-[#FF7141] hover:border-none duration-500' style={{borderRadius: '50%'}}>
                <BsStopwatch className='text-gray-500' size={18}></BsStopwatch>
            </div>
            <div className='border-gray-400 border px-2 py-2 hover:bg-[#FF7141] hover:border-none duration-500' style={{borderRadius: '50%'}}>
                <Image alt="this is rendering image"height={20} width={20} src="https://openlisthtml.themever.net/images/icons/sound.png"></Image>
            </div>
            <div className='border-gray-400 border px-2 py-2 hover:bg-[#FF7141] hover:border-none duration-500' style={{borderRadius: '50%'}}>
                <BsImage className='text-gray-500' size={18}></BsImage>
            </div>
            <div className='border-gray-400 border px-2 py-2 hover:bg-[#FF7141] hover:border-none duration-500' style={{borderRadius: '50%'}}>
                <FaChartBar className='text-gray-500' size={18}></FaChartBar>
            </div>
        
        </div>
    );
};

export default CategoriesIcon;