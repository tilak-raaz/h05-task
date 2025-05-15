"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const reviewsData = [
  {
    id: 1,
    name: "Sarah M.",
    avatar: "/avatar1.svg", // Replace with actual avatar paths
    rating: 5,
    date: "August 15, 2023",
    review: "I'm blown away by the quality and style of the clothes I received. The fabric is luxurious, and the fit is perfect. Definitely exceeded my expectations!",
    product: "Slim Fit Jeans"
  },
  {
    id: 2,
    name: "Michael R.",
    avatar: "/avatar2.svg",
    rating: 5,
    date: "September 23, 2023",
    review: "The attention to detail is impressive. From the stitching to the buttons, everything feels premium. I've received many compliments on my new shirt!",
    product: "Casual Oxford Shirt"
  },
  {
    id: 3,
    name: "Jessica T.",
    avatar: "/avatar3.svg",
    rating: 4,
    date: "October 5, 2023",
    review: "The delivery was faster than expected and the packaging was eco-friendly, which I appreciate. The dress fits perfectly and looks exactly like the pictures.",
    product: "Summer Dress"
  },
  {
    id: 4,
    name: "David K.",
    avatar: "/avatar4.svg",
    rating: 5,
    date: "November 12, 2023",
    review: "Customer service was exceptional. They helped me find the right size, and when the first item didn't fit, the exchange process was seamless. Great experience!",
    product: "Winter Jacket"
  },
  {
    id: 5,
    name: "Alicia P.",
    avatar: "/avatar5.svg",
    rating: 5,
    date: "December 3, 2023",
    review: "The clothes I ordered are versatile and easy to mix and match. Great value for the price, and they wash well without losing shape or color.",
    product: "Essential T-shirts"
  }
];

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-black/5 flex flex-col h-full max-w-xs">
      <div className="flex justify-between items-start mb-2">
        <div className="flex gap-2">
          <div className="w-8 h-8 relative rounded-full overflow-hidden bg-gray-200">
            <Image 
              src={review.avatar} 
              alt={`${review.name} avatar`} 
              width={32} 
              height={32}
              className="object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/32";
              }}
            />
          </div>
          <div>
            <h3 className="font-satoshi font-bold text-sm">{review.name}</h3>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-xs ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
              ))}
            </div>
          </div>
        </div>
        <span className="text-[10px] text-black/40 font-satoshi">{review.date}</span>
      </div>
      
      <p className="text-black/70 font-satoshi text-xs flex-grow mb-2 line-clamp-5">"{review.review}"</p>
      
      <div className="font-satoshi text-[10px] text-black/40 mt-auto">
        Purchased: <span className="font-medium text-black/60">{review.product}</span>
      </div>
    </div>
  );
};

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(reviewsData.length / itemsPerPage);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  // Get current reviews
  const currentReviews = reviewsData.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="w-max mx-auto px-6 md:px-8 mt-10 lg:px-12 mb-12">
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {currentReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        
        <div className="flex justify-center items-center gap-2 mt-4">
          <button 
            onClick={goToPrev}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-black/10 hover:bg-black hover:text-white transition-colors"
            aria-label="Previous reviews"
          >
            ←
          </button>
          
          {[...Array(totalPages)].map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === currentIndex ? "bg-black w-3" : "bg-black/20"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
          
          <button 
            onClick={goToNext}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-black/10 hover:bg-black hover:text-white transition-colors"
            aria-label="Next reviews"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
} 