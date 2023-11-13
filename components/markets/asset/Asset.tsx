import AssetBody from "./AssetBody"
import AssetHead from "./AssetHead"


const Asset = () => {
  return (     
    <div className="flex flex-col max-lg:flex-row bg-white max-lg:grid
    max-lg:grid-cols-2 max-lg:gap-x-2 max-md:flex max-md:flex-col">
      <span className="w-full max-lg:hidden">
        <AssetHead />
      </span>
      <AssetBody />
    </div>
  )
}

export default Asset