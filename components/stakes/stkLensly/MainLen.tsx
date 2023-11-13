import Lensly from './Lensly'
import LenslyBody from './LenslyBody'

const MainLen = () => {
  return (
    <div className='w-full rounded-lg border-2 border-solid border-[#FFDDF7] bg-white max-lg:py-0 max-lg:px-0 py-6 px-4 max-lg:border-none'>
      <h1 className='max-lg:px-10 text-gondola text-[2rem] font-medium max-lg:hidden'>
        Stake Lensly
      </h1>
      <Lensly />
      <LenslyBody />
    </div>
  )
}

export default MainLen