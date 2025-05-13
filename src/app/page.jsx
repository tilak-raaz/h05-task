import Image from "next/image"
function Navbar() {
 return (
      
   <div className=" h-max w-screen">
    <Image src="/Rectangle 2.png" className=" object-cover" width={1440} height={0} alt="image">

    </Image>
    <div  className="w-screen flex justify-between bg-black h-[100px] px-24 items-center shrink-0">
      <Image src="/Group.svg" height={120} width={120} alt="svg"/>
      <Image src="/zara-logo-1 1.svg" height={80} width={80} alt="svg"/>
      <Image src="/gucci-logo-1 1.svg" height={100} width={100} alt="svg"/>
      <Image src="/prada-logo-1 1.svg" height={120} width={120} alt="svg"/>
      <Image src="/Group-2.svg" height={140} width={140} alt="svg"/>
    </div>
    <h1 className="text-black text-center font-bold text-[48px] leading-none my-12 ">NEW ARRIVALS</h1>
      
   </div>
     
 )
}

export default Navbar