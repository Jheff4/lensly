import Image from "next/image"
import { Button } from "../../ui/button"

const LTNBody = () => {
  return (
    <div className="grid grid-cols-2 gap-4 max-xl:grid-cols-1 max-lg:rounded-lg max-lg:border max-lg:border-solid max-lg:border-stormGray bg-ebonyClay max-lg:py-6 max-lg:px-4">  
      <div className="shrink-0 rounded-lg border border-solid border-stormGray text-center py-10 px-6">
        <div className="flex flex-col mb-10">
          <h2 className="text-white text-base font-semibold mb">Staked LTN</h2>
          <h1 className="text-white text-[2rem] font-medium">0</h1>
          <span className="text-alto text-xs font-semibold -mt-2">$0</span>
        </div>
        <div className="flex flex-col gap-2">
          <Button className="flex justify-center items-center p-4 main-btn text-white text-base font-bold">Cooldown to unstake</Button>
          <div className="flex justify-between">
            <span className="text-alto text-xs font-semibold flex items-center gap-1">
              Cooldown period
              <Image 
                src="/Info.svg"
                alt="info"
                width={10}
                height={10}
                className=""
              />
            </span>
            <span className="text-white text-xs font-semibold">20d</span>
          </div>
        </div>
      </div>
      
      
      <div className="shrink-0 rounded-lg border border-solid border-stormGray text-center py-10 px-6">
        <div className="flex flex-col mb-10">
          <h2 className="text-white text-base font-semibold mb">Claimable LTN</h2>
          <h1 className="text-white text-[2rem] font-medium">0</h1>
          <span className="text-alto text-xs font-semibold -mt-2">$0</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-center gap-2 max-xl:flex-col">
            <Button className="flex justify-center items-center py-4 px-8 main-btn text-white w-full text-base font-bold">Claim</Button>
          </div> 
          <div className="flex justify-between">
            <span className="text-alto text-xs font-semibold">
              Lensly per month
            </span>
            <span className="text-white text-xs font-semibold">0</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LTNBody