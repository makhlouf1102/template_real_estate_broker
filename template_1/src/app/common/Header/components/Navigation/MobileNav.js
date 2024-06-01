'use client'
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";

export const MobileNav = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return (
        <>
            <div
                className={`z-40 flex flex-col items-center justify-center gap-4 bg-red-500 h-screen transition-all duration-300 absolute top-0 right-0 transform ${isMobileNavOpen ? 'translate-x-0' : 'translate-x-full'} w-[300px] md:w-[460px]`}
            >
                <span className="cursor-pointer hover:opacity-70" onClick={() => setIsMobileNavOpen(false)}>
                    <FaXmark size={28} />
                </span>
            </div>
            <span className='block lg:hidden cursor-pointer hover:opacity-70' onClick={() => setIsMobileNavOpen(true)}>
                <FaBars size={28} />
            </span>
        </>
    );
}
