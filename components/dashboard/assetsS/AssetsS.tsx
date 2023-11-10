import AssetsSBody from "./AssetsSBody"
import AssetsSHead from "./AssetsSHead"


const AssetsS = () => {
  return (     
    <div className="flex flex-col bg-white">
      <span className="w-full max-xl:w-1/2 max-xl:hidden">
        <AssetsSHead />
      </span>
      <AssetsSBody />
    </div>
  )
}

export default AssetsS