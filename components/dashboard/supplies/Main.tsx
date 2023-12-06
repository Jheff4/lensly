import React from 'react'
import Supplies from './Supplies'

const Main = () => {
  return (
    <div className='max-xl:w-full max-lg:mb-16'>
      <h1 className='shrink-0 bg-ebonyClay rounded-t-lg border border-solid py-6 px-4 max-xl:px-10 max-xl:border-b-0 border-stormGray text-white text-[2rem] font-medium'>
        Your Supplies
      </h1>
      <Supplies />
    </div>
  )
}

export default Main