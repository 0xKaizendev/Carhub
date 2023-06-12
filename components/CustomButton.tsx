"use client"
import { ButtonHTMLAttributes, forwardRef, } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

};

export default function CustomButton({ className, children, onClick }: CustomButtonProps) {
    return (
        <button className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${className}`} onClick={onClick}>
            <span className='flex-1'>

            </span>
            {children}
        </button>
    );
};
