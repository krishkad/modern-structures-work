"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { carouselImg } from "@/constant/constant"
import Autoplay from 'embla-carousel-autoplay'

export function HeroCarousel() {
    return (
        <>
            <Carousel className="size-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                        Infinity: true,
                        stopOnFocusIn: false,
                        stopOnInteraction: false,
                        stopOnMouseEnter: false,
                    })
                ]}
            >
                <CarouselContent className="pointer-events-none">
                    {carouselImg.map((item, index) => (
                        <CarouselItem key={index} className="pointer-events-none">
                            <div className="p-0 pointer-events-none">
                                <div className="relative pointer-events-none bg-white w-full h-[calc(100svh-80px)]">
                                    <Image src={item.img} width={500} height={500} className="w-full h-full object-fill pointer-events-none" priority sizes="(max-width: 768px) 100vw, 33vw" alt="img" />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className="right-2 cursor-pointer" />
                <CarouselPrevious className="left-2 cursor-pointer" />
            </Carousel>
        </>
    )
}
