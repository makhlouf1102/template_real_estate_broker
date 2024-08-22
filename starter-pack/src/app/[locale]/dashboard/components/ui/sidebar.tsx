"use client"

import { useState } from "react"
import Link from "next/link"
import { SidebarComp } from "./sidebar-comp"
import { FaRegEnvelope, FaRightToBracket, FaEnvelopeOpenText } from "react-icons/fa6"
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation"

export default function Sidebar() {
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState<string | null>(null);

    const handleLogout = () => {
        localStorage.removeItem("token")
        router.push('/login')
    }

    return (
        <div className="flex">
            <SidebarComp>
                <div className="flex flex-col gap-2">
                    <ul>
                        <li>
                            <Link
                                href="/en/dashboard/newsletter"
                                className={`flex items-center justify-start px-3 py-2 gap-2 hover:bg-gray-100 rounded-md ${currentPage === 'newsletter' ? 'bg-gray-200' : ''}`}
                            >
                                <FaRegEnvelope className="w-5 h-5" aria-hidden="true" />
                                <strong>Newsletter</strong>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/en/dashboard/contacts"
                                className={`flex items-center justify-start px-3 py-2 gap-2 hover:bg-gray-100 rounded-md ${currentPage === 'contacts' ? 'bg-gray-200' : ''}`}
                            >
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
                    </ul>
                </div>
            </SidebarComp>
        </div>
    )
}
