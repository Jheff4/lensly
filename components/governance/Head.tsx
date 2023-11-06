import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Proposal from './Proposal'
import ProposalHead from './ProposalHead'
import Info from './Info'


const Head = () => {
  return (
    <div>
      <Tabs defaultValue="proposals" className="w-full ease-in lg:hidden flex items-center flex-col mt-[4rem]">
        <TabsList className="flex flex-row justify-between border bg-white rounded-[100px] items-center border-solid border-[#FFDDF7] w-fit p-1.5">
          <TabsTrigger className="aria-selected:bg-cardinalPink aria-selected:text-white text-sm max-xs:px-[2rem] px-[3rem] sm:px-[4rem] font-semibold rounded-[100px] text-[#919191]" value="proposals">Proposals</TabsTrigger>
          <TabsTrigger className="aria-selected:bg-cardinalPink aria-selected:text-white text-sm max-xs:px-[2rem] px-[3rem] sm:px-[4rem] font-semibold rounded-[100px] text-[#919191]" value="info">Your info</TabsTrigger>
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
          className="shrink-0 border bg-white w-full rounded-lg border-solid border-[#FFDDF7] px-6 py-9 sm:px-8 mt-[2rem]"
        >
          <Info />
        </TabsContent>
      </Tabs>

      <div className='max-lg:hidden flex flex-row items-start gap-4 justify-center mt-[4.5rem]'>
        <div className='max-lg:max-w-fit shrink-0 bg-white rounded-lg border-2 border-solid border-[#FFDDF7] px-6 py-10 sm:px-8'>
          <ProposalHead />
          <Proposal />
          <Proposal />
          <Proposal />
          <Proposal />
        </div>

        <div className='max-w-[20.5rem] shrink-0 bg-white rounded-lg border-2 border-solid border-[#FFDDF7] px-6 py-10 sm:px-8'>
          <Info />
        </div>
      </div>
    </div>
  )
}

export default Head