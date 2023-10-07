import { Button } from '@/components/ui/button'
import Image from '@/node_modules/next/image'

const LandingPage = () => {
  return (
    <main className="flex-center flex-col bg-blur paddings mx-auto w-full max-w-screen-2xl">
      {/* <Image 
        src="bg-texture.svg"
        fill
        quality={300}
        sizes="100vw"
        style={{
        objectFit: 'cover',
      }} 
        className='blur-[2px]' 
        alt="" 
      /> */}
      <section className="nav-padding w-full bg-slate-700 x-paddings flex flex-col gap-[26px]  z-40 sm:mb-[8rem] mb-20">
          <h1 className='heading3 text-center text-white'>Your Personal Financial Playground</h1>
          <h3 className='body-regular text-center text-white mb-2'>
          Dive into the world of decentralized finance like never before. <span className='paragraph-semibold'>LENSLEY</span> isn't just a platform; it's your digital playground where you can borrow, lend, and earn crypto with a dash of fun
          </h3>
          {/* bg-[url('/bg-texture.svg')] */}
          <div className='flex-center flex-row gap-5'>
            <Button className='y-button'>Launch Dapp</Button>
            <Button className='p-button'>Learn more</Button>
          </div>
      </section>

      {/* SECOND SECTION */}

      <section className='grid grid-cols-1 xl:grid-cols-[700px_minmax(300px,_1fr)] z-10 y-paddings gap-5 bg-white rounded-[32px] x-paddings md:mx-8'>
        <div className='flex flex-col justify-center gap-3 xl:pl-[5rem]'>
          <h2 className='heading4 md:pt-4'>Earn, Lend, Borrow – All in One Place</h2>
          <h3 className='body-text mb-2'>
          Imagine a financial world that's as thrilling as a rollercoaster ride! With LENSLEY, you can earn interest on your assets, lend to others and even borrow when the time is right. It's like a financial theme park right at your fingertips!
          </h3>
          <div className='xl:flex-start flex-center flex-row gap-5'>
            <Button className='y-button'>Launch Dapp</Button>
            <Button className='p-button'>Learn more</Button>
          </div>
        </div>

        <div className='flex justify-center py-9'>
          <Image 
            src="/girl.svg"
            alt="girl using laptop"
            width={250}
            height={250}
            className=""
          />
        </div>
      </section>

      {/* THIRD SECTION */}

      <section className='flex flex-col gap-[26px] sm:mb-[8rem] mb-18 mt-[7rem]'>
        <h2 className='heading5 text-white'>Vote & Shape the Future:</h2>
        <h3 className='text-white gov-text '>
          Be the Voice of LENSLEY's Decentralized Governance!
        </h3>
        <div className='flex-center flex-row gap-5'>
          <Button className='y-button'>
            Governance forum
          </Button>
          <Button className='p-button'>
            Learn more
          </Button>
        </div>
        <div className='flex justify-center xs:p-5'>
          <Image
            src="/governance.svg"
            height={300}
            width={500}
            alt="governance"
          />
        </div>
      </section>
    </main>
  )
}

export default LandingPage