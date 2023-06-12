"use client"
import * as React from 'react';
import {SearchManufacturer} from '@/components'
interface SearchBarProps {
    handleSearch?:()=>void
};

export default function SearchBar({handleSearch }:SearchBarProps) {
    const [manufacturer, setManufacturer] = React.useState<string>("")
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
            </div>
        </form>
    );
};
