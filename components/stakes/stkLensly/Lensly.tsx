import Image from "next/image"
import { Button } from "../../ui/button"

const Lensly = () => {
  return (     
    <div className="flex flex-row justify-between rounded-lg border-2 border-solid border-[#FFDDF7] mt-8 mb-8 py-[1.7rem] px-4">
      <span className="text-gondola text-base font-semibold flex gap-1 xl:w-[3rem] items-center bg-white">
        <Image 
          src="/logo2.svg"
          alt="lensly"
          width={25}
          height={25}
          className=""
        />
        Lensly
      </span>

      <div className="flex flex-row gap-4">
        <div className="flex flex-col text-center">
          <span className="text-[#919191] text-xs font-semibold">Staking APR</span>
          <span className='text-[#291720] text-base font-semibold'>6.88%</span>
        </div>

        <div className="flex flex-col text-center">
          <span className="text-[#919191] text-xs font-semibold">Max Slashing</span>
          <span className='text-[#291720] text-base font-semibold'>32.2%</span>
        </div>

        <div className="flex flex-col text-center">
          <span className="text-[#919191] text-xs font-semibold">Wallet Balance</span>
          <span className='text-[#291720] text-base font-semibold'>500</span>
        </div>
      </div>

      <Button className="flex justify-center items-center gap-2.5 py-4 px-[1.17rem] rounded-[100px] bg-cardinalPink-100 text-white text-base font-bold">Stake</Button>
    </div>
  )
}

export default Lensly