import Image from "next/image"
import { Button } from "../ui/button"

const Claim = () => {
  return (
    <div className='flex items-center w-1/2 shrink-0 rounded-lg border-2 border-solid border-[rgba(255,221,247,0.87)] bg-white py-6 px-4 justify-between mb-2 -ml-3'>
      <span className="text-gondola text-2xl font-medium inline-flex items-center gap-2">
        <Image 
          src="/info2.svg"
          alt="info"
          width={18}
          height={18}
          className=""
        />
        Claim your rewards in Tenet
      </span>

      <Button className="flex w-[150px] justify-center items-center rounded-[100px] text-white text-base font-bold">
        Claim
      </Button>
    </div>
  )
}

export default Claim