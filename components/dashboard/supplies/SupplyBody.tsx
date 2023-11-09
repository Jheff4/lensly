import Image from "next/image"
import { Button } from "../../ui/button"
import SupplyHead from "./SupplyHead"

const SupplyBody = () => {
  return (
    <>

      {[
        ['/TENET.svg', 'Tenet'],
        ['/logo2.svg', 'Lensly'],
        ['/USDC.svg', 'USDC'],
        ['/USDT.svg', 'USDT'],
      ].map(([image, name], index) => (
        
        <div key={index} className="flex flex-row lg:flex-col max-lg:flex-wrap max-lg:relative max-lg:mb-[9px] max-lg:border-t-2 max-lg:border-[#FFDDF7]">
          <span className="w-full max-lg:w-1/2 lg:hidden">
            <SupplyHead />
          </span>
          <div className="max-lg:w-1/2 border-2 border-solid border-[#FFDDF7] border-t-0 max-lg:border-l-0 flex gap-14 max-lg:gap-8 items-center py-8 max-lg:px-10 px-6 max-lg:flex-col max-lg:pb-[10rem] max-lg:items-end">
            <span className="text-gondola text-base font-semibold flex gap-1 lg:w-[3rem] items-center bg-white">
              <Image 
                src={image}
                alt={name}
                width={22}
                height={22}
                className=""
              />
              {name}
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
      ))}    
    
    </>
  )
}

export default SupplyBody