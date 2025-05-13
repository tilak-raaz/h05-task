"use client";
import React from 'react'
import  { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { PlaceholdersAndVanishInputDemo } from './placeholder';
import Link from 'next/link';
 
 

function Navbar({ className }) {
     const [active, setActive] = useState (null);
  return (
      <div className={cn("fixed top-[40px] inset-x-0 w-max mx-auto z-50", className)}>
       <Menu setActive={setActive}>
        <Link href={"/"}>
        <div className=' cursor-pointer font-bold text-3xl'>Shop.co</div>
        </Link>
        <MenuItem setActive={setActive} active={active}  item="Shop">
           <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Men">Men</HoveredLink>
            <HoveredLink href="/Women">Women</HoveredLink>
            <HoveredLink href="/Kids">Kids</HoveredLink>
  
          </div>
        </MenuItem>
         
        <MenuItem setActive={setActive} active={active} item="On Sale">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/sale">Under ₹499 / $20</HoveredLink>
            <HoveredLink href="/Deals">Trending Deals</HoveredLink>
            <HoveredLink href="/SummerSale">Summer Sale</HoveredLink>
            <HoveredLink href="/AllSale">Shop All Sale</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="New Arrivals">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Exclusive-drops">Exclusive Drops</HoveredLink>
            <HoveredLink href="/new-arrivals/men">Men's New Arrivals</HoveredLink>
            <HoveredLink href="/new-arrivals/women">Women's New Arrival</HoveredLink>
            <HoveredLink href="/new-arrivals/kids">Kid's New Arrival</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Brands">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/brands/hm">H&M</HoveredLink>
            <HoveredLink href="/brands/Zara">Zara</HoveredLink>
            <HoveredLink href="/brands/levis">Levi's</HoveredLink>
            <HoveredLink href="/brands/allen-solly">Allen Solly</HoveredLink>
          </div>
        </MenuItem>
        <div className=' flex bg-[#F0F0F0] w-lg py-3 px-4 rounded-4xl gap-3'>
            <Link href={"/search-results"}>
            <Image  src="/ search.svg" alt="Frame" width={20} height={20} >
                
            </Image>
            </Link>
            <PlaceholdersAndVanishInputDemo/>
        </div>
        <div className=' flex gap-3 justify-center  items-center'>
        <Link href={"/cart"}>
          <Image alt='cart' src="/ cart.svg" width={20} height={20} />
        </Link>
        <Link href={"/user-profile"}>
          <Image alt='profile' src="/ profile.svg" width={20} height={20} />
        </Link>
        </div>
      </Menu>
    
      </div>
  )
}

export default Navbar