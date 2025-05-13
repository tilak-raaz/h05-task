"use client";
import React from 'react'
import  { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { PlaceholdersAndVanishInputDemo } from './placeholder';
 
 

function Navbar({ className }) {
     const [active, setActive] = useState (null);
  return (
      <div  className={cn("fixed  inset-x-0 w-max mx-auto z-50", className)}>
       <Menu setActive={setActive}>
        <div className=' font-bold text-3xl'>Shop.co</div>
        <MenuItem setActive={setActive} active={active}  item="Shop">
           <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Men</HoveredLink>
            <HoveredLink href="/individual">Women</HoveredLink>
            <HoveredLink href="/team">Kids</HoveredLink>
  
          </div>
        </MenuItem>
         
        <MenuItem setActive={setActive} active={active} item="On sale">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="New arrivals">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Brands">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <div className=' flex bg-[#F0F0F0] w-lg py-3 px-4 rounded-4xl gap-3'>
            <Image  src="/ search.svg" alt="Frame" width={20} height={20} >
                
            </Image>
            <PlaceholdersAndVanishInputDemo/>
        </div>
        <div className=' flex gap-3 justify-center  items-center'>
          <Image src="/ cart.svg" width={20} height={20} />
          <Image src="/ profile.svg" width={20} height={20} />
        </div>
      </Menu>
      </div>
  )
}

export default Navbar