import { loadPopularImages } from '@/utils/loadPopularImages';
import Image from 'next/image';
import React from 'react';

const PopularImages = async() => {
    const popularImages = await loadPopularImages();
    return (
        <div>
            <p>Images</p>
            <hr />
            <div className='grid grid-cols-3 gap-2 mt-3'>
                {
                    popularImages.map((popularImage,index)=>(
                        <Image key={index} alt="this is rendering image"height={60} width={110} src={popularImage?.popularImage}></Image>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularImages;