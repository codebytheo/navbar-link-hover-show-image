"use client"

import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
import { navbarDown, navbarList, navbarListStagger } from '@/lib'

const directLinks = [
  {
    link:"Products",
    href:"#",
    index:1
  },
  {
    link:"Projects",
    href:"#",
    index:2
  },
  {
    link:"Sports",
    href:"#",
    index:3
  },
  {
    link:"About Us",
    href:"#",
    index:4
  },
  {
    link:"Technology",
    href:"#",
    index:5
  },
  {
    link:"Contact Us",
    href:"#",
    index:6
  },
  {
    link:"Research",
    href:"#",
    index:7
  },
]
const NavbarList = () => {
  const [imgIdx,setImgIdx] = useState(1)

  return (
    <motion.div className='fixed top-10 left-0 w-full py-2 bg-[#222122] z-0 overflow-hidden' variants={navbarDown} initial="hidden" animate="show" exit="exit">
      <motion.ul className='w-1/2 px-16 py-2 text-[#eaeaea] text-4xl grid grid-cols-2' variants={navbarList} initial="hidden" animate="show" exit="exit">
        {directLinks.map(link => (
          <motion.li key={link.index} onMouseOver={() => setImgIdx(link.index)} variants={navbarListStagger}>
            <Link href={link.href}>{link.link}</Link>
          </motion.li>
        ))}
      </motion.ul>
      <div className='px-16 py-4 flex space-x-8 text-xs text-yellow-400'>
        <p>created by theoyoth</p>
        <p>&copy;2023 - All rights reserved</p>
      </div>
      <div className='w-[240px] h-[180px] absolute right-16 top-6'>
        <Image src={`/img/${imgIdx}.webp`} fill alt="Image" />
      </div>
    </motion.div>
  )
}

export default NavbarList