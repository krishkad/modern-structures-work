import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='w-full' id='aboutus'>
            <div className="max-w-wrapper pt-24">
                <div className="w-full mx-auto">
                    <div className="w-full flex flex-col gap-4 items-center">

                        <h1 className='font-semibold text-2xl '><span className="text-blue-500">ABOUT </span>US</h1>

                        <p className="text-xl font-bold">Integrity, Strength, Reliablity</p>
                    </div>
                    <div className="w-full pt-5">
                        <div className="w-full flex max-md:flex-col max-sm:gap-5 items-center gap-5">
                            <div className="w-full md:w-1/2 lg:w-3/5 space-y-5">
                                <p className="text-justify font-medium text-zinc-800">
                                    Formed in 2015, Modern Structure International (U) Lad undertakes residential and civil infrastructure projects in Uganda and Kenya. A need for quality construction services in the real estate sector in the country of of Uganda. where Modern Structure has anoffice, was identified. Confident with the expertise gained building projects abroad, Modern Structure hopes to overcome this deficit.
                                </p>
                                <p className="text-justify font-medium text-zinc-800">
                                    Modern Structure aims to provide services for the construction of lasting, reliable and consistently sturdy properties. To ensure that the best results are obtained, innovative approaches are encouraged while ensuring that the perspectives considered remain grounded by realistic constraints. All of this is done strictly within the scope provided by the costs to the project
                                </p>
                                <p className="text-justify font-medium text-zinc-800">
                                    To better facilitate the development of the local economy, Modern Structure hires its workforce from the local populace, trains them and helps them deliver quality work. This harmony with local labourers has helped Modem Structure tremendously in implementing projects in both a cost-effective and time-efficient manner. In a short duration, Modern Structure has proved that quality work is achievable through the thoughtful application of precision, competence and dedicated teamwork.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-2/5">
                                <div className="w-full grid grid-cols-2 gap-4 sm:p-5">
                                    <div className="relative w-full h-full aspect-square flex flex-col gap-4 items-center justify-center p-4 border shadow-lg rounded-lg">
                                        <Image src={"/about/about-2.png"} width={120} height={120} alt='' />
                                        <p className="font-bold text-center">Quality <br />Workmanship</p>
                                    </div>
                                    <div className="relative w-full h-full aspect-square flex flex-col gap-4 items-center justify-center p-4 border shadow-lg rounded-lg">
                                        <Image src={"/about/about-3.png"} width={120} height={120} alt='' />
                                        <p className="font-bold text-center">Innovative Design</p>
                                    </div>
                                    <div className="relative w-full h-full aspect-square flex flex-col gap-4 items-center justify-center p-4 border shadow-lg rounded-lg">
                                        <Image src={"/about/about-4.png"} width={75} height={120} alt='' />
                                        <p className="font-bold text-center">Value for <br />Money</p>
                                    </div>
                                    <div className="relative w-full h-full aspect-square flex flex-col gap-4 items-center justify-center p-4 border shadow-lg rounded-lg">
                                        <Image src={"/about/about-1.png"} width={120} height={120} alt='' />
                                        <p className="font-bold text-center">Client Centric <br />Approch</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About