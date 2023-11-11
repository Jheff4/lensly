
const SupplyHead = () => {
  return (
    <div className="shrink-0 border-2 border-solid border-[#FFDDF7] border-t-0 max-xl:border-r-0 flex gap-[3.5rem] max-xxs:gap-[2.65rem] max-xsm:gap-9 max-xs:gap-[2.9rem] max-sm:gap-11 max-ssm:gap-[2.65rem] max-xl:gap-[2.65rem] items-center bg-white py-6 px-4 max-xl:px-10 max-xl:flex-col max-xl:h-full">
      <span className="text-[#919191] text-xs font-semibold max-xl:w-full">Assets</span>
      <span className="text-[#919191] text-xs font-semibold max-xl:w-full w-[3rem] text-center max-xl:text-start">Current balance</span>
      <span className="text-[#919191] text-xs font-semibold xl:-ml-4 max-xl:w-full">APY</span>
      <span className="text-[#919191] text-xs font-semibold w-[3rem] text-center max-xl:w-full xl:-ml-5 max-xl:text-start">Can be collateral</span>
    </div>
  )
}

export default SupplyHead