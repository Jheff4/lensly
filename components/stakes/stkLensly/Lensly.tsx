import Image from "next/image"
import { Button } from "../../ui/button"

const Lensly = () => {
  return (     
    <div className="flex flex-row justify-between bg-ebonyClay rounded-lg border border-solid border-stormGray mt-8 max-lg:mt-0 mb-8 max-xl:mb-6 max-lg:mb-2 py-[1.7rem] px-4 items-center max-xl:flex-col max-xl:gap-9">
      <span className="text-white text-base font-semibold flex gap-1 xl:w-[3rem] items-center bg-ebonyClay max-xl:text-xl">
        <Image 
          src="/logo2.svg"
          alt="lensly"
          width={25}
          height={25}
          className=""
        />
        Lensly
      </span>

      <div className="flex flex-row gap-3 max-xl:w-full max-xl:justify-between max-xl:px-5 max-sm:flex-col xl:ml-7">
        <div className="flex flex-col text-center max-sm:flex-row max-sm:items-center max-md:justify-between">
          <span className="text-alto text-xs font-semibold">Staking APR</span>
          <span className='text-white text-base font-semibold'>6.88%</span>
        </div>

        <div className="flex flex-col text-center max-sm:flex-row max-sm:items-center max-md:justify-between">
          <span className="text-alto text-xs font-semibold">Max Slashing</span>
          <span className='text-white text-base font-semibold'>32.2%</span>
        </div>

        <div className="flex flex-col text-center max-sm:flex-row max-sm:items-center max-md:justify-between">
          <span className="text-alto text-xs font-semibold">Wallet Balance</span>
          <span className='text-white text-base font-semibold'>500</span>
        </div>
      </div>

      <Button className="flex justify-center items-center gap-2.5 py-4 px-[2rem] main-btn-2 text-white text-base font-bold max-xl:w-full">Stake</Button>
    </div>
  )
}

export default Lensly