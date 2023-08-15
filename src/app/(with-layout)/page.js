import React from 'react';
import SubNavbar from '../components/SubNavbar/SubNavbar';
import Banner from '../components/Banner/Banner';
import Categories from '../components/Categories/Categories';
import Blogs from './blogs/page';
import Popular from '../components/Popular/Popular';


export const revalidate = 5; 
const Home = () => {
    return (
        <div className=''>
            <SubNavbar></SubNavbar>
            <Banner ></Banner>
            <div className='container mx-auto grid grid-cols-12   '>
                <div className='col-span-3 hidden md:flex  mx-auto bg-white rounded-xl max-h-[550px] shadow-xl mt-5'>
                    <Categories></Categories>
                </div>
                <div className='col-span-12 md:col-span-6  mx-auto -mt-8 md:-mt-28 rounded-xl  md:mr-11  '>
                    <Blogs></Blogs>
                </div>
                <div className='col-span-3 hidden md:flex mx-auto bg-white shadow-xl mt-5 max-h-[1100px] rounded-xl '>
                    <Popular></Popular>
                </div>
            </div>
        </div>
    );
};

export default Home;