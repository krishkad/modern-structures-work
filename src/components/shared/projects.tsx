import { projectLink } from '@/constant/constant'
import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
    return (
        <div className='w-full' id='projects'>
            <div className="max-w-wrapper max-w-5xl mx-auto pt-24">
                <div className="w-full flex flex-col gap-7">
                    <div className="w-full text-center">
                        <h2 className="text-2xl font-bold">OUR <span className="text-blue-500">PROJECTS</span></h2>
                    </div>
                    <div className="w-full flex justify-center gap-5">
                        <div className="w-full sm:w-3/4 grid grid-cols-2 sm:grid-cols-3 gap-4  p-2">
                            <Link href={'/modern-heights'}>
                                <div className="w-full h-40 relative group">
                                    <img src={'/MODERN-HEIGHTS/KAMPALA-cam-3-final.jpg'} width={500} height={500} className="w-full h-full object-fill" sizes="(max-width: 768px) 100vw, 33vw" alt='img' />
                                    <div className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 bg-blue-400/80 size-full inset-0 flex flex-col justify-center items-center gap-2 cursor-pointer">
                                        <p className="text-md text-white">MODERN HEIGHTS</p>
                                        <Search className='text-white w-5 h-5' />

                                    </div>
                                </div>
                            </Link>
                            <Link href={'/impala-gardens'}>
                                <div className="w-full h-40 relative group">
                                    <img src={'/IMPALA-GARDENS/Impala-Dreams-Gataka-Drone-17th-sept1.jpg'} width={500} height={500} className="w-full h-full object-fill" sizes="(max-width: 768px) 100vw, 33vw" alt='img' />
                                    <div className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 bg-blue-400/80 size-full inset-0 flex flex-col justify-center items-center gap-2 cursor-pointer">
                                        <p className="text-md text-white">IMPALA GARDENS</p>
                                        <Search className='text-white w-5 h-5' />

                                    </div>
                                </div>
                            </Link>
                            <Link href={'/burhani-masjid'}>
                                <div className="w-full h-40 relative group">
                                    <img src={'/BURHANI-MASJID/masjid-edited.jpg'} width={500} height={500} className="w-full h-full object-fill" sizes="(max-width: 768px) 100vw, 33vw" alt='img' />
                                    <div className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 bg-blue-400/80 size-full inset-0 flex flex-col justify-center items-center gap-2 cursor-pointer">
                                        <p className="text-md text-white">BURHANI MASJID</p>
                                        <Search className='text-white w-5 h-5' />

                                    </div>
                                </div>
                            </Link>
                            <Link href={'/affordable-housing'}>
                                <div className="w-full h-40 relative group bg-black">
                                    <img src={'/affordable-housing/Kyadondo_2BHK-cam01_night_fin.jpg'} width={500} height={500} className="w-full h-full object-fill" sizes="(max-width: 768px) 100vw, 33vw" alt='img' />
                                    <div className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 bg-blue-400/80 size-full inset-0 flex flex-col justify-center items-center gap-2 cursor-pointer">
                                        <p className="text-md text-white text-center">AFFORDABLE HOUSING</p>
                                        <Search className='text-white w-5 h-5' />

                                    </div>
                                </div>
                            </Link>
                            <Link href={'/pearl-homes'}>
                                <div className="w-full h-40 relative group">
                                    <img src={'/PEARL-HOMES/PRL-56.jpg'} width={500} height={500} className="w-full h-full object-fill" sizes="(max-width: 768px) 100vw, 33vw" alt='img' />
                                    <div className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 bg-blue-400/80 size-full inset-0 flex flex-col justify-center items-center gap-2 cursor-pointer">
                                        <p className="text-md text-white">PEARL HOMES</p>
                                        <Search className='text-white w-5 h-5' />

                                    </div>
                                </div>
                            </Link>
                            <Link href={'/impala-dreams'}>
                                <div className="w-full h-40 relative group">
                                    <img src={'/IMPALA-DREAMS/final-1-ps.jpg'} width={500} height={500} className="w-full h-full object-fill" sizes="(max-width: 768px) 100vw, 33vw" alt='img' />
                                    <div className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 bg-blue-400/80 size-full inset-0 flex flex-col justify-center items-center gap-2 cursor-pointer">
                                        <p className="text-md text-white">IMPALA DREAMS</p>
                                        <Search className='text-white w-5 h-5' />

                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* <div className="w-full sm:w-1/4">
                            <div className="w-full flex flex-col gap-4 text-center py-2 ">
                                {projectLink.map((item, i) => {
                                    return <p className={cn("text-xl font-bold hover:text-blue-500 hover:underline cursor-pointer text-muted-foreground", i === 0 && "text-blue-500 underline")} key={i}>{item.label}</p>
                                })}
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects