import React from 'react'
import Logo from './logo'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='w-full bg-zinc-800 h-32'>
            <div className="px-2 sm:px-8 w-full h-full pb-4">
                <div className="w-full h-full flex items-center justify-between">
                    <Logo imgsrc='logo.png' className='w-[340px]' navLogo='modern-developers-dark-logo.png' />
                    <div className="size-full flex items-end justify-end gap-5">
                        <Link href={'https://www.facebook.com/profile.php?id=61557396628009'} target='_blank'>
                            <img src={'/facebook-brands-solid.svg'} className='invert' width={25} height={25} alt='facebook-icon' />
                        </Link>
                        <Link href={'https://www.instagram.com/moderndevelopersug/'} target='_blank'>
                            <img src={'/instagram-brands-solid.svg'} className='invert' width={25} height={25} alt='instagram-icon' />
                        </Link>
                        <Link href={'https://www.threads.net/@moderndevelopersug'} target='_blank'>
                            <img src={'/linkedin-brands-solid.svg'} className='invert' width={25} height={25} alt='linkedin-icon' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;