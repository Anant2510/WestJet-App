import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Adjust the import path according to your project structure
import { DEMO_FLIGHTS } from "@/lib/constants";
import thumbnailImg from "@/assets/images/small-size-image.jpg";
import { pushToDataLayer } from "@/utils/dataLayer";
import { CiFilter } from "react-icons/ci";
import BookingWizardCopy from "./BookingWizardCopy";
import { IoIosArrowRoundBack } from "react-icons/io";


const FlightResults: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { source, destination } = location.state || {};

  // Generate random flights if no matches are found
  const generateRandomFlights = (source: string, destination: string) => {
    const airlines = ["VA", "Indigo", "Etihad Airways"];
    const flights: {
      flightNumber: string;
      departure: string;
      arrival: string;
      airline: string;
      duration: string;
      price: string;
    }[] = [];

    // const random = String(Math.floor(Math.random() * 1000)).padStart(3,"0");
    airlines.forEach((airline) => {
      for (let i = 0; i < 5; i++) {
        flights.push({
          
          flightNumber: `${airline.split(" ")[0].toUpperCase()}${String(Math.floor(Math.random() * 900)).slice(-3).padStart(3,"0")}`,
          departure: source,
          arrival: destination,
          airline: airline,
          duration: `${Math.floor(2 + Math.random() * 10)}h ${Math.floor(
            Math.random() * 60
          )}m`,
          price: `₹${Math.floor(5000 + Math.random() * 20000)}`,
        });
      }
    });

    return flights;
  };

  // Filter flights based on source and destination
  const filteredFlights = DEMO_FLIGHTS.filter(
    (flight) => flight.departure === source && flight.arrival === destination
  );

  const finalFlights = [
    ...filteredFlights,
    ...generateRandomFlights(source || "Unknown", destination || "Unknown"),
  ];

  console.log(finalFlights)

  const handleSelectFlight = (flight: any) => {
    pushToDataLayer({
      event: "button_click",
      buttonName: "Select Flight",
      location: "Flight results",
      timestamp: new Date().toISOString(),
    });
    const flightData = {
      ...flight,
      departureTime: new Date(flight.departureTime || Date.now()),
      arrivalTime: new Date(
        flight.arrivalTime || Date.now() + 2 * 60 * 60 * 1000
      ),
    };
    navigate("/seat-selection", { state: { flight: flightData } });
  };

  return (
    <div className="flight-results">
      <div className="w-full  flex items-center justify-center">
        <div className="w-2/3 py-2 flex items-center cursor-pointer">
          <span><IoIosArrowRoundBack className="text-3xl " onClick={() => navigate(-1)} /></span>Back
        </div>
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="border-neutral-300"
        >
          Back to Flights
        </Button>
      </div>
      {/* BookingWizard with button on same line as fields */}
      <div className="flex items-center justify-center">
        <div className="w-2/3">
          <BookingWizardCopy />
        </div>
      </div>
      {/* Select Your flight & Filter */}
      <div className="flex items-centre justify-center">
        <div className="w-2/3 flex items-centre justify-between p-4">
          <b>Select Your flight</b>
          <div className="flex items-center cursor-pointer">
            Filter
            <CiFilter className="text-xl" />
          </div>
        </div>
      </div>
      <div className="flight-cards">
        {finalFlights.map((flight) => (
          <div
            key={flight.flightNumber}
            className="flight-card relative flex items-center justify-center h-[120px] "
          >
            <div className="w-[30%] h-full flex ">
              <div className="w-[80px] h-full ">
                <img
                  src={thumbnailImg}
                  alt="img"
                  className="h-full rounded-sm"
                />
              </div>
              <div className="flex flex-col items-start justify-center pl-4 gap-1 [line-height:1]">
                <h4>
                  {/* <span className="text-[#e10a0a]">BIR</span>  */}
                  {flight.flightNumber}
                </h4>
                <p>{flight.airline}</p>
              </div>
            </div>

            <div className=" w-[50%] h-full flex justify-evenly items-center">
              <p>{flight.departure}</p>
              <div className="px-4 border-b-2 ">
                <div>{flight.duration}</div>
              </div>
              <p>{flight.arrival}</p>
            </div>

            <div className="w-[20%] flex justify-center">
              <button
                className="text-white h-10 w-4/5 bg-[#e10a0a] rounded-sm shadow border"
                onClick={() => handleSelectFlight(flight)}
              >
                Select Flight
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightResults;
