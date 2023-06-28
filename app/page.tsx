import { Hero, SearchBar, Filter, CarCard,ShowMore } from '@/components'
import { fetchCars } from '@/utils/lib'
import { HomeProps } from "@/types";
import { fuels, yearsOfProduction } from '@/config/Manufacturer';
export default async function Home({ searchParams }: HomeProps) {
  const cars =  await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  const emptyCarData = !Array.isArray(cars) || cars.length < 1 || !cars
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x py-4 max-width' id='discover'>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          <h1 className='font-bold md:text-2xl xl:text-4xl'>Discover Cars</h1>
          <p className='text-grey text-base'>Explore and pick your favorite car</p>

        </div>
        <div className='mt-12 w-full flex-between items-center flex-wrap gap-5'>
          <SearchBar />
          <div className='flex justify-start flex-wrap items-center gap-2'>
            <Filter title='fuel' options={fuels}/>
            <Filter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {
          !emptyCarData ? (<section>
            <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14 '>
              {
                cars.map((car, index) => <CarCard car={car} key={index} />)
              }
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > cars.length}
            />
          </section>) : (<div className='mt-16 flex justify-center items-center flex-col gap-2'>
            <h2>Oops, no results</h2>
            <p>{cars.message}</p>
          </div>)
        }


      </div>
    </main>
  )
}
