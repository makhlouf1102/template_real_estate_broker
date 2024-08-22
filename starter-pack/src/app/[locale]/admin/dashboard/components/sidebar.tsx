"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaHouse, FaRegEnvelope, FaRightToBracket, FaEnvelopeOpenText } from "react-icons/fa6";
import { Button, Card, Spacer, Divider } from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";
import otwologo from "../../../../../../public/OTWOSOLlogo.svg";

export default function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const [currentPage, setCurrentPage] = useState<string | null>(null);

    useEffect(() => {
        setCurrentPage(pathname.split('/').pop() || null);
    }, [pathname]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push('/admin/login');
    };

    const NavLink = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => (
        <Link
            href={href}
            className={`flex items-center justify-start px-4 py-3 gap-3 hover:bg-secondary-400 rounded-md transition-colors duration-200 ${currentPage === href.split('/').pop() ? 'bg-secondary-400' : ''}`}
        >
            {icon}
            <span className="font-medium">{text}</span>
        </Link>
    );

    return (
        <div className="hidden sm:block sm:w-fit">
            <div className="flex flex-col h-screen w-72 bg-gradient-to-bl from-primary-100 to-secondary-400 text-white p-6 fixed">
                <div className="flex items-center justify-center h-16 mb-8">
                    <img src={otwologo.src} alt="OTWOSOL logo" width={200} height={100} />
                </div>
                <Card className="bg-transparent shadow-lg text-white">
                    <div className="flex flex-col space-y-2 p-4">
                        <NavLink
                            href="/en/admin/dashboard"
                            icon={<FaHouse className="w-5 h-5" aria-hidden="true" />}
                            text="Dashboard"
                        />
                        <NavLink
                            href="/en/admin/dashboard/newsletter"
                            icon={<FaRegEnvelope className="w-5 h-5" aria-hidden="true" />}
                            text="Newsletter"
                        />
                        <NavLink
                            href="/en/admin/dashboard/contacts"
                            icon={<FaEnvelopeOpenText className="w-5 h-5" aria-hidden="true" />}
                            text="Contacts"
                        />
                    </div>
                </Card>
                <Spacer y={4} />
                <Divider className="bg-secondary-400" />
                <Spacer y={4} />
                <Button
                    onClick={handleLogout}
                    className="mt-auto flex items-center justify-center w-full px-4 py-3 gap-3 text-white bg-red-500 hover:bg-red-600 transition-colors duration-200 rounded-md"
                >
                    <FaRightToBracket className="w-5 h-5" aria-hidden="true" />
                    <span className="font-semibold">Logout</span>
                </Button>
            </div>
        </div>
    );
}
