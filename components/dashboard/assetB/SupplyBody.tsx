import Image from "next/image"
import { Button } from "../../ui/button"

const SupplyBody = () => {
  return (
    <>
    
      <div className="shrink-0 border-2 border-solid border-[#FFDDF7] border-t-0 flex gap-12 items-center bg-white py-8 px-6">
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
        <div className="flex gap-2">
          <Button className="flex w-[150px] justify-center items-center gap-2.5 p-4 rounded-[100px] bg-cardinalPink-100 text-white text-base font-bold">Withdraw</Button>
          <Button className="flex w-[150px] justify-center items-center gap-2.5 p-4 rounded-[100px] bg-razzmatazz text-white text-base font-bold">Swap</Button>
        </div>
      </div>
      
      <div className="shrink-0 border-2 border-solid border-[#FFDDF7] border-t-0 flex gap-12 items-center bg-white py-8 px-6">
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
        <div className="flex gap-2">
          <Button className="flex w-[150px] justify-center items-center gap-2.5 p-4 rounded-[100px] bg-cardinalPink-100 text-white text-base font-bold">Withdraw</Button>
          <Button className="flex w-[150px] justify-center items-center gap-2.5 p-4 rounded-[100px] bg-razzmatazz text-white text-base font-bold">Swap</Button>
        </div>
      </div>
      
      <div className="shrink-0 rounded-[0px_0px_8px_8px] border-2 border-solid border-[#FFDDF7] border-t-0 flex gap-12 items-center bg-white py-8 px-6">
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
        <div className="flex gap-2">
          <Button className="flex w-[150px] justify-center items-center gap-2.5 p-4 rounded-[100px] bg-cardinalPink-100 text-white text-base font-bold">Withdraw</Button>
          <Button className="flex w-[150px] justify-center items-center gap-2.5 p-4 rounded-[100px] bg-razzmatazz text-white text-base font-bold">Swap</Button>
        </div>
      </div>

    </>
  )
}

export default SupplyBody