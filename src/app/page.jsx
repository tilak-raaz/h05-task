import Image from "next/image";

import { NewArrivals } from "@/components/NewArrivalsCards";
import { TopSelling } from "@/components/ TopSelling";
import { Grid } from "@/components/Layoutgrid";
 
function Home() {
  return (
    <div className=" h-max w-screen">
      <Image
        src="/Rectangle 2.png"
        className=" object-cover"
        width={1440}
        height={0}
        alt="image"
      ></Image>
      <div className=" text-4xl  absolute z-[70] "> dcsjdajcnkl</div>
      <div className="w-screen flex justify-between bg-black h-[100px] px-24 items-center shrink-0">
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
      <h1 className="text-black font-integral my-10 text-[48px] fon font-bold leading-none ml-24" >OUR HAPPY CUSTOMERS</h1>
  

  
    </div>
  );
}

export default Home;
