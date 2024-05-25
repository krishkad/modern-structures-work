import React from 'react'
import Logo from './logo'
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import NavButton from './nav-button'
import { Search } from 'lucide-react'
import MobNavbar from './mob-navbar'

const Navbar = () => {
    return (
        <div className='w-full sticky top-0 z-30 bg-white'>
            <div className="max-w-wrapper h-20 flex items-center">
                <div className="w-full flex justify-between items-center">
                    <Logo imgsrc='LOGO-01.jpg' />
                    <div className="hidden sm:flex items-center gap-6">
                        <Search className='w-4 h-4 cursor-pointer' />
                        {navLinks.map((item, i) => {
                            return <NavButton item={item} key={i} />
                        })}
                    </div>
                    <div className="block sm:hidden">
                        <MobNavbar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar