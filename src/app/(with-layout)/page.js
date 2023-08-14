import React from 'react';
import SubNavbar from '../components/SubNavbar/SubNavbar';
import Banner from '../components/Banner/Banner';
import Categories from '../components/Categories/Categories';
import Blogs from './blogs/page';
import Popular from '../components/Popular/Popular';

const Home = () => {
    return (
        <div className=''>
            <SubNavbar></SubNavbar>
            <Banner ></Banner>
            <div className='container mx-auto grid grid-cols-12   '>
                <div className='col-span-3 mx-auto bg-white shadow-xl mt-5'>
                    <Categories></Categories>
                </div>
                <div className='col-span-6 mx-auto -mt-28 rounded-xl  bg-white mr-11  shadow-xl'>
                    <Blogs></Blogs>
                </div>
                <div className='col-span-3 mx-auto bg-white shadow-xl mt-5'>
                    <Popular></Popular>
                </div>
            </div>
        </div>
    );
};

export default Home;