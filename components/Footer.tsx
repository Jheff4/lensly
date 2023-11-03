import Image from '@/node_modules/next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='h-full max-h-screen-2xl bg-greenHaze xs:grid xs:grid-cols-2 sm:flex-center gap-5 p-20 max-xs:p-10 max-xs:grid max-xs:grid-cols-2 max-xs:gap-3'>
      <section className='bg-[#048b62] flex flex-col h-[110px] text-center gap-[15px] px-[35px] py-5 lg:w-[138px] rounded-[16px] max-xs:px-8'>
        <div className='flex align-middle justify-center'>
          <Image
            src="/vector.svg"
            alt="docs"
            width={32}
            height={23}
            className=""
          />
        </div>

        <div className='footer-text'>
          Docs
        </div>
      </section>

      <section className='bg-[#048b62] flex flex-col h-[110px] align-middle justify-center gap-[15px] lg:w-[138px] px-[15px] py-5 rounded-[16px] max-xs:px-4'>
        <div className='flex align-middle justify-center'>
          <Image
            src="/discord.svg"
            alt="discord"
            width={32}
            height={23}
          />
        </div>

        <div className='footer-text'>
          Discord
        </div>
      </section>

      <section className='bg-[#048b62] flex flex-col h-[110px] align-middle justify-center lg:w-[138px] gap-[15px] p-5 rounded-[16px]'>
        <div className='flex align-middle justify-center'>
          <Image
            src="/twitter.svg"
            alt="twitter"
            width={32}
            height={23}
          />
        </div>

        <div className='footer-text'>
          Twitter
        </div>
      </section>

      <section className='bg-[#048b62] flex flex-col h-[110px] align-middle justify-center lg:w-[138px] gap-[15px] p-5 rounded-[16px]'>
        <div className='flex align-middle justify-center'>
          <Image
            src="/github.svg"
            alt="github"
            width={32}
            height={23}
          />
        </div>

        <div className='footer-text'>
          Github
        </div>
      </section>
    </footer>
  )
}

export default Footer