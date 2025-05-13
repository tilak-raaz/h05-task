import React from 'react'
 
 
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
 

 export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Search for men's t-shirts",
  "Find the perfect summer dress",
  "Looking for trendy sneakers?",
  "Browse winter jackets on sale",
  "Discover accessories under $20",
  ];
 
  const handleChange = (e ) => {
    console.log(e.target.value);
  };
  const onSubmit = (e ) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className=" flex flex-col justify-center  items-center ">
      
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}