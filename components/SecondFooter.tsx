import React from 'react'
import Image from 'next/image'

const SecondFooter = () => {
  return (
    <footer className='flex flex-row justify-center gap-4 mt-[4rem] mb-[4rem]'>
      <div className='bg-ebonyClay p-[1.38rem] rounded-[14.786px] flex align-middle justify-center cursor-pointer'>
        <Image
          src="/twitter.svg"
          alt="twitter"
          width={22}
          height={22}
          className=""
        />
      </div>

      <div className='bg-ebonyClay p-[1.38rem] rounded-[14.786px] flex align-middle justify-center cursor-pointer'>
        <Image
          src="/disc.svg"
          alt="discord"
          width={22}
          height={22}
          className=""
        />
      </div>

      <div className='bg-ebonyClay p-[1.38rem] rounded-[14.786px] flex align-middle justify-center cursor-pointer'>
        <Image
          src="/telegram.svg"
          alt="telegram"
          width={22}
          height={22}
          className=""
        />
      </div>
    </footer>
  )
}

export default SecondFooter