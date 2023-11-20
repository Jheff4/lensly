
const Tabs = () => {
  return (
    <div className='flex gap-6 max-md:flex max-md:gap-4 max-md:flex-wrap'>
      <div className='flex flex-col justify-center items-start rounded-lg p-6 bg-greenHaze text-white w-[11.87rem] max-md:max-w-fit max-md:tracking-wider max-md:p-4 max-sm:p-3 max-md:order-2 max-lg:justify-self-end'>
        <span className='text-base font-medium'>Total Available</span>
        <span className='text-[2.5rem] font-medium -mb-2 max-xsm:-mt-1'>$1.52B</span>
      </div>

      <div className='flex flex-col items-start rounded-lg p-6 max-lg:max-w-fit bg-treePoppy-100 text-gondola max-md:p-4 max-sm:p-3 max-md:order-1'>
        <span className='text-base font-medium'>Total Market Size</span>
        <span className='text-[2.5rem] font-medium -mb-2 max-xsm:-mt-1'>$2.39B</span>
      </div>

      <div className='flex flex-col justify-center items-start rounded-lg p-6 bg-cardinalPink-100 text-white w-fit max-md:p-4 max-sm:p-3 max-md:order-3 max-lg:justify-self-end'>
        <span className='text-base font-medium'>Total Borrows</span>
        <span className='text-[2.5rem] font-medium -mb-2 max-xsm:-mt-1'>$818.31M</span>
      </div>
    </div>
  )
}

export default Tabs