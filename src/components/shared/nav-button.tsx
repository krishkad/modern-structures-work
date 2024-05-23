import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from '../ui/button'

const NavButton = ({ item }: { item: { label: string, href: string } }) => {
    return (
        <Link href={item.href} className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }), ' font-bold relative bg-white rounded-none group hover:bg-white hover:transition-all px-[5px] h-max py-1 ')}>
            <div className="hidden group-hover:block w-[10px] aspect-square bg-blue-500 absolute -top-[3px] -left-[3px] -z-[1]" />
            <span className="group-hover:underline underline-offset-1 decoration-blue-500">
                {item.label}
            </span>
        </Link>
    )
}

export default NavButton