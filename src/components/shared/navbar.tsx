"use client"
import React, { useState } from 'react'
import Logo from './logo'
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import NavButton from './nav-button'
import { Search } from 'lucide-react'
import MobNavbar from './mob-navbar'
import { Input } from '../ui/input'
import { motion, AnimatePresence } from "framer-motion"
import NavInput from './nav-input'

const Navbar = () => {
    const [showInput, setShowInput] = useState(false);

    const variants = {
        move: {
            x: -260,
            transition: {
                type: 'linear'
            }
        },
        constant: {
            x: 0,
            transition: {
                type: 'linear'
            }
        },

    }

    return (
        <div className='w-full sticky top-0 z-30 bg-white'>
            <div className="px-2 sm:px-8 h-20 flex items-center">
                <div className="w-full flex justify-between items-center">
                    <Logo imgsrc='logo.png' />
                    <div className="hidden sm:flex items-center gap-6">
                        <AnimatePresence>
                            {showInput && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="">
                                    <NavInput />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <motion.div
                            animate={showInput ? "move" : "constant"}
                            variants={variants}
                            className=''>
                            <Search onClick={() => setShowInput(!showInput)} className='w-4 h-4 cursor-pointer ' />
                        </motion.div>
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