"use client"
import React, { useState, useEffect } from 'react'
import { Button } from '../../components/ui/button';
import { Moon, Sun } from "lucide-react"
import { useTheme } from 'next-themes'
import { BsGrid } from 'react-icons/bs'
import { Logo, Bulb } from '../../public/images/index'
import Image from 'next/image';
import { Link } from 'react-scroll';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "../../components/ui/sheet"


export function SheetDemo({ isOpen, onClose, links, onLinkClick }) {

  const handleLinkClick = (link) => {
    onLinkClick();
  };


  return (

    <Sheet open={isOpen} onClose={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-center">
            {links.map((link, index) => (
              <Button key={index} onClick={() => handleLinkClick(link)} type="button" className="w-full mb-1" asChild>
                <Link to={link.to} spy={true}
                  smooth={true} >
                  {link.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>

  );
}


const Navbar = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const { setTheme } = useTheme();

  const Links = [
    { name: 'Home', to: 'home' },
    { name: 'Celebrate', to: 'celebrate' },
    { name: 'Gifts', to: 'gifts' },
    { name: 'New', to: 'new' },
    { name: 'Login', to: 'login' },
  ];

  const handleBsGridClick = () => {
    setSideNavOpen(true); // Open the side nav
  };

  const handleLinkClick = (link) => {
    setSideNavOpen(false); // Close the side nav
    const element = document.getElementById(link.to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full top-0 dark:bg-body-color-dark bg-body-color bg-opacity-75">
      <div className="h-[30px] my-5">
        <div className={`flex justify-between lg:mx-24 ${sideNavOpen ? 'mx-0' : 'mx-8'}`}>
          <div className="flex cursor-pointer">
            <Image src={Logo} alt="Logo" className="w-[24px] h-[24px]" />
            <p className="md:text-[20px] text-[20px] font-normal text-title-color dark:text-title-color-dark">Presents</p>
          </div>

          <div className="flex">
            <div className="block my-auto visible md:invisible mr-[10px]">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className='cursor-pointer visible md:invisible my-auto' onClick={handleBsGridClick}>
              <Button variant="outline" className="mr-2 p-3"><BsGrid className='w-[20px] h-[20px]' /></Button>
            </div>
          </div>

          <div className={`flex text-center items-center md:justify-between justify-center absolute md:static md:w-auto w-[100%] lg:pl-0 sm:transition-all md:transition-none sm:duration-500 md:duration-0 sm:ease-in top-0 rounded-b-3xl md:rounded-none md:border-none shadow-xl md:shadow-none`}>
            <div className="flex text-center">
              <div className='hidden md:flex'>
                <DropdownMenu >
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      System
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* links */}
              <ul className='hidden md:flex flex-col md:flex-row'>
                {Links.map((link, index) => (
                  <li key={index} className='md:mx-1 py-8 md:py-0'>
                    <Button asChild variant='outline'>
                      <Link to={link.to} spy={true}
                        smooth={true} className='md:text-[16px] text-[15px] cursor-pointer'>
                        {link.name}
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SideNav component */}
      {sideNavOpen && (
        <SheetDemo
          isOpen={sideNavOpen}
          onClose={() => setSideNavOpen(false)}
          links={Links}
          onLinkClick={handleLinkClick}
        />
      )}
    </div>
  );
};

export default Navbar;
