import React from "react";
import Link from "next/link";
import Image from "next/image";

function SignupBar() {
  return (
    <div className=" w-screen h-max flex  i justify-around gap-8 sm:gap-[90px] md:gap-[200px] lg:gap-[425px]    bg-black   py-[9px] px-4 sm:px-[90px]">
      <div>
        <span className="  text-[12px] sm:text-sm text-center text-white">
          Sign up and get 20% off to your first order.
        </span>

        <Link
          href={"/signup"}
          className=" text-[12px] sm:text-sm   text-white font-bold underline cursor-pointer"
        >
          Sign Up Now
        </Link>
      </div>

      <Image src="/Frame.svg" alt="Frame" width={20} height={20}></Image>
    </div>
  );
}

export default SignupBar;
