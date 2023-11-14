import Image from "next/image"

const Staking = () => {
  return (
    <>
      <h3 className="text-[#291720] text-base font-semibold">Available of Tenet</h3>

      <div className="flex items-center gap-2">
        <Image 
          src="/logo2.svg"
          alt="logo"
          width={30}
          height={30}
          className=""
        />

        <h1 className="text-[#291720] text-2xl font-semibold">
          Staking
        </h1>
      </div>

      <p className="text-[#291720] gov-p-desk max-sm:stak-p-mob font-normal">
      LENSLY token-holders can stake their tokens in the Safety Module to add more security to the protocol and earn Safety Incentives
      </p>
    </>
  )
}

export default Staking