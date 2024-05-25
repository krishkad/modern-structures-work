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
        <Carousel className="size-full relative"
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 4000,
                })
            ]}
        >
            <CarouselContent>
                {carouselImg.map((item, index) => (
                    <CarouselItem key={index}>
                        <div className="p-0">
                            <div className="relative bg-white w-full h-[calc(100svh-80px)]">
                                <Image src={item.img} width={500} height={500} className="w-full h-full object-fill" priority sizes="(max-width: 768px) 100vw, 33vw" alt="img" />
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
        </Carousel>
    )
}
