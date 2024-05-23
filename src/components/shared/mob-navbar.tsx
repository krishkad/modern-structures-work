"use client"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/constant/constant"
import Link from "next/link"
import { AlignRight, Building, Contact, FolderKanban, Home as HomeIcon, User } from 'lucide-react';
import Logo from "./logo";

export default function MobNavbar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignRight />
            </SheetTrigger>
            <SheetContent onOpenAutoFocus={(e)=> e.preventDefault()}>
                <SheetHeader>
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-5 py-4 my-5">
                    {navLinks.map((item, i) => {
                        return (
                            <Link href={'/'} key={i} className="w-full font-semibold flex items-center gap-4">
                                {item.label === 'HOME' ? <HomeIcon className="w-[20px] h-[20px]" /> : item.label === 'ABOUT US' ? <User className="w-[20px] h-[20px]" /> : item.label === 'PROJECTS' ? <FolderKanban className="w-[20px] h-[20px]" /> : item.label === 'SERVICES' ? <Building className="w-[20px] h-[20px]" /> : item.label === 'CONTACT' ? <Contact className="w-[20px] h-[20px]" /> : 'none'}
                                {item.label}
                            </Link>
                        )
                    })}
                </div>
            </SheetContent>
        </Sheet>
    )
}
