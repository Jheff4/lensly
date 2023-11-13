
const AssetHead = () => {
  return (
    <div className="border-2 border-solid border-[#FFDDF7] border-t-0 max-lg:border-r-0 flex gap-14 lg:gap-16 max-lg:gap-[2.65rem] items-center bg-white py-8 px-4 max-lg:px-10 max-lg:flex-col max-lg:h-full max-md:items-start">
      <span className="text-[#919191] text-xs font-semibold max-lg:w-full">Assets</span>
      <span className="text-[#919191] text-xs font-semibold max-lg:w-full lg:ml-1 md:whitespace-nowrap max-md:w-10">Total Supplied</span>
      <span className="text-[#919191] text-xs font-semibold max-lg:w-full lg:-ml-1 md:whitespace-nowrap">Supply APY</span>
      <span className="text-[#919191] text-xs font-semibold max-lg:w-full md:whitespace-nowrap lg:-ml-4">Total Borrowed</span>
      <span className="text-[#919191] text-xs font-semibold max-lg:w-full lg:-ml-3 md:whitespace-nowrap">Borrow APY</span>
    </div>
  )
}

export default AssetHead