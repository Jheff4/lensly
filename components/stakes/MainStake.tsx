import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MainLen from "./stkLensly/MainLen"
import MainLTN from "./stkLTN/MainLTN"

const MainStake = () => {
  return (
    <div>
      <Tabs defaultValue="stake lensly" className="w-full ease-in lg:hidden flex items-center flex-col mt-[4rem]">
        <TabsList className="flex flex-row justify-between border bg-cardinalPink rounded-[100px] items-center w-fit p-1.5">
          <TabsTrigger className="aria-selected:bg-white aria-selected:text-gondola text-sm max-xs:px-[1.5rem] px-[1rem] sm:px-[2rem] font-semibold rounded-[100px] text-treePoppy-100" value="stake lensly">Stake LENSLY</TabsTrigger>
          <TabsTrigger className="aria-selected:bg-white aria-selected:text-gondola text-sm max-xs:px-[1.5rem] px-[2rem] sm:px-[3rem] font-semibold rounded-[100px] text-treePoppy-100" value="stake LTN">Stake LTN</TabsTrigger>
        </TabsList>

        <TabsContent 
          value="stake lensly"
          className="shrink-0 w-full sm:px-[4rem] md:px-[8rem] mt-[2rem]"
        >
          <MainLen />
        </TabsContent>

        <TabsContent 
          value="stake LTN"
          className="shrink-0 w-full sm:px-[4rem] md:px-[8rem] mt-[2rem]"
        >
          <MainLTN />
        </TabsContent>
      </Tabs>

      <div className="max-xl:mt-20
      max-xl:px-[2rem] max-lg:px-[9rem] max-md:px-[3rem] max-sm:px-0 lg:grid lg:grid-cols-2 lg:gap-4 max-w-screen-2xl mx-auto max-lg:hidden">
        <MainLen />
        <MainLTN />
      </div>
    </div>
  )
}

export default MainStake