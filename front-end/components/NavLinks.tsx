"use client"
import DropdownIcon from '@/assets/DropdownIcon';
import CategoryModal from './CategoriesModal';
import React, { useEffect, useRef, useState } from 'react'

const NavLinks = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsActive(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (
        <div className="border-t-[1px] navLinks flex justify-start items-center border-[#d8dfe0] pt-4 pb-2">
            <div className="myContainer">
                <div className="flex relative justify-start gap-x-[12px] items-center">
                    <div onClick={() => setIsActive(true)} ref={dropdownRef} className="flex justify-center cursor-pointer items-center">
                        <h1 className="uppercase text-[14px] roboto-bold text-[#002f34]">All Categories</h1>
                        <div onClick={() => {
                            setIsActive(!isActive);
                        }} className={`ms-[8px] dropdown-icon cursor-pointer ${isActive && 'rotate-180'}`}>
                            <DropdownIcon height={16} width={16} />
                        </div>
                    </div>
                    {isActive && <CategoryModal />}
                    <div className="flex justify-center items-center">
                        <h1 className="roboto-regular hover:text-[#00a49f] cursor-pointer px-[12px] text-[#002f34] text-[14px]">Mobile Phones</h1>
                        <h1 className="roboto-regular hover:text-[#00a49f] cursor-pointer px-[12px] text-[#002f34] text-[14px]">Cars</h1>
                        <h1 className="roboto-regular hover:text-[#00a49f] cursor-pointer px-[12px] text-[#002f34] text-[14px]">Motorcycles</h1>
                        <h1 className="roboto-regular hover:text-[#00a49f] cursor-pointer px-[12px] text-[#002f34] text-[14px]">House</h1>
                        <h1 className="roboto-regular hover:text-[#00a49f] cursor-pointer px-[12px] text-[#002f34] text-[14px]">Video-Audio</h1>
                        <h1 className="roboto-regular hover:text-[#00a49f] cursor-pointer px-[12px] text-[#002f34] text-[14px]">Tablets</h1>
                        <h1 className="roboto-regular hover:text-[#00a49f] cursor-pointer px-[12px] text-[#002f34] text-[14px]">Land & Plots</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavLinks;