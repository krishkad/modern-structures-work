import Navbar from '@/components/shared/navbar';
import { projectContent } from '@/constant/constant';
import Image from 'next/image';
import React from 'react'

const ProjectPage = ({ params }: { params: { project: string } }) => {
    return (
        <div className='w-full'>
            <Navbar />
            <div className="w-full">

                {projectContent.map((project: any, i: number) => {

                    return (
                        <div className="w-full" key={i}>
                            {
                                project.path === params.project && <div className="max-w-wrapper">
                                    <div className="w-full py-10" >
                                        <h1 className="text-center text-3xl font-bold text-blue-500">{project.title}</h1>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:items-center">
                                        <div className="w-full h-64">
                                            <div className="relative w-full h-full sm:px-14">
                                                <Image src={project.content1.img} priority width={370} height={270} sizes='height:100%,width:100%' className='w-full h-full aspect-video rounded-2xl' alt='img' />
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="sm:text-center font-medium">{project.content1.text}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-16 sm:items-center">
                                        <div className="w-full max-sm:order-last">
                                            <p className="sm:text-center font-medium">{project.content2.text}</p>
                                        </div>
                                        <div className="w-full h-64">
                                            <div className="relative w-full h-full sm:px-14">
                                                <Image src={project.content2.img} priority width={370} height={270} sizes='height:100%,width:100%' className='w-full h-full aspect-video rounded-2xl' alt='img' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full my-10">
                                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            {project.imgs.map((img: any, i: number) => {
                                                return <div className="w-full h-72" key={i}>
                                                    <div className="relative w-full h-full">
                                                        <Image src={img.path} priority width={370} height={270} sizes='height:100%,width:100%' className='w-full h-full  rounded-2xl' alt='img' />
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </div >
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectPage;