import React from 'react'
import { HeroCarousel } from './hero-carousel'

const Hero = () => {
    return (
        <div className='h-[calc(100svh-80px)] w-full bg-slate-200'>
            <div className="w-full h-full flex items-center justify-center">
                <HeroCarousel />
            </div>
        </div>
    )
}

export default Hero