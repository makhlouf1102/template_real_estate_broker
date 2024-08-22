"use client"

import Link from "next/link"
import { SidebarComp } from "./sidebar-comp"
import { FaRegEnvelope, FaRightToBracket,FaVoicemail,FaEnvelopeOpenText,FaEnvelopeOpen   } from "react-icons/fa6"
import { redirect } from "next/navigation";
import { Button } from "@nextui-org/react";

interface SidebarProps {
    children?: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {

    const handleLogout = () => {
        localStorage.removeItem("token")
        redirect("/en/login")
    }

    return (
        <SidebarComp>
            <li>
                <Link href="/en/dashboard" className="flex items-center justify-start px-3 py-2 gap-2 hover:bg-gray-100 rounded-md">
                    <FaRegEnvelope  className="w-5 h-5" aria-hidden="true" />
                    <strong>Newsletter</strong>
                </Link>
            </li>
            <li>
                <Link href="/en/dashboard" className="flex  items-center justify-start px-3 py-2 gap-2 hover:bg-gray-100 rounded-md">
                    <FaEnvelopeOpenText className="w-5 h-5" aria-hidden="true" />
                    <strong>Contacts</strong>
                </Link>
            </li>
            <li>
                <Button onClick={handleLogout} className="flex items-center justify-start bg-transparent w-full px-3 py-2 gap-2 text-text-100 hover:text-red-500 hover:bg-red-100 transition-all duration-3000 rounded-md">
                    <FaRightToBracket className="w-5 h-5" aria-hidden="true" />
                    <strong>Logout</strong>
                </Button>
            </li>
        </SidebarComp>
    )
}
