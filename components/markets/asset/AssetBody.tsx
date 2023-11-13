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
        
        <div key={index} className="flex flex-row lg:flex-col max-lg:flex-wrap max-lg:relative max-lg:mb-[9px] max-lg:border-t-2 max-lg:border-[#FFDDF7]">
          <span className="w-full max-lg:w-1/2 lg:hidden">
            <AssetHead />
          </span>
          <div className="max-lg:w-1/2 border-2 border-solid border-[#FFDDF7] border-t-0 max-lg:border-l-0 max-sm:gap-[2.45rem] flex gap-12 max-md:gap-[2.35rem] lg:gap-[5rem] max-lg:gap-[2.2rem] items-center py-6 max-lg:px-10 px-4 max-lg:flex-col max-lg:pb-[8rem] max-lg:items-end">
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
            <span className='text-gondola text-base font-semibold'>
              ${amount}
            </span>
            <span className="text-gondola text-base font-semibold">32.2%</span>
            <span className='text-gondola text-base font-semibold'>
              $2,500
            </span>
            <span className="text-gondola text-base font-semibold">{borrow}%</span>
            
            <div className="flex gap-2 max-lg:hidden lg:-ml-2">
              <Button className="flex justify-center items-center gap-2.5 py-4 px-8 rounded-[100px] bg-razzmatazz text-white text-base font-bold">Details</Button>
            </div>
          </div>
          <div className="flex flex-col w-full lg:hidden max-lg:absolute px-8 max-lg:bottom-6">
            <Button className="flex justify-center items-center gap-2.5 py-6 rounded-[100px] bg-razzmatazz text-white text-base font-bold">Details</Button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AssetBody