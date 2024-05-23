import React from 'react'
import Logo from './logo'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='w-full bg-zinc-800 h-32'>
            <div className="max-w-wrapper max-w-5xl h-full pb-4">
                <div className="w-full h-full flex items-center justify-between">
                    <Logo imgsrc='logo-dark.svg' />
                    <div className="size-full flex items-end justify-end gap-3">
                        <Image src={'/facebook.svg'} width={30} height={30} alt='social' />
                        <Image src={'/instagram.svg'} width={30} height={30} alt='social' />
                        <Image src={'/linkedin.svg'} width={30} height={30} alt='social' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer