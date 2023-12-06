import AssetsBBody from "./AssetsBBody"
import AssetsBHead from "./AssetsBHead"


const AssetsB = () => {
  return (     
    <div className="flex flex-col">
      <span className="w-full max-xl:w-1/2 max-xl:hidden">
        <AssetsBHead />
      </span>
      <AssetsBBody />
    </div>
  )
}

export default AssetsB