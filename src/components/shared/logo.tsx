import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className="flex items-center gap-1">
            <Image src={'/LOGO-01.jpg'} height={40} width={200} alt='modern-structure logo' />
        </div>
    )
}

export default Logo;