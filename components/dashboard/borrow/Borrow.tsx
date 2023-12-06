import BorrowBody from "./BorrowBody"
import BorrowHead from "./BorrowHead"


const Borrow = () => {
  return (     
    <div className="flex flex-col">
      <span className="w-full max-xl:w-1/2 max-xl:hidden">
        <BorrowHead />
      </span>
      <BorrowBody />
    </div>
  )
}

export default Borrow