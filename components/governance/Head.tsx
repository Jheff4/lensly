import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Proposal from './Proposal'
import ProposalHead from './ProposalHead'
import Info from './Info'


const Head = () => {
  return (
    <div>
      <Tabs defaultValue="proposals" className="w-full ease-in md:hidden flex items-center flex-col mt-[4rem]">
        <TabsList className="flex flex-row justify-between border bg-white rounded-[100px] items-center border-solid border-[#FFDDF7] w-fit p-1.5">
          <TabsTrigger className="aria-selected:bg-cardinalPink aria-selected:text-white text-sm px-[3.7rem] sm:px-[4rem] font-semibold rounded-[100px] text-[#919191]" value="proposals">Proposals</TabsTrigger>
          <TabsTrigger className="aria-selected:bg-cardinalPink aria-selected:text-white text-sm px-[3.7rem] sm:px-[4rem] font-semibold rounded-[100px] text-[#919191]" value="info">Your info</TabsTrigger>
        </TabsList>

        <TabsContent 
          value="proposals"
          className="shrink-0 border bg-white w-full rounded-lg border-solid border-[#FFDDF7] px-6 pt-9 pb-0 sm:px-8 mt-[2rem]"
        >
          <ProposalHead />
          <Proposal />
          <Proposal />
        </TabsContent>

        <TabsContent 
          value="info"
          className="shrink-0 border bg-white w-full rounded-lg border-solid border-[#FFDDF7]"
        >
          <Info />
        </TabsContent>
      </Tabs>

      <div className='max-md:hidden'>
        <div>
          <ProposalHead />
          <Proposal />
        </div>

        <div>
          <Info />
        </div>
      </div>
    </div>
  )
}

export default Head