import React from 'react';
import CategoriesIcon from './CategoriesIcon';
import Interest from './Interest';
import Profile from './Profile';

const Categories = () => {
    return (
        <div className='px-5 py-5  '>
            <p className='text-[16px] text-gray-600 font-semibold'>POST CATEGORIES</p>
            <hr className='border my-3' />

            <CategoriesIcon></CategoriesIcon>
            <Interest></Interest>
            <Profile></Profile>
        </div>
    );
};

export default Categories;