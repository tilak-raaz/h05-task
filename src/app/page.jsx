import Image from "next/image";

import { NewArrivals } from "@/components/NewArrivalsCards";
import { TopSelling } from "@/components/ TopSelling";
import { Grid } from "@/components/Layoutgrid";
import CustomerReviews from "@/components/CustomerReviews";
 
 
 
function Home() {
  return (
    <div className="h-max w-screen">
 
     
        <Image
          src="/Rectangle 2.png"
          className="object-cover w-full"
          width={1440}
          height={600}
          alt="hero image"
        />
    
        <div className="absolute sm:top-48 sm:w-3/5 md:top-44 xl:top-52 lg:top-48  left-0  md:w-3/5 lg:w-2xl flex flex-col justify-center gap-3  md:gap-5 px-6 md:px-10 lg:px-12 xl:px-16">
          <h1 className="   text-2xl md:text-3xl  lg:text-6xl xl:text-6xl font-integral font-bold text-black ">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-xs md:text-base  font-satoshi text-black/60  ">
            Browse through our diverse range of meticulously crafted garments, designed <br className=" hidden lg:block" /> to bring out your individuality and cater to your sense of style.
          </p>
          <button className="bg-black text-white font-satoshi py-2 px-12 rounded-full w-max hover:bg-black/80 transition-all duration-300">
            Shop Now
          </button>
          <div className=" flex gap-2 lg:gap-4  xl:gap-8 lg:mt-10 items-start ">
            <div>
              <h1 className="text-black font-satoshi text-base md:text-xl lg:text-3xl xl:text-[40px] font-bold">200+</h1>
              <p  className="text-black/60 font-satoshi text-sm md:text-base font-normal leading-[22px]" >International Brands</p>
            </div>
            <div className=" border-x  px-2 lg:px-4 xl:px-8 ">
              <h1 className="text-black font-satoshi text-base md:text-xl lg:text-3xl xl:text-[40px] font-bold">2000+</h1>
              <p  className="text-black/60 font-satoshi text-sm md:text-base font-normal leading-[22px]">High-Quality Products</p>
            </div>
            <div>
              <h1 className="text-black font-satoshi text-base md:text-xl lg:text-3xl xl:text-[40px] font-bold">30000+</h1>
              <p  className="text-black/60 font-satoshi text-sm md:text-base font-normal leading-[22px]">Happy Customers</p>
            </div>
          </div>
        </div>
     
 
      <div className="w-screen flex justify-between bg-black h-[100px] px-3 md:px-5 lg:px-24 items-center flex-wrap  ">
        <Image src="/Group.svg" height={120} width={120} alt="svg" />
        <Image src="/zara-logo-1 1.svg" height={80} width={80} alt="svg" />
        <Image src="/gucci-logo-1 1.svg" height={100} width={100} alt="svg" />
        <Image src="/prada-logo-1 1.svg" height={120} width={120} alt="svg" />
        <Image src="/Group-2.svg" height={140} width={140} alt="svg" />
      </div>
      <h1 className="text-black text-center font-integral font-bold text-[48px] leading-none my-12 ">
        NEW ARRIVALS
      </h1>
      <NewArrivals />
      <h1 className=" font-satoshi border  border-black/10  w-40  hover:bg-black hover:text-white cursor-pointer transition-all duration-300 text-center px-4 py-2 rounded-4xl mx-auto ">
        View all
      </h1>
       <div className=' w-7xl mx-auto bg-black/10 h-0.5 my-12'></div>


      <h1 className="text-black text-center font-integral font-bold text-[48px] leading-none my-12 ">
        Top Selling
      </h1>
      <TopSelling/>
      <h1 className=" font-satoshi border mb-12 border-black/10  w-40 hover:bg-black hover:text-white cursor-pointer transition-all duration-300 text-center px-4 py-2 rounded-4xl mx-auto ">
        View all
      </h1>
    

      <Grid/>
      <h1 className="text-black font-integral text-center mt-10 text-[48px] font-bold leading-none " >OUR HAPPY CUSTOMERS</h1>
    
      <div className=" ml-24 ">
        <CustomerReviews />
      </div>
      
       
  
    </div>
  );
}

export default Home;
