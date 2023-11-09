import Image from "next/image"
import { Button } from "../../ui/button"
import SupplyHead from "./SupplyHead"

const SupplyBody = () => {
  return (
    <>
      <div className="flex flex-row lg:flex-col max-lg:flex-wrap max-lg:relative">
        <span className="w-full max-lg:w-1/2">
          <SupplyHead />
        </span>
        <div className="shrink-0 max-lg:w-1/2 border-2 border-solid border-[#FFDDF7] border-t-0 max-lg:border-l-0 flex gap-12 max-lg:gap-11 items-center py-8 px-6 max-lg:flex-col max-lg:pb-[10rem]">
          <span className="text-gondola text-base font-semibold flex gap-1 items-center bg-white">
            <Image 
              src="/TENET.svg"
              alt="tenet"
              width={22}
              height={22}
              className=""
            />
            Tenet
          </span>
          <span className='text-[#291720] text-base font-semibold'>
            $2,500
          </span>
          <span className="text-[#4CAF50] text-base font-semibold">32.2%</span>
          <Image 
            src="/checkg.svg"
            alt="check"
            width={25}
            height={25}
            className=""
          />
          <div className="flex gap-2 max-lg:hidden">
            <Button className="flex justify-center items-center gap-2.5 py-4 px-9 rounded-[100px] bg-cardinalPink-100 text-white text-base font-bold">Withdraw</Button>
            <Button className="flex justify-center items-center gap-2.5 py-4 px-[3.2rem] rounded-[100px] bg-razzmatazz text-white text-base font-bold">Swap</Button>
          </div>
        </div>
        <div className="flex gap-2 flex-col w-full lg:hidden max-lg:absolute px-8 max-lg:bottom-6">
          <Button className="flex justify-center items-center gap-2.5 py-6 rounded-[100px] bg-cardinalPink-100 text-white text-base font-bold">Withdraw</Button>
          <Button className="flex justify-center items-center gap-2.5 py-6 rounded-[100px] bg-razzmatazz text-white text-base font-bold">Swap</Button>
        </div>
      </div>
      
      
      <div className="flex flex-row lg:flex-col max-lg:flex-wrap max-lg:relative">
        <span className="w-full max-lg:w-1/2 lg:hidden">
          <SupplyHead />
        </span>
        <div className="shrink-0 max-lg:w-1/2 border-2 border-solid border-[#FFDDF7] border-t-0 max-lg:border-l-0 flex gap-12 max-lg:gap-11 items-center py-8 px-6 max-lg:flex-col max-lg:pb-[10rem]">
          <span className="text-gondola text-base font-semibold flex gap-1 items-center bg-white">
            <Image 
              src="/TENET.svg"
              alt="tenet"
              width={22}
              height={22}
              className=""
            />
            Tenet
          </span>
          <span className='text-[#291720] text-base font-semibold'>
            $2,500
          </span>
          <span className="text-[#4CAF50] text-base font-semibold">32.2%</span>
          <Image 
            src="/checkg.svg"
            alt="check"
            width={25}
            height={25}
            className=""
          />
          <div className="flex gap-2 max-lg:hidden">
            <Button className="flex justify-center items-center gap-2.5 py-4 px-9 rounded-[100px] bg-cardinalPink-100 text-white text-base font-bold">Withdraw</Button>
            <Button className="flex justify-center items-center gap-2.5 py-4 px-[3.2rem] rounded-[100px] bg-razzmatazz text-white text-base font-bold">Swap</Button>
          </div>
        </div>
        <div className="flex gap-2 flex-col w-full lg:hidden max-lg:absolute px-8 max-lg:bottom-6">
          <Button className="flex justify-center items-center gap-2.5 py-6 rounded-[100px] bg-cardinalPink-100 text-white text-base font-bold">Withdraw</Button>
          <Button className="flex justify-center items-center gap-2.5 py-6 rounded-[100px] bg-razzmatazz text-white text-base font-bold">Swap</Button>
        </div>
      </div>
      
      
      <div className="flex flex-row lg:flex-col max-lg:flex-wrap max-lg:relative">
        <span className="w-full max-lg:w-1/2 lg:hidden">
          <SupplyHead />
        </span>
        <div className="shrink-0 max-lg:w-1/2 border-2 border-solid border-[#FFDDF7] border-t-0 max-lg:border-l-0 flex gap-12 max-lg:gap-11 items-center py-8 px-6 max-lg:flex-col max-lg:pb-[10rem]">
          <span className="text-gondola text-base font-semibold flex gap-1 items-center bg-white">
            <Image 
              src="/TENET.svg"
              alt="tenet"
              width={22}
              height={22}
              className=""
            />
            Tenet
          </span>
          <span className='text-[#291720] text-base font-semibold'>
            $2,500
          </span>
          <span className="text-[#4CAF50] text-base font-semibold">32.2%</span>
          <Image 
            src="/checkg.svg"
            alt="check"
            width={25}
            height={25}
            className=""
          />
          <div className="flex gap-2 max-lg:hidden">
            <Button className="flex justify-center items-center gap-2.5 py-4 px-9 rounded-[100px] bg-cardinalPink-100 text-white text-base font-bold">Withdraw</Button>
            <Button className="flex justify-center items-center gap-2.5 py-4 px-[3.2rem] rounded-[100px] bg-razzmatazz text-white text-base font-bold">Swap</Button>
          </div>
        </div>
        <div className="flex gap-2 flex-col w-full lg:hidden max-lg:absolute px-8 max-lg:bottom-6">
          <Button className="flex justify-center items-center gap-2.5 py-6 rounded-[100px] bg-cardinalPink-100 text-white text-base font-bold">Withdraw</Button>
          <Button className="flex justify-center items-center gap-2.5 py-6 rounded-[100px] bg-razzmatazz text-white text-base font-bold">Swap</Button>
        </div>
      </div>
      





      
      
      
      
      

    </>
  )
}

export default SupplyBody