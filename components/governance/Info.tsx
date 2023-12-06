import { Button } from '../ui/button'
import Image from "next/image"

const Info = () => {
  return (
    <div className="md:text-center md:flex md:justify-around md:flex-col lg:text-start">
      <div>
        <h1 className='text-white text-2xl font-medium mb-8'>Your info</h1>
        <div className='bg-mirage inline-flex justify-center items-center border px-4 py-2 rounded-[100px] border-solid border-stormGray text-white text-base font-bold mb-4'>
          Tenet23ec7...bac9
        </div>
        <div className='flex-between md:justify-around flex-row'>
          <div className='grid grid-cols-1 items-start'>
            <p className='text-[#919191] text-sm font-semibold flex flex-row gap-1'>Voting power 
            <Image 
              src="/Info.svg"
              alt="info"
              width={15}
              height={15}
              className=""
            />
            </p>
            <p className='text-white text-2xl font-medium'>0.45</p>
          </div>
          <div className='grid grid-cols-1 items-start'>
            <p className='text-[#919191] text-sm font-semibold flex flex-row gap-1'>Proposition power 
            <Image 
              src="/Info.svg"
              alt="info"
              width={15}
              height={15}
              className=""
            />
            </p>
            <p className='text-white text-2xl font-medium'>0.45</p>
          </div>
        </div>
      </div>

      <div className="md:items-center lg:items-start md:flex md:flex-col">
        <h1 className='text-white text-2xl font-medium mt-16'>Delegated power</h1>
        <p className='text-[#919191] mt-4 text-sm font-semibold md:w-[30rem] lg:w-full'>
          Use your LENSLY and stkLENSLY balance to delegate your voting and proposition powers. You will not be sending any tokens, only the rights to vote and propose changes to the protocol. You can re-delegate or revoke power to self at any time.
        </p>
        <Button className='max-w-[18rem] mt-8 flex w-full justify-center items-center gap-2.5 p-4 main-btn-2 text-white text-base font-bold'>
          Set up delegation
        </Button>
      </div>
    </div>
  )
}

export default Info