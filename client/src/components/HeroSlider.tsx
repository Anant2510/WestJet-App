import React, { useState, useEffect } from "react";
import BookingWizard from "./BookingWizard";
import HomeBanner from "../assets/images/homeBanner.jpg"
import { Button } from "@/components/ui/button";

interface HeroSliderProps {
  user: string | null;
}
// 20250428_AEMHeroBanner_1000x686px_AllInDECC.jpg
let image1 =
  "https://www.virginaustralia.com/content/dam/vaa/img/banners/20250428_AEMHeroBanner_1000x686px_AllInDECC.jpg";
let alt1 = "virginaustralia";
let image2 =
  "https://www.virginaustralia.com/content/dam/vaa/img/banners/20250521_AEMBanner_1000x686px_WelcomeAbroad.jpg";
let alt2 = "virginaustralia";
// let image3 =
//   "https://www.virginaustralia.com/content/dam/vaa/img/banners/20250428_AEMHeroBanner_1000x686px_AllInDECC.jpg";
// let alt3 = "Jaipur City Palace";

const defaultSlides = [
  {
    id: 1,
    image: image1,
    alt: "virginaustralia",
  },
  {
    id: 2,
    image: image2,
    alt: "virginaustralia",
  },
  // {
  //   id: 3,
  //   image: image3,
  //   alt: "Jaipur City Palace",
  // },
];

const HeroSlider: React.FC<HeroSliderProps> = ({ user }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState(defaultSlides);
  // console.log(user)
  useEffect(() => {
    if (user === "user1") {
      image1 =
        "https://www.virginaustralia.com/content/dam/vaa/img/banners/20250428_AEMHeroBanner_1000x686px_AllInDECC.jpg";
      alt1 = "virginaustralia";
      image2 =
        "https://www.virginaustralia.com/content/dam/vaa/img/banners/20250521_AEMBanner_1000x686px_WelcomeAbroad.jpg";
      alt2 = "virginaustralia";
      // image3 =
      //   "https://www.timesaerospace.aero/sites/aerospace/times/files/styles/lead_image_2_1280x720_/public/2023-12/Unknown-1.jpeg?itok=x2fp6fG-";
      // alt3 = "new indi";
    } else if (user === "user2") {
      image1 =
        "https://www.virginaustralia.com/content/dam/vaa/img/banners/20250428_AEMHeroBanner_1000x686px_AllInDECC.jpg";
      alt1 = "virginaustralia";
      image2 =
        "https://www.virginaustralia.com/content/dam/vaa/img/banners/20250521_AEMBanner_1000x686px_WelcomeAbroad.jpg";
      alt2 = "virginaustralia";
      // image3 =
      //   "https://www.timesaerospace.aero/sites/aerospace/times/files/styles/lead_image_2_1280x720_/public/2023-12/Unknown-1.jpeg?itok=x2fp6fG-";
      // alt3 = "new indi";
    }
    const slidesData = [
      {
        id: 1,
        image: image1,
        alt: alt1,
      },
      {
        id: 2,
        image: image2,
        alt: alt2,
      },
      // {
      //   id: 3,
      //   image: image3,
      //   alt: alt3,
      // },
    ];

    setSlides(slidesData);
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [user]);

  return (
    <>
    
    <section className="relative  overflow-hidden1 ">
      {user}
      {/* Banner */}
      {/* <div className="h-full w-full pt-[243px] overflow-hidden">
    <img src={HomeBanner} alt="Home Banner" className=" w-full h-full hover:scale-110 transform transition-transform  as cursor-pointer object-fill  inset-0  duration-1000" style={{aspectRatio:"2.5/1", objectFit: "cover"}} />
      </div> */}


      {/* Banner white box */}
      {/* <div className="container mx-auto absolute left-0 right-0 top-[51%] z-1">
         <div className=" transform  bg-white shadow-sm w-[50%]  rounded-sm p-[45px]  ">
        <h2 className="text-[40px] font-light text-gray-800 mb-4">
          Take off to the UK and beyond kjkjkk
        </h2>
        <p className="mb-5">Book your travel today.</p>

         <Button 
              type="submit" 
              className="bg-gradient-to-r text-[15px] from-[#da0530] to-[#da0530] text-white px-4 tracking-wide py-5 rounded-md shadow-lg transition-all font-normal transform  hover:from-[#b1062b] hover:to-[#b1062b]"
            >
              Flights from 501pp

            </Button>
      </div>
      </div> */}
     


      {/* Content */}

      <div className="w-full  pt-5 absolute top-[62px] left-0 hidden" >
        <div
          className=" px-4 flex flex-col justify-center  z-10"
         
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

            {/* <BookingWizard /> */}
          </div>
        </div>
      </div>

     
    </section>

    <section className=" h-screen pt-16 overflow-hidden1 ">
      {/* Slider */}
      {user}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== currentSlide}
        >
          <div
            className="absolute inset-0 bg-black bg-opacity-40"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        </div>
      ))}

      {/* Content */}

      <div className="w-full  pt-5 relative top-[160px] z-10">
        <div
          className="  flex flex-col justify-center  z-10"
          
        >
          <div className="container mx-auto  " >
            <div className=" text-white ">
              {/* <h1 className=" text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 font-montserrat font-light">
            Experience the <span className="text-[#FF9933]">Sky</span> of India
          </h1> */}
              <p className=" mx-auto py-5 text-2xl ">
                {!user && `So, where next?`}
                {user === "user1" &&
                  `Connecting Families Globally with Love, Tradition, and Comfort`}
                {user === "user2" &&
                  `Journey Solo, Experience the World with Culture and Comfort`}
              </p>
            </div>

            {/* Booking Form */}
            <BookingWizard />
          </div>
        </div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute bottom-6 left-0 right-0 justify-center m-auto w-20 space-x-2 z-20  ">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
    </>
  );
};

export default HeroSlider;
