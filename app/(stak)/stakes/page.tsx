import MainStake from "@/components/stakes/MainStake"
import Staking from "@/components/stakes/Staking"
import Tabs from "@/components/stakes/Tabs"

const Stakes = () => {
  return (
    <main className="paddings bg-blur-2 min-h-screen bg-white side-pads">
      {/* FIRST SECTION */}
      <section className="gov-desktop-first max-sm:gov-mobile-first all-nav w-full items-center max-sm:mb-6 mb-10">
        <Staking />
      </section>

      {/* SECOND SECTION */}
      <section className="flex justify-center mb-8">
        <div className="w-full max-md:max-w-[30rem]">
          <Tabs />
        </div>
      </section>

      <section>
        <MainStake />
      </section>
    </main>
  )
}

export default Stakes