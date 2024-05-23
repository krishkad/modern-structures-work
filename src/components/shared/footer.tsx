import React from 'react'
import Logo from './logo'

const Footer = () => {
    return (
        <div className='w-full bg-zinc-800 h-60'>
            <div className="max-w-wrapper max-w-5xl h-full">
                <div className="w-full h-full flex items-center justify-between">
                    <Logo />
                </div>
            </div>
        </div>
    )
}

export default Footer