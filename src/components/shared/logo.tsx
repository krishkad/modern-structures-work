import Link from 'next/link';
import React from 'react'

const Logo = ({ imgsrc }: { imgsrc: string }) => {
    return (
        <div className="flex items-center gap-1">
            <Link href={'/#home'}>
                <img src={`/${imgsrc}`}className='w-[210px] h-max' alt='modern-structure logo' />
            </Link>
        </div>
    )
}

export default Logo;