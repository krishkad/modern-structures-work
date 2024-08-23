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
import { AlignRight, Building, Building2, Contact, FolderKanban, Home as HomeIcon, User } from 'lucide-react';
import Logo from "./logo";
import NavInput from "./nav-input";
import { navLinks } from "@/constant/constant";

export default function MobNavbar() {

    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignRight />
            </SheetTrigger>
            <SheetContent onOpenAutoFocus={(e) => e.preventDefault()}>
                <SheetHeader>
                    <SheetTitle>
                        <Logo imgsrc="logo-navbar.png" />
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-5 py-4 my-5">
                    <NavInput isNav={true} />
                    {navLinks.map((item, i) => {
                        return (
                            <SheetClose asChild key={i}>
                                <Link href={item.href} className="w-full font-semibold flex items-center gap-4">
                                    {item.label === 'HOME' ? <HomeIcon className="w-[20px] h-[20px]" /> : item.label === 'ABOUT US' ? <User className="w-[20px] h-[20px]" /> : item.label === 'PROJECTS' ? <FolderKanban className="w-[20px] h-[20px]" /> : item.label === 'SERVICES' ? <Building className="w-[20px] h-[20px]" /> : item.label === 'CONTACT' ? <Contact className="w-[20px] h-[20px]" /> : 'MODERN DEVELOPERS' === item.label ? <Building2 className="w-[20px] h-[20px]" /> : 'none'}
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
