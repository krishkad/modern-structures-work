import React from 'react'
import { HeroCarousel } from './hero-carousel'

const Hero = () => {
    return (
        <div className='h-[100svh] w-full' id='#home'>
            <div className="w-full h-full flex items-center justify-center">
                <HeroCarousel />
            </div>
        </div>
    )
}

export default Hero