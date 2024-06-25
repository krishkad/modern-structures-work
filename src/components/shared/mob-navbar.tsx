"use client"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { AlignRight, Building, Contact, FolderKanban, Home as HomeIcon, User } from 'lucide-react';
import Logo from "./logo";
import NavInput from "./nav-input";

export default function MobNavbar() {
    const navLinks = [
        {
            label: "HOME",
            href: "/#home"
        },
        {
            label: "ABOUT US",
            href: "/#aboutus"
        },
        {
            label: "PROJECTS",
            href: "/#projects"
        },
        {
            label: "SERVICES",
            href: "/services"
        },
        {
            label: "CONTACT",
            href: "/#contact"
        },
    ];
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignRight />
            </SheetTrigger>
            <SheetContent onOpenAutoFocus={(e) => e.preventDefault()}>
                <SheetHeader>
                    <SheetTitle>
                        <Logo imgsrc="logo.png" />
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-5 py-4 my-5">
                    <NavInput isNav={true} />
                    {navLinks.map((item, i) => {
                        return (
                            <SheetClose asChild key={i}>
                                <Link href={item.href} className="w-full font-semibold flex items-center gap-4">
                                    {item.label === 'HOME' ? <HomeIcon className="w-[20px] h-[20px]" /> : item.label === 'ABOUT US' ? <User className="w-[20px] h-[20px]" /> : item.label === 'PROJECTS' ? <FolderKanban className="w-[20px] h-[20px]" /> : item.label === 'SERVICES' ? <Building className="w-[20px] h-[20px]" /> : item.label === 'CONTACT' ? <Contact className="w-[20px] h-[20px]" /> : 'none'}
                                    {item.label}
                                </Link>
                            </SheetClose>
                        )
                    })}
                </div>
            </SheetContent>
        </Sheet>
    )
}
