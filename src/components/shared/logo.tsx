
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Logo = ({ imgsrc }: { imgsrc: string }) => {
    const pathname = usePathname()
    return (
        <div className="flex items-center gap-1">
            <Link href={'/#home'}>
                <img src={`/${pathname === '/modern-developers' ? "modern-developers-logo.jpg" : imgsrc}`} className='w-[210px] h-max' alt='modern-structure logo' />
            </Link>
        </div>
    )
}

export default Logo;