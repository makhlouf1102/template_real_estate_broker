'use client';
import { useState, ReactNode } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from "@nextui-org/react";

interface SidebarProps {
    children: ReactNode;
}

export function SidebarComp({ children }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {isOpen || <Button
                onClick={toggleSidebar}
                aria-controls="cta-button-sidebar"
                isIconOnly
                className="sm:hidden mt-2 ms-3"
                size="sm"
            >
                <FaBars className="w-5 h-5" aria-hidden="true" />
            </Button>}

            <aside
                id="cta-button-sidebar"
                className={`fixed top-0 left-0 w-64 h-screen py-4 transition-transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <h1 className="text-xl flex items-start justify-start px-3 font-bold">Dashboard</h1>
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <Button
                        onClick={toggleSidebar}
                        aria-label="Close sidebar"
                        isIconOnly
                        className="sm:hidden mb-4 ml-auto"
                        size="sm"
                    >
                        <FaTimes className="w-5 h-5" aria-hidden="true" />
                    </Button>
                    {children}
                </div>
            </aside>
        </div>
    );
}