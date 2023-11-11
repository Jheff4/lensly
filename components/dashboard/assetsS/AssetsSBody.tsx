import Image from "next/image"
import { Button } from "../../ui/button"
import AssetsSHead from "./AssetsSHead"

const AssetsSBody = () => {
  return (
    <>

      {[
        ['/TENET.svg', 'Tenet'],
        ['/logo2.svg', 'Lensly'],
        ['/USDC.svg', 'USDC'],
        ['/USDT.svg', 'USDT'],
      ].map(([image, name], index) => (
        
        <div key={index} className="flex flex-row xl:flex-col max-xl:flex-wrap max-xl:relative max-xl:mb-[9px] max-xl:border-t-2 max-xl:border-[#FFDDF7]">
          <span className="w-full max-xl:w-1/2 xl:hidden">
            <AssetsSHead />
          </span>
          <div className="max-xl:w-1/2 border-2 border-solid border-[#FFDDF7] border-t-0 max-xl:border-l-0 flex gap-10 max-xl:gap-8 items-center py-6 max-xl:px-10 max-xs:gap-[2rem] max-sm:gap-[2.1rem] max-xsm:gap-6 max-ssm:gap-7 px-4 max-xl:flex-col max-xl:pb-[10rem] max-xl:items-end">
            <span className="text-gondola text-base font-semibold flex gap-1 xl:w-[3rem] items-center bg-white">
              <Image 
                src={image}
                alt={name}
                width={22}
                height={22}
                className=""
              />
              {name}
            </span>
            <span className='text-[#291720] text-base font-semibold xl:ml-2'>
              $2,500
            </span>
            <span className="text-[#4CAF50] text-base font-semibold xl:-ml-4">32.2%</span>
            <Image 
              src="/checkg.svg"
              alt="check"
              width={25}
              height={25}
              className=""
            />
            <div className="flex gap-2 max-xl:hidden xl:-ml-6 2xl:-ml-3">
              <Button className="flex justify-center items-center gap-2.5 py-4 px-7 rounded-[100px] bg-cardinalPink-100 text-white text-base font-bold">Supply</Button>
              <Button className="flex justify-center items-center gap-2.5 py-4 px-7 rounded-[100px] bg-razzmatazz text-white text-base font-bold">Details</Button>
            </div>
          </div>
          <div className="flex gap-2 flex-col w-full xl:hidden max-xl:absolute px-8 max-xl:bottom-6">
            <Button className="flex justify-center items-center gap-2.5 py-6 rounded-[100px] bg-cardinalPink-100 text-white text-base font-bold">Supply</Button>
            <Button className="flex justify-center items-center gap-2.5 py-6 rounded-[100px] bg-razzmatazz text-white text-base font-bold">Details</Button>
          </div>
        </div>
      ))}    
    
    </>
  )
}

export default AssetsSBody