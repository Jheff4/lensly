import Asset from './Asset'

const Main = () => {
  return (
    <div className='max-lg:mb-16 max-md:px-20 max-sm:px-0'>
      <h1 className='mt-[6.25rem] bg-white rounded-t-lg border-2 border-solid py-6 px-4 max-lg:px-10 max-lg:border-b-0 border-[rgba(255,221,247,0.87)] text-gondola text-[2rem] font-medium'>
        All Assets
      </h1>
      <Asset />
    </div>
  )
}

export default Main