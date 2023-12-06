import Asset from './Asset'

const Main = () => {
  return (
    <div className='max-md:px-20 max-sm:px-0'>
      <h1 className='mt-[6.25rem] bg-ebonyClay rounded-t-lg border border-solid py-6 px-4 max-lg:px-10 max-lg:border-b-0 border-stormGray text-white text-[2rem] font-medium'>
        All Assets
      </h1>
      <Asset />
    </div>
  )
}

export default Main