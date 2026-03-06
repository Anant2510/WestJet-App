import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlaneTakeoff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import baliImage from "@/assets/images/family-snorkeling-underwater-in-bali.jpg";
import tokiyoImage from "@/assets/images/tokyo-disneyland-japan.jpg";
import phuketImage from "@/assets/images/tourists-with-elephants-at-the-phuket-elephant-sanctuary.jpg";
import barcelonaImage from "@/assets/images/BARCELONA.jpg";
import veniceImage from "@/assets/images/Rialtobridge_20220718170000.jpg";
import viennaImage from "@/assets/images/Wien_-_Graben_28229_20190714104413.jfif";
import Image1 from "@/assets/images/hn-intermilan-crew-2025.jpg"; 
import Image2 from "@/assets/images/VFR-India-HPVA.vaa.75.jpg";
import { string } from "zod";

interface Destination {
  id: number;
  name: string;
  image: string;
  heading: string;
  p0:string;
  p1:string;
  from: string;
  price: string;
  departure: string;
  arrival: string;
  flightNumber: string;
  airline?: string;
  duration: string;
  departureTime: string;
  arrivalTime: string;
}

interface DestinationsProps {
  user: string | null;
}

let name1 = "Dubai";
let image1 = Image1;
let heading1 = "Let's go, Toronto";
let p01 = "Book your flights with Virgin Atlantic via London Heathrow";
let p02= "Dip your toe into Toronto, a waterfront city that has it all.";
let from1 = "New Delhi";
let price1 = "₹24,999";
let departure1 = "New Delhi";
let arrival1 = "Dubai";
let flightNumber1 = "AI9781";
let duration1 = "8h 23m";
let departureTime1 = "2025-05-08T09:21:53.033Z";
let arrivalTime1 = "2025-05-08T11:21:53.033Z";

let name2 = "London";
let image2 = Image2;
let heading2 = "Visit friends and family";
let p11 = "Sometimes a flight is so much more than a flight.";
let p12 = "While we fly for a million reasons, you only need one. Travel back to the faces, and the places, you’ve missed so much.";
let from2 = "Mumbai";
let price2 = "₹49,999";
let departure2 = "Mumbai";
let arrival2 = "London";
let flightNumber2 = "AI9782";
let duration2 = "7h 15m";
let departureTime2 = "2025-05-08T09:21:53.033Z";
let arrivalTime2 = "2025-05-08T11:21:53.033Z";

// let name3 = "Singapore";
// let image3 =
//   "https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/campaigns/qatar/stopover/hn-family-nmoq-qatar-stopover.jpg";
// let heading3 = "Visit friends and family";
// let p21 = "Sometimes a flight is so much more than a flight.";
// let p22 = "While we fly for a million reasons, you only need one. Travel back to the faces, and the places, you’ve missed so much.";
// let from3 = "Bangalore";
// let price3 = "₹32,499";
// let departure3 = "Bangalore";
// let arrival3 = "Singapore";
// let flightNumber3 = "AI9783";
// let duration3 = "6h 20m";
// let departureTime3 = "2025-05-08T09:21:53.033Z";
// let arrivalTime3 = "2025-05-08T11:21:53.033Z";

const defaultDestinations: Destination[] = [
  {
    id: 1,
    name: name1,
    image: image1,
    heading: heading1,
  p0:p01,
  p1:p02,
    from: from1,
    price: price1,
    departure: departure1,
    arrival: arrival1,
    flightNumber: flightNumber1,
    duration: duration1,
    departureTime: departureTime1,
    arrivalTime: arrivalTime1,
  },
  {
    id: 2,
    name: name2,
    image: image2,
     heading: heading2,
  p0:p11,
  p1:p12,
    from: from2,
    price: price2,
    departure: departure2,
    arrival: arrival2,
    flightNumber: flightNumber2,
    duration: duration2,
    departureTime: departureTime2,
    arrivalTime: arrivalTime2,
  },
  // {
  //   id: 3,
  //   name: name3,
  //   image: image3,
  //   heading: heading3,
  // p0:p21,
  // p1:p22,
  //   from: from3,
  //   price: price3,
  //   departure: departure3,
  //   arrival: arrival3,
  //   flightNumber: flightNumber3,
  //   duration: duration3,
  //   departureTime: departureTime3,
  //   arrivalTime: arrivalTime3,
  // },
];

