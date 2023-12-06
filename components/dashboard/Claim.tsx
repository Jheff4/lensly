import Image from "next/image"
import { Button } from "../ui/button"

const Claim = () => {
  return (
    <div className='flex items-center w-1/2 shrink-0 tabs-border border-2 border-solid py-6 px-4 justify-between mb-2 -ml-3'>
      <span className="text-white text-2xl font-medium inline-flex items-center gap-2">
        <Image 
          src="/info2.svg"
          alt="info"
          width={20}
          height={20}
          className=""
        />
        Claim your rewards in Tenet
      </span>

      <Button className="flex px-8 justify-center items-center main-btn-2 text-white text-base font-bold">
        Claim
      </Button>
    </div>
  )
}

export default Claim