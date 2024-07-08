"use client";
import Footer from '@/components/shared/footer';
import Navbar from '@/components/shared/navbar'
import Link from 'next/link'
import React from 'react'

const ServicePage = () => {

    return (
        <div className='w-full'>
            <Navbar />
            <div className="w-full">
                <div className="w-full text-center">
                    <h1 className="text-center text-3xl font-bold text-blue-500 py-8">SERVICES</h1>
                </div>
                <div className="w-full">
                    <div className="max-w-wrapper md:max-w-5xl mx-auto space-y-12 pt-8 pb-12">
                        <div className="w-full grid grid-row-2 md:grid-cols-2  gap-5 sm:gap-10">
                            <div className="relative w-full h-[250px]">
                                <img src={"/affordable-housing/Bedroom_final.jpg"} sizes='width:100%,height:100%' className='object-cover rounded-md' alt='Image priority' />
                            </div>
                            <div className="w-full space-y-2">
                                <h2 className="text-2xl font-bold text-blue-500">Architectural Design <span className='text-primary'>and Consultation</span></h2>
                                <p className="font-medium text-justify">At Modern Structures , we believe that great architecture is born from a blend of innovation, functionality, and aesthetic excellence. Our Architectural Design and Consultation services are meticulously crafted to transform your vision into reality, ensuring that every project we undertake is not only beautiful but also sustainable and functional.</p>
                            </div>
                        </div>
                        <div className="w-full grid-row-2 grid md:grid-cols-2  gap-5 sm:gap-10">
                            <div className="relative w-full h-[250px]">
                                <img src={"/affordable-housing/Kyadondo_1BHK-fin01.jpg"} sizes='width:100%,height:100%' className='object-cover rounded-md' alt='Image priority' />
                            </div>
                            <div className="w-full space-y-2">
                                <h2 className="text-2xl font-bold text-blue-500">Construction</h2>
                                <p className="font-medium text-justify">We pride ourselves on delivering high-quality construction services that bring architectural designs to life with precision, efficiency, and excellence. Our comprehensive construction solutions are designed to meet the diverse needs of our clients, ensuring that every project is completed on time, within budget, and to the highest standards of quality.</p>
                            </div>
                        </div>
                        <div className="w-full grid-row-2 grid md:grid-cols-2  gap-5 sm:gap-10">
                            <div className="relative w-full h-[250px]">
                                <img src={"/affordable-housing/Kyadondo_2BHK-cam01_night_fin.jpg"} sizes='width:100%,height:100%' className='object-cover rounded-md' alt='Image priority' />
                            </div>
                            <div className="w-full space-y-2">
                                <h2 className="text-2xl font-bold text-blue-500">Real <span className="text-primary">Estate</span></h2>
                                <p className="font-medium text-justify">We understand that finding the perfect property is just as important as the design and construction process. That’s why we offer comprehensive Real Estate services, managed by our sister company, <Link href={'/modern-developers'} className='text-blue-600 hover:underline'>Modern Developers</Link>, a trusted name in the real estate industry. Together, we provide an integrated approach to meeting all your property needs, from acquisition to final construction.</p>
                            </div>
                        </div>
                        <div className="w-full grid-row-2 grid md:grid-cols-2  gap-5 sm:gap-10">
                            <div className="relative w-full h-[250px]">
                                <img src={"/affordable-housing/Kyadondo_Studio-cam01.jpg"} sizes='width:100%,height:100%' className='object-cover rounded-md' alt='Image priority' />
                            </div>
                            <div className="w-full space-y-2">
                                <h2 className="text-2xl font-bold text-blue-500">Design <span className="text-primary">and Build</span></h2>
                                <p className="font-medium text-justify">Our Design and Build service offers a seamless and integrated approach to transforming your vision into reality. By combining design and construction under one roof, we streamline the entire process, ensuring efficiency, collaboration, and a unified vision from concept to completion.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ServicePage