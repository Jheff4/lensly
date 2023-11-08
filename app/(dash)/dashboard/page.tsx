import Tabs from "@/components/dashboard/Tabs"
import Image from "next/image"

const Dashboard = () => {
  return (
    <main className="flex justify-center paddings bg-blur-2 min-h-screen bg-white side-pads">
      {/* FIRST SECTION */}
      <section className="all-nav w-full max-md:max-w-[30rem]">
        <Tabs />
      </section>
    </main>
  )
}

export default Dashboard