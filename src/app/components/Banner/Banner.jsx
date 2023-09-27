import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <Image alt="this is rendering image"height={800} width={2500}  className=' mt-3 max-w-full'  src="https://openlisthtml.themever.net/images/banner.jpg"></Image>
        </div>
    );
};

export default Banner;