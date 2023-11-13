
const Tabs = () => {
  return (
    <div className='flex gap-6 max-lg:grid max-lg:grid-cols-2 max-md:flex max-md:flex-wrap justify-center'>
      <div className='flex flex-col justify-center items-start rounded-lg p-6 bg-greenHaze text-white w-[11.87rem] max-md:max-w-fit max-md:tracking-wider max-lg:order-1 max-lg:justify-self-end'>
        <span className='text-base font-medium'>Net APY</span>
        <span className='text-[2.5rem] font-medium -mb-2'>32%</span>
      </div>

      <div className='flex flex-col items-start rounded-lg p-6 max-lg:max-w-fit bg-treePoppy-100 text-gondola max-lg:order-2'>
        <span className='text-base font-medium'>Collateral Balance</span>
        <span className='text-[2.5rem] font-medium -mb-2'>$31,247</span>
      </div>

      <div className='flex flex-col justify-center items-start rounded-lg p-6 max-lg:max-w-fit bg-razzmatazz text-white max-lg:order-4'>
        <span className='text-base font-medium'>Borrow Balance</span>
        <span className='text-[2.5rem] font-medium -mb-2'>$32,153</span>
      </div>

      <div className='flex flex-col justify-center items-start rounded-lg p-6 bg-cardinalPink-100 text-white w-[11.87rem] max-md:max-w-[8.2rem] max-md:tracking-wider max-lg:order-3 max-lg:justify-self-end max-md:'>
        <span className='text-base font-medium max-md:w-[1rem]'>Borrow Limit</span>
        <span className='text-[2.5rem] max-md:text-2xl font-medium -mb-2'>80%</span>
      </div>
    </div>
  )
}

export default Tabs