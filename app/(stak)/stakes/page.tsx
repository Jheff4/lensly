import MainStake from "@/components/stakes/MainStake"
import Tabs from "@/components/stakes/Tabs"

const Stakes = () => {
  return (
    <main className="paddings bg-blur-2 min-h-screen bg-white side-pads">
      {/* FIRST SECTION */}
      <section className="all-nav flex justify-center">
        <div className="w-full max-md:max-w-[30rem]">
          <Tabs />
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="all-nav max-xl:hidden max-w-screen-2xl mx-auto pl-3">
        {/* <Claim /> */}
      </section>

      <section>
        <MainStake />
      </section>
    </main>
  )
}

export default Stakes