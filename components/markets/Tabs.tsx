
const Tabs = () => {
  return (
    <div className='flex gap-6 max-md:flex max-md:gap-4 max-md:flex-wrap max-xsm:gap-2'>
      <div className='flex flex-col justify-center items-start p-6 tabs-border text-white w-[11.87rem] max-md:max-w-fit max-md:tracking-wider max-md:p-4 max-md:order-2 max-lg:justify-self-end'>
        <span className='text-base max-xsm:text-[0.9rem] font-medium'>Total Available</span>
        <span className='text-[2.5rem] max-xsm:text-[2.2rem] font-medium -mb-2 max-xsm:-mt-1'>$1.52B</span>
      </div>

      <div className='flex flex-col items-start tabs-border p-6 max-lg:max-w-fit text-white max-md:p-4 m max-md:order-1'>
        <span className='text-base max-xsm:text-[0.9rem] font-medium'>Total Market Size</span>
        <span className='text-[2.5rem] max-xsm:text-[2.2rem] font-medium -mb-2 max-xsm:-mt-1'>$2.39B</span>
      </div>

      <div className='flex flex-col justify-center items-start tabs-border p-6 text-white w-fit max-md:p-4 max-md:order-3 max-lg:justify-self-end'>
        <span className='text-base max-xsm:text-[0.9rem] font-medium'>Total Borrows</span>
        <span className='text-[2.5rem] max-xsm:text-[2.2rem] font-medium -mb-2 max-xsm:-mt-1'>$818.31M</span>
      </div>
    </div>
  )
}

export default Tabs