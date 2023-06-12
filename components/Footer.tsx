import React from 'react';
import Image from 'next/image';
import { footerElements } from '@/config/footer';
import Link from 'next/link';
interface FooterProps {

};

export default function Footer({ }) {
    return (
        <footer className=' px-6 border-t '>
            <div className='flex flex-col xl:flex-row items-start justify-center py-8'>
                <div className='flex-1'>
                    <Image src={'/logo.svg'} alt='Logo' width={118} height={20} />
                    <p className='text-grey font-medium mt-2'>
                        Carhub 2023 <br />
                        All Rights Reserved ©</p>

                </div>

                {
                    footerElements.map((element, index) =>
                        <div key={element.title} className={`flex flex-col items-center ${index === footerElements.length - 1 ? "xl:mr-44" : "xl:mx-14"} gap-4 mt-8 xl:m-0`}>
                            <p className='font-bold text-black-100 text-left w-full'>{element.title}</p>
                            {element.childrens.map(children => <Link className=' w-full text-left text-grey' key={children.id} href={children.href}>
                                {children.title}
                            </Link>)}
                        </div>)
                }
            </div>

            <div className='flex flex-col xl:flex-row items-center w-full justify-between px-6 border-t py-8'>
                <p className=' text-grey'>@2023 CarHub. All rights reserved</p>
                <div className='xl:mr-44  text-grey flex gap-2'>
                    <Link href={''}>
                        Privacy & Policy
                    </Link>
                    <Link href={''}>
                    Terms & Condition
                    </Link>
                </div>
            </div>
        </footer>
    );
};
