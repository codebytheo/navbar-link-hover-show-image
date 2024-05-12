"use client"

import {useState} from 'react'
import {GiHamburgerMenu, GiCrossedBones} from "react-icons/gi"
import { AnimatePresence } from 'framer-motion'
import NavbarList from './NavbarList'

const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <nav>
      <div className='flex justify-between items-center px-16 py-2 bg-[#141414] relative z-50'>
        <div className='text-xl font-bold text-yellow-400'>Logo</div>
        <div onClick={() => setOpen(!open)} className='cursor-pointer'>
          {open ? <GiCrossedBones className="text-[#eaeaea]"/> : <GiHamburgerMenu className="text-[#eaeaea]"/>}
        </div>
      </div>
      <AnimatePresence mode="wait">
        {open ? <NavbarList /> : null }
      </AnimatePresence>

    </nav>
  )
}

export default Navbar