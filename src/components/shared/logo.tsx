import Image from 'next/image'
import React from 'react'

const Logo = ({ imgsrc }: { imgsrc: string }) => {
    return (
        <div className="flex items-center gap-1">
            <Image src={`/${imgsrc}`} height={50} width={200} className='w-[200px] h-max' alt='modern-structure logo' />
        </div>
    )
}

export default Logo;