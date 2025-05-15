"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function Grid() {
  return (
    <div className="h-screen bg-[#F0F0F0] py-10 mx-auto mb-20 rounded-4xl w-7xl">
        <h1 className="text-black text-center font-integral text-[48px] font-bold leading-none">Browse By Dress Style</h1>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://res.cloudinary.com/du5qoczcn/image/upload/v1747198732/image_13_dq7e6h.png",
    title: "Formal",
    description: "Express yourself with our relaxed and comfortable casual wear collection."
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://res.cloudinary.com/du5qoczcn/image/upload/v1747198729/image_11_tkn9yl.png ",
    title: "Casual",
    description: "Elegant and sophisticated outfits for your professional needs."
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      " https://res.cloudinary.com/du5qoczcn/image/upload/v1747198731/image_14_v8wb4u.png",
    title: "Gym",
    description: "Shine bright with our stunning collection for special occasions."
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://res.cloudinary.com/du5qoczcn/image/upload/v1747198732/image_12_tdisez.png",
    title: "Party",
    description: "Performance meets fashion in our athletic wear collection."
  },
];
