import { Hero,SearchBar,Filter } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x py-4 max-width' id='discover'>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          <h1 className='font-bold md:text-2xl xl:text-4xl'>Discover Cars</h1>
          <p className='text-grey text-base'>Explore and pick your favorite car</p>

        </div>
        <div className='mt-12 w-full flex-between items-center flex-wrap gap-5'>
          <SearchBar/>
          <SearchBar/>
          <div className='flex justify-start flex-wrap items-center gap-2'>
        <Filter/>
          </div>
        </div>
      </div>
    </main>
  )
}
