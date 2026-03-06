import React, { useState, useEffect } from "react";
import BookingWizard from "./BookingWizard";
import HomeBanner from "../assets/images/homeBanner.jpg"
import { Button } from "@/components/ui/button";

interface HeroSliderProps {
  user: string | null;
}



const HeroSlider: React.FC<HeroSliderProps> = ({ user }) => {
  
  // console.log(user)
  

  return (
    <section className="relative  overflow-hidden1 h-[664px]  bg-slate-900">
      {user}
      {/* Banner */}
      <div className="h-full w-full pt-[243px] overflow-hidden">
    <img src={HomeBanner} alt="Home Banner" className="hover:scale-110 transform transition-transform  as cursor-pointer object-fill  inset-0  duration-1000" style={{aspectRatio:"2.5/1", objectFit: "cover"}} />
      </div>


      {/* Banner white box */}
      <div className="container mx-auto absolute left-0 right-0 top-[51%] z-1">
         <div className=" transform  bg-white shadow-sm w-[50%]  rounded-sm p-[45px]  ">
        <h2 className="text-[40px] font-light text-gray-800 mb-4">
          Take off to the UK and beyond
        </h2>
        <p className="mb-5">Book your travel today.</p>

         <Button 
              type="submit" 
              className="bg-gradient-to-r text-[15px] from-[#da0530] to-[#da0530] text-white px-4 tracking-wide py-5 rounded-md shadow-lg transition-all font-normal transform  hover:from-[#b1062b] hover:to-[#b1062b]"
            >
              {/* <Search className="mr-2 h-5 w-5" /> */}
              Flights from 501pp
              
              {/* <svg className=" h-10 w-16 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/>
</svg> */}

            </Button>
      </div>
      </div>
     


      {/* Content */}

      <div className="w-full  pt-5 absolute top-[62px] left-0" >
        <div
          className=" px-4 flex flex-col justify-center  z-10"
          style={{ background: "#da0530" }}
        >
          <div className="container mx-auto ">
            <div className=" text-white ">
              <p className=" mx-auto py-5 text-2xl">
                {!user && `So, where next?`}
                {user === "user1" &&
                  `Connecting Families Globally with Love, Tradition, and Comfort`}
                {user === "user2" &&
                  `Journey Solo, Experience the World with Culture and Comfort`}
              </p>
            </div>

            <BookingWizard />
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default HeroSlider;
