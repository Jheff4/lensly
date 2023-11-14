
const Tabs = () => {
  return (
    <div className='flex gap-7 max-sm:gap-5 max-ssm:flex-wrap justify-center'>
      <div className='flex flex-col items-start rounded-lg p-6 max-sm:p-5 max-lg:max-w-fit bg-treePoppy-100 text-gondola -ml-2'>
        <span className='text-base font-medium max-sm:w-[10rem] max-sm:-mr-3'>Funds in Safety Module</span>
        <span className='text-[2.5rem] font-medium -mb-2'>$2.39M</span>
      </div>

      <div className='flex flex-col justify-center items-start rounded-lg p-6 max-sm:p-5 bg-greenHaze text-white max-md:max-w-fit -ml-2'>
        <span className='text-base font-medium max-sm:w-[10rem] max-sm:-mr-3'>Total Emission per day</span>
        <span className='text-[2.5rem] font-medium -mb-2 flex items-end gap-1'>1,100 <span className="text-sm font-medium mb-3">LENSLY</span></span>
      </div>
    </div>
  )
}

export default Tabs