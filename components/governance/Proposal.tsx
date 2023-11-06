import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Progress } from '../ui/progress'

const Proposal = () => {
  return (
    <>
      {/* FIRST SECTION */}
      <div>
        <h1 className='text-gondola text-2xl font-medium'>
          Update UI for accessibility
        </h1>

        <div className='inline-flex items-center gap-3.5'>
          <span className='w-fit flex justify-center items-center gap-2 border px-3 py-1.5 rounded-2xl border-solid border-[#FF1D43] text-[#FF1D43] text-[0.625rem] font-semibold'>
            <Image 
              src="/active.svg"
              alt="active"
              width={4}
              height={4}
              className=""
            />
            Active
          </span>

          <span className='text-[#919191] text-[0.625rem] font-semibold'>
            in 3 days
          </span>

          <span className='text-[#919191] text-[0.625rem] font-semibold flex items-center gap-1'>
            Quorum
            <Image 
              src="/cross.svg"
              alt="cross"
              width={8}
              height={8}
              className=""
            />
          </span>

          <span className='text-[#919191] text-[0.625rem] font-semibold flex items-center gap-1'>
            Differential
            <Image 
              src="/cross.svg"
              alt="cross"
              width={8}
              height={8}
              className=""
            />
          </span>
        </div>
      </div>

      {/* SECOND SECTION */}  
      <div>
        <div className=''>

          <div className='flex flex-row items-center justify-between'>
            <h2 className='text-gondola text-base font-medium'>
              YAE 200 LENSLY
            </h2>

            <div className='text-[#919191] text-sm font-medium'>
              73.00%
            </div>
          </div>

          <Progress value={73} className='bg-[#4CAF50] h-1' />
        
        </div>
        
        <div>

          <div className='flex flex-row items-center justify-between'>

            <h2 className='text-gondola text-base font-medium'>
              YAE 13 LENSLY
            </h2>
          
            <div className='text-[#919191] text-sm font-medium'>
              27.00%
            </div>
          
          </div>

          <Progress value={27} className='bg-[#FF1D43] h-1' />
       
        </div>
      </div>

    </>
  )
}

export default Proposal