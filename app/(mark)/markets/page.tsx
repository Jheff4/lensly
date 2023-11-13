import Tabs from "@/components/markets/Tabs"
import Main from "@/components/markets/asset/Main"

const Markets = () => {
  return (
    <main className="paddings bg-blur-2 min-h-screen bg-white side-pads items-center flex flex-col">
      {/* FIRST SECTION */}
      <section className="all-nav flex justify-center">
        <div className="w-full max-md:max-w-[30rem]">
          <Tabs />
        </div>
      </section>

      <section className="lg:w-[50rem] w-full">
        <Main />
      </section>
    </main>
  )
}

export default Markets