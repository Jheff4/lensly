import Head from "@/components/governance/Head"
import Image from "next/image"

const Governance = () => {
  return (
    <main className="flex flex-col paddings bg-blur-2 min-h-screen side-pads">
      {/* FIRST SECTION */}
      <section className="gov-desktop-first max-md:gov-mobile-first all-nav">
        <h3 className="text-white text-base font-semibold leading-[normal]">Available of Tenet</h3>

        <div className="flex items-center gap-2">
          <Image 
            src="/logo2.svg"
            alt="logo"
            width={30}
            height={30}
            className=""
          />

          <h1 className="text-white text-2xl font-semibold">
            Lensly Governance
          </h1>
        </div>

        <p className="text-white gov-p-desk max-md:gov-p-mob font-normal">
          Lensly is a decentralized community governed by the Lensly token-holders
        </p>
      </section>

      {/* SECOND SECTION */}
      <section>
        <Head />
      </section>
    </main>
  )
}

export default Governance