const Destinations: React.FC<DestinationsProps> = ({ user }) => {
  const navigate = useNavigate();
  //const [destinations, setDestinations] = useState(defaultDestinations);

  const [destinations, setDestinations] =
    useState<Destination[]>(defaultDestinations);

  useEffect(() => {
    if (user === "user1") {
      name1 = "Bali";
      image1 = baliImage;
      heading1 = "Let's go, Toronto";
p01 = "Book your flights with Virgin Atlantic via London Heathrow";
p02= "Dip your toe into Toronto, a waterfront city that has it all.";
      from1 = "New Delhi";
      price1 = "₹24,999";
      departure1 = "New Delhi";
      arrival1 = "Bali";
      flightNumber1 = "BI9781";
      duration1 = "6h 20m";
      departureTime1 = "2025-05-08T09:21:53.033Z";
      arrivalTime1 = "2025-05-08T11:21:53.033Z";

      name2 = "Tokiyo";
      image2 = tokiyoImage;
      heading1 = "Let's go, Toronto";
p11 = "Book your flights with Virgin Atlantic via London Heathrow";
p12= "Dip your toe into Toronto, a waterfront city that has it all.";
      from2 = "Mumbai";
      price2 = "₹24,999";
      departure2 = "Mumbai";
      arrival2 = "Tokiyo";
      flightNumber2 = "TI9781";
      duration2 = "5h 20m";
      departureTime2 = "2025-05-08T09:21:53.033Z";
      arrivalTime2 = "2025-05-08T11:21:53.033Z";

//       name3 = "Phuket";
//       image3 = phuketImage;
//       heading1 = "Let's go, Toronto";
// p21 = "Book your flights with Virgin Atlantic via London Heathrow";
// p22= "Dip your toe into Toronto, a waterfront city that has it all.";
//       from3 = "New Delhi";
//       price3 = "₹24,999";
//       departure3 = "New Delhi";
//       arrival3 = "Phuket";
//       flightNumber3 = "BI9781";
//       duration3 = "6h 20m";
//       departureTime3 = "2025-05-08T09:21:53.033Z";
//       arrivalTime3 = "2025-05-08T11:21:53.033Z";
    } else if (user === "user2") {
      name1 = "Barcelona";
      image1 = barcelonaImage;
      heading1 = "Let's go, Toronto";
p01 = "Book your flights with Virgin Atlantic via London Heathrow";
p02= "Dip your toe into Toronto, a waterfront city that has it all.";
      from1 = "New Delhi";
      price1 = "₹24,999";
      departure1 = "Barcelona";
      arrival1 = "New Delhi";
      flightNumber1 = "BAR9781";
      duration1 = "6h 20m";
      departureTime1 = "2025-05-08T09:21:53.033Z";
      arrivalTime1 = "2025-05-08T11:21:53.033Z";

      name2 = "Venice";
      image2 = veniceImage;
      heading2 = "Let's go, Toronto";
p11 = "Book your flights with Virgin Atlantic via London Heathrow";
p12= "Dip your toe into Toronto, a waterfront city that has it all.";
      from2 = "Mumbai";
      price2 = "₹24,999";
      departure2 = "Mumbai";
      arrival2 = "Venice";
      flightNumber2 = "VN9781";
      duration2 = "5h 20m";
      departureTime2 = "2025-05-08T09:21:53.033Z";
      arrivalTime2 = "2025-05-08T11:21:53.033Z";

//       name3 = "Vienna";
//       image3 = viennaImage;
//       heading3 = "Let's go, Toronto";
// p21 = "Book your flights with Virgin Atlantic via London Heathrow";
// p22= "Dip your toe into Toronto, a waterfront city that has it all.";
//       from3 = "New Delhi";
//       price3 = "₹24,999";
//       departure3 = "New Delhi";
//       arrival3 = "Vienna";
//       flightNumber3 = "VI9781";
//       duration3 = "6h 20m";
//       departureTime3 = "2025-05-08T09:21:53.033Z";
//       arrivalTime3 = "2025-05-08T11:21:53.033Z";
    }

    const destinationsData: Destination[] = [
      {
        id: 1,
        name: name1,
        image: image1,
        from: from1,
         heading: heading1,
  p0:p01,
  p1:p02,
        price: price1,
        departure: departure1,
        arrival: arrival1,
        flightNumber: flightNumber1,
        duration: duration1,
        departureTime: departureTime1,
        arrivalTime: arrivalTime1,
      },
      {
        id: 2,
        name: name2,
        image: image2,
         heading: heading2,
  p0:p11,
  p1:p12,
        from: from2,
        price: price2,
        departure: departure2,
        arrival: arrival2,
        flightNumber: flightNumber2,
        duration: duration2,
        departureTime: departureTime2,
        arrivalTime: arrivalTime2,
      },
  //     {
  //       id: 3,
  //       name: name3,
  //       image: image3,
  //        heading: heading3,
  // p0:p21,
  // p1:p22,
  //       from: from3,
  //       price: price3,
  //       departure: departure3,
  //       arrival: arrival3,
  //       flightNumber: flightNumber3,
  //       duration: duration3,
  //       departureTime: departureTime3,
  //       arrivalTime: arrivalTime3,
  //     },
    ];

    setDestinations(destinationsData);
    //setDestinations(prevItems => [...prevItems, ...destinationsData]);
  }, [user]);

  const handleSelectFlight = (flight: any) => {
    const flightData = {
      ...flight,
      departureTime: new Date(flight.departureTime || Date.now()),
      arrivalTime: new Date(
        flight.arrivalTime || Date.now() + 2 * 60 * 60 * 1000
      ),
    };
    navigate("/seat-selection", {
      state: { flight: flightData, offers: true },
    });
  };

  return (
    <section className="py-9 ">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between mb-12">
          {/* <div>
            <h2 className="font-bold text-3xl md:text-4xl mb-2">Popular Destinations</h2>
            <p className="text-neutral-700">Explore our most sought-after flight routes</p>
          </div> */}
          {/* <a href="#" className="text-[#4361EE] font-medium hover:text-[#FF9933] transition-colors">
            View All Destinations <span className="ml-1">→</span>
          </a> */}
        </div>

        <div className=" mx-auto   space-y-6">
          
          {destinations.map((destination, i) => {

            const reverse = i % 2 !== 0;

            return (
              <React.Fragment  key={destination.id}>
                <article
                 
                  className="bg-white h-min-[320px] rounded-sm overflow-hidden flex flex-col md:grid md:grid-cols-2 items-stretch "
                >
                  <div
                    className={`relative h-56 md:h-auto mb-5 overflow-hidden ${
                      reverse ? "order-2 md:order-2 rounded-sm ml-8" : "order-1 md:order-1 rounded-sm mr-8"
                    }`}
                  >
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="hover:opacity-80 transition-opacity w-full h-full object-cover min-w-[100%]  scale-110 cursor-pointer"
                    />
                    
                  </div>

                  {/*Text Area*/}

                  <div
                    className={`p-6 md:p-8 flex flex-col justify-center  ${
                      reverse ? " order-1 md:order-1 " : "order-1 md:order-1 "
                    }`}
                  >
                    <div className="py-4">
                      <h2 className=" text-2xl mb-4 tracking-wide">{destination.heading}</h2>
                      <p className="text-base font-bold mb-2 tracking-wide">{destination.p0}</p>
                      <p className="text-base mb-2 tracking-wide">{destination.p1}</p>
                      {/* <span className=" font-bold text-xl">
                        {destination.name}
                      </span> */}
                    </div>

                    <div className="">
                      {/* <PlaneTakeoff className="text-[#FF9933] mr-2 h-5 w-5" /> */}
                      {/* <span>From {destination.from}</span> */}
                         {/* <span className="font-bold text-[#4361EE]">
                      {destination.price}
                    </span> */}

                      <Button
                      onClick={() => handleSelectFlight(destination)}
                      variant="outline"
                      className="px-5 py-2 text-base font-normal border-[#da0530] hover:border-[#880d29] text-[#da0530] hover:text-[#880d29] rounded-md hover:bg-[#fcf1f3]   transition-colors duration-300"
                    >
                      Book Now
                    </Button>
                    </div>
                   
                  </div>
                </article>
                {/* <Card
                  key={destination.id}
                  className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-xl"
                >
                  <div className="relative h-56">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <span className="text-white font-bold text-xl">
                        {destination.name}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <PlaneTakeoff className="text-[#FF9933] mr-2 h-5 w-5" />
                        <span>From {destination.from}</span>
                      </div>
                      <span className="font-bold text-[#4361EE]">
                        {destination.price}
                      </span>
                    </div>

                    <Button
                      onClick={() => handleSelectFlight(destination)}
                      variant="outline"
                      className="w-full border border-[#4361EE] text-[#4361EE] hover:bg-[#4361EE] hover:text-white rounded-lg py-2 transition-colors"
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card> */}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
