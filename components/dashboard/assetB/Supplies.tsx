import { Button } from "../../ui/button"
import SupplyBody from "./SupplyBody"
import SupplyHead from "./SupplyHead"


const Supplies = () => {
  return (
    <div className="relative">      
      <div className="flex flex-col">
        <SupplyHead />
        <SupplyBody />
      </div>
    </div>
  )
}

export default Supplies