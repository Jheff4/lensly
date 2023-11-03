import { Button } from '@/components/ui/button'
import Image from '@/node_modules/next/image'

const LandingPage = () => {
  return (
    <main className="flex-center flex-col bg-blur paddings w-full">
      <section className="nav-padding x-paddings flex flex-col gap-[26px] z-10 mb-[6rem] max-xs:px-3">
          <h1 className='heading3 text-center text-white'>Your Personal Financial Playground</h1>
          <h3 className='body-regular text-center text-white mb-2'>
          Dive into the world of decentralized finance like never before. <span className='paragraph-semibold'>LENSLEY</span> isn't just a platform; it's your digital playground where you can borrow, lend, and earn crypto with a dash of fun
          </h3>
          {/* bg-[url('/bg-texture.svg')] */}
          <div className='flex-center flex-row gap-5 max-xs:gap-3'>
            <Button className='y-button'>Launch Dapp</Button>
            <Button className='p-button'>Learn more</Button>
          </div>
      </section>

      {/* SECOND SECTION */}

      <section className='grid grid-cols-1 lg:grid-cols-[600px_minmax(250px,_1fr)] xl:grid-cols-[720px_minmax(300px,_1fr)] z-10 y-paddings gap-5 bg-white rounded-[32px] x-paddings min md:mx-[2.5rem] lg:mx-[5rem] max-xs:px-3'>
        <div className='flex flex-col justify-center gap-3 xl:pl-[5rem]'>
          <h2 className='heading4 md:pt-4'>Earn, Lend, Borrow – All in One Place</h2>
          <h3 className='body-text mb-2'>
          Imagine a financial world that's as thrilling as a rollercoaster ride! With LENSLEY, you can earn interest on your assets, lend to others and even borrow when the time is right. It's like a financial theme park right at your fingertips!
          </h3>
          <div className='xl:flex-start flex-center flex-row gap-5 max-xs:gap-3'>
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

      <section className='flex flex-col gap-[26px] mb-20 mt-[6rem] max-xs:mt-[5rem]'>
        <h2 className='heading5 text-white'>Vote & Shape the Future:</h2>
        <h3 className='text-white gov-text '>
          Be the Voice of LENSLEY's Decentralized Governance!
        </h3>
        <div className='flex-center flex-row gap-5 max-xs:gap-3 max-xs:px-3'>
          <Button className='y-button'>
            Governance forum
          </Button>
          <Button className='p-button'>
            Learn more
          </Button>
        </div>
        <div className='flex justify-center xs:p-5 max-xs:px-3'>
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