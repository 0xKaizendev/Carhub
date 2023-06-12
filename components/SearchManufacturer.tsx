"use client"
import * as React from 'react';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image'
import { carManufacturers } from '@/config/Manufacturer';
interface SearchManufacturerProps {
    manufacturer: string
    setManufacturer: React.Dispatch<React.SetStateAction<string>>
};

export default function SearchManufacturer({ manufacturer, setManufacturer }: SearchManufacturerProps) {
    const [query, setQuery] = React.useState("")
    const filteredManufacturer: string[] = query === '' ? carManufacturers : carManufacturers.filter((item) => (
        item.toLocaleLowerCase().replace(/\s+/g, "").includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
    ))
    return (
        <div className='search-manufacturer'>
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className='relative w-full'>
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image src='/car-logo.svg' width={20} height={20} className='ml-4' alt='Car Logo' />
                    </Combobox.Button>
                    <Combobox.Input className='search-manufacturer__input' placeholder='Volkswagen' displayValue={((manufacturer: string) => manufacturer)} onChange={(e) => setQuery(e.target.value)} />

                    <Transition as={React.Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0' afterLeave={() => setQuery('')}>
                        <Combobox.Options className='search-manufacturer__options'>
                            {
                                filteredManufacturer.length === 0 && query !== '' ? (
                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                        Nothing found.
                                    </div>
                                ) :
                                    (filteredManufacturer.map(item => (<Combobox.Option value={item} key={item} className={({ active }) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}>
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {item}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                            }`}
                                                    >
                                                        {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>)))
                            }
                        </Combobox.Options>

                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};
