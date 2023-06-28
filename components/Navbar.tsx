import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';
import Link from 'next/link';
export default function Navbar({ }) {
    return (
        <header className=' absolute w-full z-10'>
            <nav className='sm:px-16 px-6 flex items-center justify-between p-2 max-w-screen-2xl mx-auto py-4 '>
                <div className='w-[150px] h-full relative'>
                    <Link href='/'  >
                        <Image src={'/logo.svg'} alt='Carhub Logo' width={118} height={20} className='object-contain' />
                    </Link>

                </div>
                <CustomButton className='bg-primary-blue text-white xl:text-black-100 xl:bg-white rounded-full font-medium'>
                    Sign in
                </CustomButton>
            </nav>

        </header>
    );
};
