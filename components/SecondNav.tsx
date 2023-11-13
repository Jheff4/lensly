"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { useState } from 'react';

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);

  return (
    <nav className='flex-center bg-cardinalPink-100 fixed top-0 z-20 w-full py-6 text-white'>
      <div className={`${!navbar ? "flex justify-between max-md:flex-between max-md:flex-wrap mx-auto w-full max-w-screen-2xl lg:px-20 xs:px-8 sm:px-10 max-xs:px-3" : "flex-between mx-auto w-full transition-all max-w-screen-2xl lg:px-10 xs:px-8 sm:px-10 max-xs:px-3"}`}>
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
            className="block md:hidden order-1"
          />
        </Link>

        {navbar ? (<ul className='flex-center gap-x-3 md:gap-x-10 max-md:hidden'>
          <li className='!font-bold'>
            <Link
              href="/dashboard"
              target=""
            >
              Dashboard
            </Link>
          </li>
          <li className='!font-bold'>
            <Link
              href="/markets"
              target=""
            >
              Markets
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
              href="/governance"
              target=""
            >
              Governance
            </Link>
          </li>
          <li className='!font-bold'>
            <Link
              href="/stakes"
              target=""
            >
              Stakes
            </Link>
          </li>
          <li className='!font-bold'>
            <Link
              href="#"
              target=""
            >
              FAQ's
            </Link>
          </li>
        </ul>)
          :
        (<ul className='flex-center gap-x-10 max-md:order-3 max-md:bg-cardinalPink-100 max-md:h-screen max-md:flex-col max-md:gap-10 max-md:w-full max-md:justify-start max-md:pt-[5rem] max-md:flex-start relative'>
          <li className='!font-bold max-md:hidden'>
            <Link
              href="#"
              target="_blank"
            >
              Home
            </Link>
          </li>
          <li className='!font-bold md:hidden'>
            <Link
              href="/dashboard"
              target=""
            >
              Dashboard
            </Link>
          </li>
          <li className='!font-bold md:hidden'>
            <Link
              href="/markets"
              target=""
            >
              Markets
            </Link>
          </li>
          <li className='!font-bold'>
            <Link
              href=""
              target=""
            >
              WhitePaper
            </Link>
          </li>
          <li className='!font-bold md:hidden'>
            <Link
              href="/governance"
              target=""
            >
              Governance
            </Link>
          </li>
          <li className='!font-bold md:hidden'>
            <Link
              href="/stakes"
              target=""
            >
              Stakes
            </Link>
          </li>
          <li className='!font-bold'>
            <Link
              href=""
              target=""
            >
              FAQ's
            </Link>
          </li>
        </ul>)
        }

        <div className='flex flex-row gap-[16px]'>  
          <Button 
            className={`${!navbar ? "p-button max-md:hidden" : "p-button"}`}>
              Launch Dapp
          </Button>

          {navbar ? (<HiMenu 
            className="block md:hidden bg-razzmatazz p-1 font-semibold rounded-[8px] text-[40px] cursor-pointer"
            onClick={() => setNavbar(!navbar)}
          /> ) : ( <HiX className="block md:hidden bg-razzmatazz p-1 font-semibold rounded-[8px] transition-all text-[40px] order-2 cursor-pointer"
            onClick={() => setNavbar(!navbar)}
          />) }
        </div>

        <div className={`${navbar ? 'order-4 h-4 max-md:hidden md:hidden' : "order-4 h-4 md:hidden absolute flex w-[calc(100%-70px)] items-center self-end bottom-[12rem] justify-center gap-x-4 transition-all"}`}>
          <div className='bg-[#FFFFFF1A] p-[1.38rem] rounded-[14.786px] flex align-middle justify-center cursor-pointer'>
            <Image
              src="/twit.svg"
              alt="twitter"
              width={25}
              height={25}
              className=""
            />
          </div>

          <div className='bg-[#FFFFFF1A] p-[1.38rem] rounded-[14.786px] flex align-middle justify-center cursor-pointer'>
            <Image
              src="/disc.svg"
              alt="discord"
              width={25}
              height={25}
              className=""
            />
          </div>

          <div className='bg-[#FFFFFF1A] p-[1.38rem] rounded-[14.786px] flex align-middle justify-center cursor-pointer'>
            <Image
              src="/frame.svg"
              alt="frame"
              width={25}
              height={25}
              className=""
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar