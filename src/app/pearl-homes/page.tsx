"use client";
import Footer from '@/components/shared/footer';
import ImageDialog from '@/components/shared/image-dialog';
import Navbar from '@/components/shared/navbar';
import { projectContent } from '@/constant/constant';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const ProjectPage = () => {
    const [imgPath, setImgPath] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);

    const onHandleChange = (path: string) => {
        setImgPath(path);
        setDialogOpen(true);
    }
    const pathname = usePathname();
    return (
        <div className='w-full'>
            <Navbar />
            <div className="w-full min-h-[calc(100vh-80px)]">
                {projectContent.map((project: any, i: number) => {

                    return (
                        <div className="w-full" key={i}>
                            {
                                project.path === pathname.split('/')[1] && <div className="max-w-wrapper">
                                    <div className="w-full py-10" >
                                        <h1 className="text-center text-3xl font-bold text-blue-500">{project.title}</h1>
                                    </div>
                                    {/* <div className="max-w-5xl mx-auto">
                                        <div className="w-full">
                                            <p className=" text-justify font-medium">{project.content1.text}</p>
                                        </div>
                                    </div>
                                    <div className="max-w-5xl mx-auto">
                                        <div className="w-full max-sm:order-last">
                                            <p className=" text-justify font-medium">{project.content2.text}</p>
                                        </div>
                                        
                                    </div> */}
                                    <div className="max-w-5xl space-y-2">
                                        {project.content.map((line: { line: string }, i: number) => {
                                            return <p className="text-sm font-semibold" key={i}>{line.line}</p>
                                        })}
                                    </div>
                                    <div className="w-full my-10">
                                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            {project.imgs.map((img: any, i: number) => {
                                                return <div className="w-full h-72" key={i}>
                                                    <div className="relative w-full h-full">
                                                        <img src={img.path} width={370} height={270} sizes='height:100%,width:100%' className='w-full h-full object-cover rounded-2xl cursor-pointer' alt='img' onClick={() => onHandleChange(img.path)}
                                                        />
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

                <ImageDialog imgPath={imgPath} dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} path={pathname} />
            </div>
            <Footer />
        </div>
    )
}

export default ProjectPage;