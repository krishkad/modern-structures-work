import React from 'react'
import Logo from './logo'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='w-full bg-zinc-800 h-32'>
            <div className="px-2 sm:px-8 w-full h-full pb-4">
                <div className="w-full h-full flex items-center justify-between">
                    <Logo imgsrc='logo-dark.svg' />
                    <div className="size-full flex items-end justify-end gap-3">
                        <Link href={'https://www.facebook.com/profile.php?id=61557396628009'} target='_blank'>
                            <img src={'/facebook.svg'} width={30} height={30} alt='facebook-icon' />
                        </Link>
                        <Link href={'https://www.instagram.com/moderndevelopersug/'} target='_blank'>
                            <img src={'/instagram.svg'} width={30} height={30} alt='instagram-icon' />
                        </Link>
                        <Link href={'https://www.threads.net/@moderndevelopersug'} target='_blank'>
                            <img src={'/linkedin.svg'} width={30} height={30} alt='linkedin-icon' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;