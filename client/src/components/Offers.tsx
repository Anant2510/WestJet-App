import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image1 from "@/assets/images/Bangalore-VAHP.vaa.75.avif"; 
import Image2 from "@/assets/images/London_Landmark_card.vaa.75.avif"; 
import Image3 from "@/assets/images/london-pub.vaa.75.avif"; 
import Image4 from "@/assets/images/London-VAHPCARD.vaa.75.avif";
import Image5 from "@/assets/images/london-landmarks-big-ben.vaa.75.avif";
import Image6 from "@/assets/images/London-VAHP.vaa.75.avif";


interface Offer {
  id: number;
  title: string;
  description: string;
  image: string;
  badge: {
    text: string;
    color: string;
  };
  validUntil: string;
}

const offers: Offer[] = [
  {
    id: 1,
    title: "Flights from Bangalore",
    description: "We've started up our engines from India's start up capital.",
    image: Image1,
    badge: {
      text: "20% OFF",
      color: "bg-[#FF9933]",
    },
    validUntil: "31 Oct 2023",
  },
  {
    id: 2,
    title: "Flights from Delhi",
    description: "Check out our fares direct from Delhi to the UK and beyond.",
    image: Image2,
    badge: {
      text: "PREMIUM",
      color: "bg-[#4361EE]",
    },
    validUntil: "15 Nov 2023",
  },
  {
    id: 3,
    title: "Flights from Mumbai",
    description: "Virgin Atlantic fly twice daily from Mumbai to London Heathrow. Check out our fares direct to the UK and beyond.",
    image: Image3,
    badge: {
      text: "FAMILY",
      color: "bg-[#138808]",
    },
    validUntil: "31 Dec 2023",
  },
  {
    id: 4,
    title: "Flights from Goa",
    description: "Connect to your Virgin Atlantic flight to London and beyond from Goa.",
    image: Image4,
    badge: {
      text: "15% OFF",
      color: "bg-[#4361EE]",
    },
    validUntil: "31 Jan 2024",
  },
  {
    id: 5,
    title: "Flights from Ahmedabad",
    description: "Connect to your Virgin Atlantic flight to London and beyond from Ahmedabad.",
    image: Image5,
    badge: {
      text: "15% OFF",
      color: "bg-[#4361EE]",
    },
    validUntil: "31 Jan 2024",
  },
  {
    id: 6,
    title: "Flights from Amritsar",
    description: "Connect to your Virgin Atlantic flight to London and beyond from Amritsar.",
    image: Image6,
    badge: {
      text: "15% OFF",
      color: "bg-[#4361EE]",
    },
    validUntil: "31 Jan 2024",
  }
];

//  {console.log(offers)}

const Offers: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between mb-4">
          <div className="mb-3">
            <h2 className="font-thin tracking-wide text-3xl md:text-5xl mb-8">Flights from India...</h2>
            {/* <p className="text-neutral-700">Exclusive deals to make your journey more affordable</p> */}
          </div>
          
        </div>

        <div className="relative cardSe">
          <div className="flex space-x-2 justify-end mb-5">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-sm bg-[#f5f5f6] flex justify-center"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-sm bg-[#f5f5f6] flex justify-center"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div
            ref={carouselRef}
            className="flex space-x-4 overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            
            {offers.map((offer) => (
             
              <div
                key={offer.id}
                className="flex-shrink-0 w-full  md:w-1/2 lg:w-1/3"
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative ">
                    <div className="h-[260px]  overflow-hidden rounded-sm ">
                      <img
                      src={offer.image}
                      alt={offer.title}
                      className="hover:opacity-80 transition-opacity w-full h-full cursor-pointer  object-cover "
                    />
                    </div>
                    
                    {/* <div
                      className={`absolute top-4 right-4 ${offer.badge.color} text-white px-3 py-1 rounded-full font-medium`}
                    >
                      {offer.badge.text}
                    </div> */}
                  </div>
                  <CardContent className="p-[0] pt-6">
                    <h3 className="font-normal text-[26px] tracking-wide mb-3">{offer.title}</h3>
                    <p className="text-base mb-4 tracking-wide">
                      {offer.description}
                    </p>
                    <div className="flex items-center justify-between">
                      {/* <span className="text-sm text-neutral-600">
                        Valid till: {offer.validUntil}
                      </span> */}

                  
                      <Button
                        variant="outline"
                        className="px-5 py-2 border-[#da0530] text-base hover:border-[#880d29] text-[#da0530] hover:text-[#880d29] rounded-md font-normal hover:bg-[#fcf1f3]   transition-colors duration-300"
                      >
                        Book Now 
                        {/* <ArrowRight className="ml-1 h-4 w-4" /> */}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
