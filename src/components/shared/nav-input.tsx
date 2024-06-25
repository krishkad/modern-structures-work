"use client";
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { projectContent } from '@/constant/constant';
import Link from 'next/link';
import { SheetClose } from '../ui/sheet';


interface Project {
    path: string;
    title: string;
    content1: {
        img: string;
        text: string;
    };
    content2: {
        img: string;
        text: string;
    };
    imgs:
    {

        path: string;
    }[];
}

const NavInput = ({ isNav }: { isNav?: boolean }) => {
    const [search, setSearch] = useState("");
    const [suggestion, setSuggestion] = useState<Project[]>([]);
    const [showSuggestion, setShowSuggestion] = useState(false);

    const handleOnChange = (e: any) => {
        e.preventDefault();
        setSearch(e.target.value);
    };


    useEffect(() => {
        const sugg = projectContent.filter((project) => project.title.startsWith(search.toUpperCase()));
        setSuggestion(sugg);
        if (suggestion.length > 0) {

            setShowSuggestion(true);
        } else {
            setShowSuggestion(false);

        }
    }, [search, suggestion.length]);



    return (
        <div className='relative'>
            <Input
                onChange={handleOnChange}
                name='search'
                placeholder='Search here...'
                className={`pl-10 w-[250px] ${isNav && 'pl-3'}`}
                autoComplete="off"
            />
            {search.length > 0 && <div className="absolute top-[120%] border inset-x-0 w-[250px] bg-white p-1 rounded-md flex flex-col gap-2">
                {suggestion.map((sugges, i) => {
                    return (

                        <div className="w-full hover:bg-slate-100 p-2" key={i}>
                            {isNav ?
                                <SheetClose asChild>
                                    <Link href={`/${sugges.path}`} className='flex flex-col gap-1'>
                                        <span className="font-semibold text-md">{sugges.title}</span>
                                        <span className="font-semibold text-xs text-zinc-400">{sugges.content1.text.slice(0, 50)}...</span>
                                        <div className='w-full h-[1px] bg-zinc-200' />
                                    </Link>
                                </SheetClose>
                                : <Link href={`/${sugges.path}`} className='flex flex-col gap-1'>
                                    <span className="font-semibold text-md">{sugges.title}</span>
                                    <span className="font-semibold text-xs text-zinc-400">{sugges.content1.text.slice(0, 50)}...</span>
                                    <div className='w-full h-[1px] bg-zinc-200' />
                                </Link>
                            }
                        </div>

                    )
                })}
            </div>}
        </div >
    )
}

export default NavInput