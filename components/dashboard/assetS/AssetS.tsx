import AssetSBody from "./AssetSBody"
import AssetSHead from "./AssetSHead"


const AssetS = () => {
  return (
    <div className="relative">      
      <div className="flex flex-col">
        <AssetSHead />
        <AssetSBody />
      </div>
    </div>
  )
}

export default AssetS