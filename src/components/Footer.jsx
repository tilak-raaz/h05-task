import React from 'react'
import Image from 'next/image'
function Footer() {
  return (
     <div className="w-full bg-[#F0F0F0] h-[500px]  px-24 mt-auto pt-[140px] ">
      <footer className="w-full  justify-between gap-[100px] flex ">
      <div className=' flex flex-col gap-5'>
        <h1 className=' text-black text-3xl font-bold '>
          Shop.co
        </h1>
        <div className='  '>
          We have clothes that suits your style and <br/> which you’re proud to wear. From <br />women to men.
        </div>
        <Image src="/social.svg" height={120} width={120} alt='social' /> 
        
      </div>
      <div className=' flex flex-col justify-between'>
        <h1  className="text-black font-normal text-base leading-[18px] tracking-[3px] uppercase ">Company</h1>
        <h1 className="text-black/60 font-normal text-base leading-[19px] ">About</h1>
         <h1 className="text-black/60 font-normal text-base leading-[19px] ">Features</h1>
          <h1 className="text-black/60 font-normal text-base leading-[19px] ">Works</h1>
           <h1 className="text-black/60 font-normal text-base leading-[19px] ">Career</h1>
      </div>
      <div className=' flex flex-col justify-between'>
        <h1  className="text-black font-normal text-base leading-[18px] tracking-[3px] uppercase ">Help</h1>
         <h1 className="text-black/60 font-normal text-base leading-[19px] ">Customer support</h1> 
         <h1 className="text-black/60 font-normal text-base leading-[19px] ">Terms & Conditions</h1> 
         <h1 className="text-black/60 font-normal text-base leading-[19px] ">Delivery Details</h1> 
         <h1 className="text-black/60 font-normal text-base leading-[19px] ">Privacy and Policy</h1>
      </div>
      <div className=' flex flex-col justify-between'>
        <h1  className="text-black font-normal text-base leading-[18px] tracking-[3px] uppercase ">FAQ</h1>
         <h1 className="text-black/60 font-normal text-base leading-[19px] ">Accounts</h1> 
         <h1 className="text-black/60 font-normal text-base leading-[19px] ">Manage Deliveries</h1> 
         <h1 className="text-black/60 font-normal text-base leading-[19px] ">Orders</h1> 
         <h1 className="text-black/60 font-normal text-base leading-[19px] ">Payments</h1>
      </div>
      <div className=' flex flex-col justify-between'>
        <h1  className="text-black font-normal text-base leading-[18px] tracking-[3px] uppercase ">Resources</h1>
         <h1 className="text-black/60 font-normal text-base leading-[19px] ">Free ebooks</h1> 
         <h1 className="text-black/60 font-normal text-base leading-[19px] ">Development tutorial</h1> 
         <h1 className="text-black/60 font-normal text-base leading-[19px] ">How to blog</h1> 
         <h1 className="text-black/60 font-normal text-base leading-[19px] ">Youtube playlist</h1>
      </div>
       
    </footer>
    <div className=' w-full bg-black/10 h-0.5 my-10'></div>
    <div className=' flex items-center justify-between'>
      <h1 className="text-black/60 text-left  text-sm font-normal leading-none">Shop.co © 2000-2023, All Rights Reserved</h1>
      <div className=' flex '>
        <Image src="/Badge.svg" height={50} width={50} alt='badge'/>
        <Image src="/Badge-2.svg" height={50} width={50} alt='badge'/>
        <Image src="/Badge-3.svg" height={50} width={50} alt='badge'/>
        <Image src="/Badge-4.svg" height={50} width={50} alt='badge'/>
        <Image src="/Badge-5.svg" height={50} width={50} alt='badge'/>
      </div>
    </div>
       
     </div>
  )
}

export default Footer