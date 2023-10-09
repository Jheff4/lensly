import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className='flex-center bg-cardinalPink-100 fixed top-0 z-50 w-full py-6 text-white'>
      <div className="flex-between mx-auto w-full max-w-screen-2xl lg:px-20 xs:px-8 sm:px-10">
        <Link href="/">
          <Image
            src="/lensly.svg"
            alt="logo"
            width={100}
            height={35}
            className="max-md:hidden"
          />
          <Image
            src="/Logo.svg"
            alt="logo"
            width={40}
            height={30}
            className="block md:hidden"
          />
        </Link>

        <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
          <li className='!font-bold'>
            <Link
              href="#"
              target="_blank"
            >
              Home
            </Link>
          </li>
          <li className='!font-bold'>
            <Link
              href="#"
              target="_blank"
            >
              WhitePaper
            </Link>
          </li>
          <li className='!font-bold'>
            <Link
              href="#"
              target="_blank"
            >
              FAQ's
            </Link>
          </li>
        </ul>

        <div className='flex flex-row gap-[16px]'>  
          <Button className="p-button">Launch Dapp</Button>
          
          {/* <Image
            src="/icon.svg"
            width={20}
            height={20}
            alt="Hamburger menu"
            className="block md:hidden bg-razzmatazz p-1.5 font-semibold rounded-[8px] w-8"
          /> */}

          <HiMenu className="block md:hidden bg-razzmatazz p-1 font-semibold rounded-[8px] text-[40px]"/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar