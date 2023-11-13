import Image from "next/image"
import { Button } from "../../ui/button"

const LenslyBody = () => {
  return (
    <div className="grid grid-cols-2 gap-4">  
      <div className="shrink-0 rounded-lg border-2 border-solid border-[rgb(255,221,247)] text-center py-10 px-6">
        <div className="flex flex-col mb-10">
          <h2 className="text-gondola text-base font-semibold mb">Staked LENSLY</h2>
          <h1 className="text-gondola text-[2rem] font-medium">0</h1>
          <span className="text-[#919191] text-xs font-semibold -mt-2">$0</span>
        </div>
        <div className="flex flex-col gap-2">
          <Button className="flex justify-center items-center p-4 rounded-[100px] text-white text-base font-bold bg-[#C8C8C8]">Cooldown to unstake</Button>
          <div className="flex justify-between">
            <span className="text-[#919191] text-xs font-semibold flex items-center gap-1">
              Cooldown period
              <Image 
                src="/Info.svg"
                alt="info"
                width={10}
                height={10}
                className=""
              />
            </span>
            <span className="text-gondola text-xs font-semibold">20d</span>
          </div>
        </div>
      </div>
      
      
      <div className="shrink-0 rounded-lg border-2 border-solid border-[rgb(255,221,247)] text-center py-10 px-6">
        <div className="flex flex-col mb-10">
          <h2 className="text-gondola text-base font-semibold mb">Claimable LENSLY</h2>
          <h1 className="text-gondola text-[2rem] font-medium">0</h1>
          <span className="text-[#919191] text-xs font-semibold -mt-2">$0</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-center gap-2">
            <Button className="flex justify-center items-center py-4 px-8 rounded-[100px] text-white text-base font-bold bg-[#C8C8C8]">Claim</Button>
            <Button className="flex justify-center items-center py-4 px-5 rounded-[100px] text-white text-base font-bold bg-[#C8C8C8]">Restake</Button>
          </div> 
          <div className="flex justify-between">
            <span className="text-[#919191] text-xs font-semibold">
              Lensly per month
            </span>
            <span className="text-gondola text-xs font-semibold">0</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LenslyBody