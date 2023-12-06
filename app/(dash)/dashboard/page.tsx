import Claim from "@/components/dashboard/Claim"
import MainDash from "@/components/dashboard/MainDash"
import Tabs from "@/components/dashboard/Tabs"

const Dashboard = () => {
  return (
    <main className="paddings side-pads">
      {/* FIRST SECTION */}
      <section className="all-nav flex justify-center">
        <div className="w-full max-md:max-w-[30rem]">
          <Tabs />
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="all-nav max-xl:hidden max-w-screen-2xl mx-auto pl-3">
        <Claim />
      </section>

      <section>
        <MainDash />
      </section>
    </main>
  )
}

export default Dashboard