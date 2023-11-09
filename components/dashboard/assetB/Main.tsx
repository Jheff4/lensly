import React from 'react'
import Supplies from './Supplies'

const Main = () => {
  return (
    <div className='w-1/2'>
      <h1 className='shrink-0 bg-white rounded-t-lg border-2 border-solid py-8 px-6 border-[rgba(255,221,247,0.87)] text-gondola text-[2rem] font-medium'>
        Your Supplies
      </h1>
      <Supplies />
    </div>
  )
}

export default Main