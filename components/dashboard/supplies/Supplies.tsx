import SupplyBody from "./SupplyBody"
import SupplyHead from "./SupplyHead"


const Supplies = () => {
  return (     
    <div className="flex flex-col bg-white">
      <span className="w-full max-lg:w-1/2 max-lg:hidden">
        <SupplyHead />
      </span>
      <SupplyBody />
    </div>
  )
}

export default Supplies