
"use client"
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Logo = ({ imgsrc, className }: { imgsrc: string, className?: string }) => {
    const pathname = usePathname()
    return (
        <div className="flex items-center gap-1">
            <Link href={'/#home'}>
                <img src={`/${pathname === '/modern-developers' ? "modern-developers-logo.jpg" : imgsrc}`} className={cn('w-[210px] h-max', className)} alt='modern-structure logo' />
            </Link>
        </div>
    )
}

export default Logo;