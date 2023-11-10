import SupplyBody from "./SupplyBody"
import SupplyHead from "./SupplyHead"


const Supplies = () => {
  return (     
    <div className="flex flex-col bg-white">
      <span className="w-full max-xl:w-1/2 max-xl:hidden">
        <SupplyHead />
      </span>
      <SupplyBody />
    </div>
  )
}

export default Supplies