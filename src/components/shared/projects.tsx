import { projectLink } from '@/constant/constant'
import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (
        <div className='w-full' id='projects'>
            <div className="max-w-wrapper max-w-5xl mx-auto py-10">
                <div className="w-full flex flex-col gap-7">
                    <div className="w-full text-center">
                        <h2 className="text-2xl font-bold">OUR <span className="text-blue-500">PROJECTS</span></h2>
                    </div>
                    <div className="w-full flex max-sm:flex-col gap-5">
                        <div className="w-full sm:w-3/4 grid grid-cols-2 sm:grid-cols-3 gap-4  p-2">
                            <div className="w-full h-40 relative group">
                                <Image src={'/MODERN-HEIGHTS/3.jpg'} width={500} height={500} className="w-full h-full object-fill" priority sizes="(max-width: 768px) 100vw, 33vw" alt='img' />
                                <div className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 bg-blue-400/80 size-full inset-0 flex flex-col justify-center items-center gap-2 cursor-pointer">
                                    <p className="text-md text-white">MODERN HEIGHTS</p>
                                    <Search className='text-white w-5 h-5' />

                                </div>
                            </div>
                            <div className="w-full h-40 relative group">
                                <Image src={'/MODERN-HEIGHTS/3.jpg'} width={500} height={500} className="w-full h-full object-fill" priority sizes="(max-width: 768px) 100vw, 33vw" alt='img' />
                                <div className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 bg-blue-400/80 size-full inset-0 flex flex-col justify-center items-center gap-2 cursor-pointer">
                                    <p className="text-md text-white">MODERN HEIGHTS</p>
                                    <Search className='text-white w-5 h-5' />

                                </div>
                            </div>
                            <div className="w-full h-40 relative group">
                                <Image src={'/MODERN-HEIGHTS/3.jpg'} width={500} height={500} className="w-full h-full object-fill" priority sizes="(max-width: 768px) 100vw, 33vw" alt='img' />
                                <div className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 bg-blue-400/80 size-full inset-0 flex flex-col justify-center items-center gap-2 cursor-pointer">
                                    <p className="text-md text-white">MODERN HEIGHTS</p>
                                    <Search className='text-white w-5 h-5' />

                                </div>
                            </div>
                            <div className="w-full h-40 relative group bg-black">
                                <Image src={'/MODERN-HEIGHTS/3.jpg'} width={500} height={500} className="w-full h-full object-fill" priority sizes="(max-width: 768px) 100vw, 33vw" alt='img' />
                                <div className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 bg-blue-400/80 size-full inset-0 flex flex-col justify-center items-center gap-2 cursor-pointer">
                                    <p className="text-md text-white">MODERN HEIGHTS</p>
                                    <Search className='text-white w-5 h-5' />

                                </div>
                            </div>
                            <div className="w-full h-40 relative group">
                                <Image src={'/MODERN-HEIGHTS/3.jpg'} width={500} height={500} className="w-full h-full object-fill" priority sizes="(max-width: 768px) 100vw, 33vw" alt='img' />
                                <div className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 bg-blue-400/80 size-full inset-0 flex flex-col justify-center items-center gap-2 cursor-pointer">
                                    <p className="text-md text-white">MODERN HEIGHTS</p>
                                    <Search className='text-white w-5 h-5' />

                                </div>
                            </div>
                            <div className="w-full h-40 relative group">
                                <Image src={'/MODERN-HEIGHTS/3.jpg'} width={500} height={500} className="w-full h-full object-fill" priority sizes="(max-width: 768px) 100vw, 33vw" alt='img' />
                                <div className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 bg-blue-400/80 size-full inset-0 flex flex-col justify-center items-center gap-2 cursor-pointer">
                                    <p className="text-md text-white">MODERN HEIGHTS</p>
                                    <Search className='text-white w-5 h-5' />

                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/4">
                            <div className="w-full flex flex-col gap-4 text-center py-2 ">
                                {projectLink.map((item, i) => {
                                    return <p className={cn("text-xl font-bold hover:text-blue-500 hover:underline cursor-pointer text-muted-foreground", i === 0 && "text-blue-500 underline")} key={i}>{item.label}</p>
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects