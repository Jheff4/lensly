import React from 'react'
import Supplies from './Supplies'

const Main = () => {
  return (
    <div className='max-xl:w-full max-lg:mb-16'>
      <h1 className='shrink-0 bg-white rounded-t-lg border-2 border-solid py-6 px-4 max-xl:px-10 max-xl:border-b-0 border-[rgba(255,221,247,0.87)] text-gondola text-[2rem] font-medium'>
        Your Supplies
      </h1>
      <Supplies />
    </div>
  )
}

export default Main