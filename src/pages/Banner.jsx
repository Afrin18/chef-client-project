import React from 'react';
import banner from '../../public/how-to-become-a-chef.jpg'

const Banner = () => {
    return (
        <div className='lg:flex justify-evenly items-center gap-y-5 lg:bg-base-200'>
            <div>
                <h2 className='text-5xl font-semibold font-serif text-green-700'>Let's Start <br/> Cooking With <br/> Popular Recipes </h2>
                <p className='mt-4'>Want to learn cook but confused how to start?</p>
                <p className='mb-4'>No need to worry again!</p>
            </div>

            <div>
                <img className='lg:max-w-lg lg:max-h-screen' src={banner} alt=""/>
            </div>           
        </div>
    );
};

export default Banner;