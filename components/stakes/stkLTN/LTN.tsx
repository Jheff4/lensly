import LTNBody from "./LTNBody"
import LTNHead from "./LTNHead"


const LTN = () => {
  return (     
    <div className="flex flex-col bg-white">
      <span className="w-full max-xl:w-1/2 max-xl:hidden">
        <LTNHead />
      </span>
      <LTNBody />
    </div>
  )
}

export default LTN