import LTN from './LTN'
import LTNBody from './LTNBody'

const MainLTN = () => {
  return (
    <div className='w-full rounded-lg border border-solid border-stormGray lg:bg-ebonyClay max-lg:py-0 max-lg:px-0 py-6 px-4 max-lg:border-none h-fit'>
      <div className='flex flex-row gap-6 items-center'>
        <h1 className='max-lg:px-10 text-white text-[2rem] font-medium max-lg:hidden'>
          Stake LTN
        </h1>
        <span className='flex justify-center items-center px-8 py-1.5 rounded-[100px] text-white text-[10px] font-semibold bg-meteorite max-lg:hidden'>
          GET LTN TOKEN
        </span>
      </div>
      <LTN />
      <LTNBody />
    </div>
  )
}

export default MainLTN