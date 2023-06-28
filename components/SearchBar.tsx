"use client"
import * as React from 'react';
import { SearchManufacturer } from '@/components'
import Image from 'next/image'
import {useRouter} from 'next/navigation'

const Button = ({ addStyles }: { addStyles: string }) => {
    return (
        <button type='submit' className={`-ml-3 z-10 ${addStyles}`}>
            <Image src='/magnifying-glass.svg' alt='magnifying-glass' width={40} height={40} className='object-contain' />
        </button>
    )
}
export default function SearchBar() {
    const [manufacturer, setManufacturer] = React.useState<string>("")
    const [model, setModel] = React.useState<string>("")
    const router= useRouter()
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!manufacturer && !model) return alert("Please fill the search bar fields");
        updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase())
    }
    const updateSearchParams = (manufacturer: string, model: string) => {
        const params = new URLSearchParams()
        if (model) {params.append('model', model)} else{
            params.delete('model')
        }
        if (manufacturer) {params.append('manufacturer', manufacturer)} else{
            params.delete('manufacturer')
        }
        const newPathname= `${window.location.pathname}?${params.toString()}`
       router.push(newPathname)
    }
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
                <Button addStyles='sm:hidden' />
            </div>
            <div className='searchbar__item'>
                <Image src='/model-icon.png' alt='car model' width={25} height={25} className='absolute w-5 h-5 ml-4' />
                <input type="text" name='model' value={model} onChange={(e) => setModel(e.target.value)} placeholder='tiguan' className='searchbar__input' />
                <Button addStyles='sm:hidden' />
            </div>
            <Button addStyles='max-sm:hidden' />
        </form>
    );
};
