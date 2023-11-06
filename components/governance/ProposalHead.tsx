"use client"

import { Input } from '../ui/input'
import Image from 'next/image'
import DropDown from './DropDown'

const ProposalHead = () => {

  return (
    <>
      {/* <Proposal /> */}
      <div className='flex flex-row items-start'>
        <div className='flex flex-col md:flex-row md:items-center'>
          <h1 className='text-gondola text-2xl font-medium'>
            Proposals
          </h1>
          <div className="inline-flex items-center gap-4">
            <p className='text-[#919191] text-sm font-semibold'>Filter</p>
            <DropDown />
          </div>
        </div>

        <div className="flex flex-row w-full justify-end">
          <Input 
            className="max-w-[20rem] border rounded-[100px] rounded-r-none border-r-0 border-solid border-[#FFDDF7] text-[rgba(145,145,145,0.48)] text-xs font-semibold max-md:hidden"
            type="search" 
            placeholder="Search Proposal"
          />
          <div className="w-fit border rounded-[100px] rounded-l-none border-l-0 border-solid border-[#FFDDF7] flex pr-6 cursor-pointer bg-white items-center max-md:border-none max-md:p-0">
            <Image 
              src="/Search.svg"
              alt="search"
              width={20}
              height={20}
              className=""
            />
          </div>
        </div>

      </div>
    </>
  )
}

export default ProposalHead

{/* <Image
  src="/down.svg"
  alt="down"
  width={10}
  height={10}
  className=""
/> */}