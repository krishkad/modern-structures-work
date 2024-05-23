import Image from 'next/image'
import React from 'react'

const Logo = ({ imgsrc }: { imgsrc: string }) => {
    return (
        <div className="flex items-center gap-1">
            <Image src={`/${imgsrc}`} height={40} width={200} alt='modern-structure logo' />
        </div>
    )
}

export default Logo;