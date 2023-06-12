"use client"
import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';
interface HeroProps {

};

export default function Hero({ }) {
    const handleScroll = () => { }
    return (
        <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
            <div className='flex-1 pt-36 sm:px-16 px-6'>
                <h1 className='2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold'>Search, reserve, experience freedom on wheels—swift</h1>
                <p className='text-[27px] text-black-100 font-light mt-5'>Simplify your car rental experience with our smooth and streamlined booking.</p>
                <CustomButton className='bg-primary-blue text-white rounded-full mt-10' onClick={handleScroll}>
                    Explore Cars
                </CustomButton>
            </div>
            <div className='xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen'>
                <div className='relative xl:w-full w-[90%] xl:h-full h-[590px] z-0 '>
                    <Image src={'/hero.png'} fill className='object-contain' alt='Hero' />
                    <div className='-z-10 xl:h-screen -right-1/4 w-full absolute bg-hero-bg xl:-right-1/2 xl:-top-24 bg-repeat-round h-[590px] md:h-[800px] overflow-hidden'/>
                </div>
            </div>
        </div>
    );
};
