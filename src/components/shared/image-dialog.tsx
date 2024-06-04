"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { imgesArray } from '@/constant/constant'
import Image from 'next/image'


const ImageDialog = ({ imgPath, dialogOpen, setDialogOpen, path }: { imgPath: string, dialogOpen: boolean, setDialogOpen: (value: boolean) => void, path: string }) => {
    return (
        <Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(false)}>
            <DialogContent onOpenAutoFocus={(e: any) => e.preventDefault()} className='sm:max-w-[900px] h-fit flex items-center justify-center bg-transparent border-none p-14 sm:p-18 xl:p-12'>
                <Carousel className="">
                    <CarouselContent className="pointer-events-none">
                        {imgesArray.map((element, i) => {
                            return <React.Fragment key={i}>
                                {
                                    path === element.path && element.images.map((path, index) => (
                                        <CarouselItem key={index} className="pointer-events-none size-full ">
                                            <div className="size-full">
                                                <div className="relative size-full">
                                                    <Image src={path.path} priority width={500} height={370} sizes='height:100%,width:100%' className='w-full h-full  rounded-2xl cursor-pointer aspect-video' alt='img'
                                                    />
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))
                                }
                            </React.Fragment>

                        })}
                    </CarouselContent>
                    <CarouselNext />
                    <CarouselPrevious />
                </Carousel>
            </DialogContent>
        </Dialog>

    )
}

export default ImageDialog