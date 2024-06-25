"use client"
import React, { useEffect, useState } from 'react'
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



const ImageDialog = ({ imgPath, dialogOpen, setDialogOpen, path }: { imgPath: string, dialogOpen: boolean, setDialogOpen: (value: boolean) => void, path: string }) => {

    const [imgList, setImgList] = useState<{ path: string }[]>(imgesArray);


    useEffect(() => {
        const list = imgesArray.map((element) => {
            if (path.split('/')[1] === element.path) {
                const newimglist = element.images.filter((e) => e.path !== imgPath);
                setImgList(newimglist);
            }
        })


    }, [imgPath, path])

    return (
        <Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(false)}>
            <DialogContent onOpenAutoFocus={(e: any) => e.preventDefault()} className='sm:max-w-[900px] h-fit flex items-center justify-center bg-transparent border-none max-sm:py-12 p-3 sm:p-18 xl:p-12'>
                <Carousel className="">
                    <CarouselContent className="pointer-events-none">
                        <CarouselItem className="pointer-events-none size-full ">
                            <div className="size-full">
                                <div className="relative size-full">
                                    <img src={`${imgPath}`} width={500} height={370} sizes='height:100%,width:100%' className='w-full h-full  rounded-2xl cursor-pointer aspect-video' alt='img'
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                        {imgList.map((element, i) => {
                            return <React.Fragment key={i}>
                                {
                                    <CarouselItem className="pointer-events-none size-full ">
                                        <div className="size-full">
                                            <div className="relative size-full">
                                                <img src={element.path} width={500} height={370} sizes='height:100%,width:100%' className='w-full h-full  rounded-2xl cursor-pointer aspect-video' alt='img'
                                                />
                                            </div>
                                        </div>
                                    </CarouselItem>
                                }
                            </React.Fragment>

                        })}
                    </CarouselContent>
                    <CarouselNext className='max-sm:-translate-x-14' />
                    <CarouselPrevious className='max-sm:translate-x-14' />
                </Carousel>
            </DialogContent>
        </Dialog>

    )
}

export default ImageDialog