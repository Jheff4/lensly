import Image from '@/node_modules/next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='h-full mx-auto max-h-screen-2xl bg-greenHaze flex-center flex-row flex-wrap gap-5 p-20'>
      <section className='bg-[#048b62] flex flex-col h-[110px] w-[138px] text-center gap-[20px] p-[20px] rounded-[16px]'>
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

      <section className='bg-[#048b62] flex flex-col h-[110px] w-[138px] align-middle justify-center gap-[20px] p-[20px] rounded-[16px]'>
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

      <section className='bg-[#048b62] flex flex-col h-[110px] w-[138px] align-middle justify-center gap-[20px] p-[20px] rounded-[16px]'>
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

      <section className='bg-[#048b62] flex flex-col h-[110px] w-[138px] align-middle justify-center gap-[20px] p-[20px] rounded-[16px]'>
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