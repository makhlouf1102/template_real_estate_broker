"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaHouse, FaRegEnvelope, FaRightToBracket, FaEnvelopeOpenText, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Button, Card, Spacer, Divider, Avatar } from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";
import otwologo from "../../../../../../public/OTWOSOLlogo.svg";

export default function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const [currentPage, setCurrentPage] = useState<string | null>(null);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

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
            className={`flex items-center justify-start px-4 py-3 gap-3 hover:bg-secondary-500 rounded-lg transition-all duration-200 ${currentPage === href.split('/').pop() ? 'bg-secondary-500 shadow-md' : ''}`}
            onClick={() => setSidebarOpen(false)}
        >
            {icon}
            <span className="font-medium">{text}</span>
        </Link>
    );

    return (
        <>
            {/* Mobile Hamburger Button */}
            <div className="fixed top-4 left-4 z-50 sm:hidden">
                <Button 
                    onClick={() => setSidebarOpen(true)} 
                    className="bg-primary-100 hover:bg-primary-200 transition-colors duration-200"
                    size="sm"
                    isIconOnly
                >
                    <FaBars className="w-5 h-5 text-white" aria-hidden="true" />
                </Button>
            </div>

            {/* Mobile Sidebar Drawer */}
            <div
                className={`fixed inset-y-0 left-0 w-72 bg-gradient-to-br from-primary-100 to-secondary-400 text-white p-6 transform transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'} sm:hidden z-50`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                        <img src={otwologo.src} alt="OTWOSOL logo" width={150} height={75} className="object-contain" />
                        <Button 
                            onClick={() => setSidebarOpen(false)} 
                            className="bg-transparent hover:bg-secondary-500 transition-colors duration-200"
                            size="sm"
                            isIconOnly
                        >
                            <FaTimes className="w-5 h-5 text-white" aria-hidden="true" />
                        </Button>
                    </div>
                    <Card className="bg-secondary-400/30 backdrop-blur-sm shadow-lg text-white rounded-xl">
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
                    <Divider className="bg-secondary-400/50" />
                    <Spacer y={4} />
                    <div className="mt-auto">
                        <Button
                            onClick={handleLogout}
                            className="flex items-center justify-center w-full px-4 py-3 gap-3 text-white bg-red-500 hover:bg-red-600 transition-all duration-200 rounded-lg shadow-md hover:shadow-lg"
                        >
                            <FaRightToBracket className="w-5 h-5" aria-hidden="true" />
                            <span className="font-semibold">Logout</span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden sm:block sm:w-fit">
                <div className="flex flex-col justify-between h-screen w-72 bg-gradient-to-br from-primary-100 to-secondary-400 text-white p-6 fixed">
                    <div className="flex items-center justify-center">
                        <img src={otwologo.src} alt="OTWOSOL logo" width={200} height={100} className="object-contain" />
                    </div>
                    <Card className="bg-secondary-400/30 backdrop-blur-sm shadow-lg text-white rounded-xl">
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
                    <Divider className="bg-secondary-400/50" />
                    <Spacer y={4} />
                    <div className="mt-auto">
                        <div className="flex items-center mb-4">
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="sm" />
                            <span className="ml-3 font-medium">John Doe</span>
                        </div>
                        <Button
                            onClick={handleLogout}
                            className="flex items-center justify-center w-full px-4 py-3 gap-3 text-white bg-red-500 hover:bg-red-600 transition-all duration-200 rounded-lg shadow-md hover:shadow-lg"
                        >
                            <FaRightToBracket className="w-5 h-5" aria-hidden="true" />
                            <span className="font-semibold">Logout</span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
