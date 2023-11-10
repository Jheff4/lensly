import AssetsB from './AssetsB'

const MainAB = () => {
  return (
    <div className='max-xl:w-full'>
      <h1 className='shrink-0 bg-white rounded-t-lg border-2 border-solid py-6 px-4 max-xl:px-10 max-xl:border-b-0 border-[rgba(255,221,247,0.87)] text-gondola text-[2rem] font-medium'>
        Assets to Borrow
      </h1>
      <AssetsB />
    </div>
  )
}

export default MainAB