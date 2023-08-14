import React from 'react';
import Discount from './Discount';
import PopularPost from './PopularPost';
import PopularImages from './PopularImages';

const Popular = () => {
    return (
        <div className='px-5 py-5'>
            <Discount></Discount>
            <PopularPost></PopularPost>
            <PopularImages></PopularImages>
        </div>
    );
};

export default Popular;