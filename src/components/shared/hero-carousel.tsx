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

export function HeroCarousel() {
    return (
        <Carousel className="size-full relative">
            <CarouselContent>
                {carouselImg.map((item, index) => (
                    <CarouselItem key={index}>
                        <div className="p-0">
                            {/* <Card>
                                <CardContent className="flex size-full items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card> */}
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
