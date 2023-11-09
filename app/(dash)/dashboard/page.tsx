import Claim from "@/components/dashboard/Claim"
import Main from "@/components/dashboard/supplies/Main"
import Tabs from "@/components/dashboard/Tabs"

const Dashboard = () => {
  return (
    <main className="paddings bg-blur-2 min-h-screen bg-white side-pads">
      {/* FIRST SECTION */}
      <section className="all-nav flex justify-center">
        <div className="w-full max-md:max-w-[30rem]">
          <Tabs />
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="all-nav max-md:hidden">
        <Claim />
      </section>

      <section>
        <Main />
      </section>
    </main>
  )
}

export default Dashboard