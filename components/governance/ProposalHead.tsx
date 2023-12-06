"use client"

import { Input } from '../ui/input'
import Image from 'next/image'
import DropDown from './DropDown'
import React, { useState } from 'react';
import Modal from '../SearchDialog';

const ProposalHead = () => {

  const [search, setSearch] = 
    React.useState<any>("");

  return (
    <>
      {/* <Proposal /> */}
      <div className='flex flex-row items-start mb-8 gap-5'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-white text-2xl font-medium'>
            Proposals
          </h1>
          <div className="inline-flex items-center gap-4">
            <p className='text-alto text-sm font-semibold'>Filter</p>
            <DropDown />
          </div>
        </div>

        <div className="flex flex-row w-full justify-end">
          <Input 
            className="w-[10rem] max-lg:w-[15rem] ml-2 bg-mirage border rounded-[100px] rounded-r-none border-r-0 border-solid border-stormGray text-alto text-xs font-semibold max-md:hidden"
            type="search" 
            placeholder="Search Proposal"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="w-fit border rounded-[100px] rounded-l-none border-l-0 border-solid border-stormGray flex pr-6 cursor-pointer bg-mirage items-center max-md:border-none max-md:p-0 max-md:hidden">
            <Image 
              src="/Search.svg"
              alt="search"
              width={20}
              height={20}
              className=""
            />
          </div>
          <Modal 
            search {...search}
            setSearch {...setSearch}
          />
        </div>
      </div>
    </>
  )
}

export default ProposalHead