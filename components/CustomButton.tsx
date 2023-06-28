"use client"
import { ButtonHTMLAttributes, } from 'react';
import Image from 'next/image'
interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string
    isDisabled?: boolean
};

export default function CustomButton({ className, children, onClick, icon }: CustomButtonProps) {
    return (
        <button className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${className}`} onClick={onClick}>
            <span className='flex-1'>

                {children}
             
            </span>
            {icon && 
                <div className='relative w-6 h-6'>
                        <Image src={icon} alt='right icon' fill className='object-contain'/>
                </div>}
        </button>
    );
};
