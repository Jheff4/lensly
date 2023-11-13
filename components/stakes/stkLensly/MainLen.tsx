import Lensly from './Lensly'
import LenslyBody from './LenslyBody'

const MainLen = () => {
  return (
    <div className='w-full rounded-lg border-2 border-solid border-[#FFDDF7] bg-white py-6 px-4'>
      <h1 className='max-xl:px-10 text-gondola text-[2rem] font-medium'>
        Stake Lensly
      </h1>
      <Lensly />
      <LenslyBody />
    </div>
  )
}

export default MainLen