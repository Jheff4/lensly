import Image from "next/image"
import { Button } from "../../ui/button"
import AssetHead from "./AssetHead"

const AssetBody = () => {
  return (
    <>

      {[
        ['/TENET.svg', 'Tenet', '2,500', "2.5"],
        ['/logo2.svg', 'Lensly', '6,500', "3.5"],
        ['/USDC.svg', 'USDC', '5,800', "4.0"],
        ['/USDT.svg', 'USDT', '1,800', "1.5"],
      ].map(([image, name, amount, borrow], index) => (
        
        <div key={index} className="flex flex-row lg:flex-col max-lg:flex-wrap max-lg:relative max-lg:mb-[9px] max-lg:border-t max-lg:border-stormGray">
          <span className="w-full max-lg:w-1/2 lg:hidden">
            <AssetHead />
          </span>
          <div className="max-lg:w-1/2 border border-solid border-stormGray border-t-0 max-lg:border-l-0 max-xxx:gap-[2.65rem] max-xxs:gap-[2.7rem] max-xsm:gap-[2.4rem] max-xs:gap-[2.4rem] max-sm:gap-[2.45rem] flex gap-12 max-md:gap-[2.35rem] lg:gap-[5rem] max-lg:gap-[2.2rem] items-center py-6 max-lg:px-10 px-4 max-lg:flex-col max-lg:pb-[8rem] max-lg:items-end bg-ebonyClay">
            <span className="text-white text-base font-semibold flex gap-1 lg:w-[3rem] items-center">
              <Image 
                src={image}
                alt={name}
                width={25}
                height={25}
                className=""
              />
              {name}
            </span>
            <span className='text-white text-base font-semibold'>
              ${amount}
            </span>
            <span className="text-white text-base font-semibold">32.2%</span>
            <span className='text-white text-base font-semibold'>
              $2,500
            </span>
            <span className="text-white text-base font-semibold">{borrow}%</span>
            
            <div className="flex gap-2 max-lg:hidden lg:-ml-2">
              <Button className="flex justify-center items-center gap-2.5 py-4 px-8 main-btn-2 text-white text-base font-bold">Details</Button>
            </div>
          </div>
          <div className="flex flex-col w-full lg:hidden max-lg:absolute px-8 max-lg:bottom-6">
            <Button className="flex justify-center items-center gap-2.5 py-6 main-btn-2 text-white text-base font-bold">Details</Button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AssetBody