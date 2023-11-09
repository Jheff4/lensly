
const SupplyHead = () => {
  return (
    <div className="shrink-0 border-2 border-solid border-[#FFDDF7] border-t-0 max-lg:border-r-0 flex gap-12 max-lg:gap-[2.65rem] items-center bg-white py-8 px-6 max-lg:px-10 max-lg:flex-col max-lg:h-full">
      <span className="text-[#919191] text-xs font-semibold max-lg:w-full">Assets</span>
      <span className="text-[#919191] text-xs font-semibold max-lg:w-full">Current balance</span>
      <span className="text-[#919191] text-xs font-semibold max-lg:w-full">APY</span>
      <span className="text-[#919191] text-xs font-semibold w-[3rem] text-center max-lg:w-full max-lg:text-start">Can be collateral</span>
    </div>
  )
}

export default SupplyHead