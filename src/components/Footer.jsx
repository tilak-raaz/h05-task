import React from 'react'
import Image from 'next/image'

// Reusable component for footer link column
const FooterLinkColumn = ({ title, links }) => {
  return (
    <div className='flex flex-col space-y-3 mb-8 md:mb-0 md:justify-between'>
      <h1 className="text-black font-normal font-satoshi text-base leading-[18px] tracking-[3px] uppercase">
        {title}
      </h1>
      {links.map((link, index) => (
        <h1 key={index} className="text-black/60 font-normal font-satoshi text-base leading-[19px]">
          {link}
        </h1>
      ))}
    </div>
  )
}

// Reusable component for payment badge
const PaymentBadge = ({ number }) => {
  return (
    <Image 
      src={`/Badge${number ? `-${number}` : ''}.svg`} 
      height={50} 
      width={50} 
      alt={`payment badge ${number || 1}`}
      className="h-8 w-auto md:h-10"
    />
  )
}

function Footer() {
  // Data for footer columns
  const footerLinks = [
    {
      title: "Company",
      links: ["About", "Features", "Works", "Career"]
    },
    {
      title: "Help",
      links: ["Customer support", "Terms & Conditions", "Delivery Details", "Privacy and Policy"]
    },
    {
      title: "FAQ",
      links: ["Accounts", "Manage Deliveries", "Orders", "Payments"]
    },
    {
      title: "Resources",
      links: ["Free ebooks", "Development tutorial", "How to blog", "Youtube playlist"]
    }
  ];

 
  const paymentBadges = ["", "2", "3", "4", "5"];

  return (
    <div className="w-full bg-[#F0F0F0] min-h-[400px] px-6 sm:px-8 md:px-12 lg:px-24 mt-auto pt-16 md:pt-[140px]">
      <footer className="w-full flex flex-col md:flex-row md:justify-between gap-8 md:gap-[50px] lg:gap-[100px]">
        
        <div className='flex flex-col gap-5 max-w-xs mb-10 md:mb-0'>
          <h1 className='text-black font-integral text-2xl md:text-3xl font-bold'>
            Shop.co
          </h1>
          <div className="text-sm font-satoshi md:text-base">
            We have clothes that suits your style and which you're proud to wear. From women to men.
          </div>
          <Image 
            src="/social.svg" 
            height={120} 
            width={120} 
            alt='social'
            className=" h-8 md:h-10" 
          />
        </div>

 
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8 md:flex md:flex-row md:justify-between md:flex-1">
         
          {footerLinks.map((column, index) => (
            <FooterLinkColumn 
              key={index}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
      </footer>

      <div className='w-full bg-black/10 h-0.5 my-6 md:my-10'></div>
      
      <div className='flex flex-col sm:flex-row items-center sm:justify-between py-4'>
        <h1 className="text-black/60 font-satoshi text-center sm:text-left text-xs sm:text-sm font-normal leading-none mb-4 sm:mb-0">
          Shop.co © 2000-2023, All Rights Reserved
        </h1>
        <div className='flex space-x-2 md:space-x-3'>
   
          {paymentBadges.map((badge, index) => (
            <PaymentBadge key={index} number={badge} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer