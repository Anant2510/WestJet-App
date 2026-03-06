import React, { useId, useState, KeyboardEvent, ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Search, PlaneTakeoff, PlaneLanding, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { DEPARTURE_CITIES, ARRIVAL_CITIES, DEMO_FLIGHTS } from "@/lib/constants";
import { pushToDataLayer } from '../utils/dataLayer';
import { GiCommercialAirplane } from "react-icons/gi";
import { TbCarSuvFilled } from "react-icons/tb";
import { MdLocalHotel } from "react-icons/md";


const formSchema = z.object({
  source: z.string().min(1, "Departure city is required"),
  destination: z.string().min(1, "Arrival city is required"),
  departureDate: z.date({
    required_error: "Departure date is required",
  }),
  passengers: z.object({
    adults: z.number().min(1).max(9),
    children: z.number().min(0).max(9),
    infants: z.number().min(0).max(9),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const BookingWizard: React.FC = () => {

 

  const { toast } = useToast();
  const navigate = useNavigate();
  const [showPassengersDropdown, setShowPassengersDropdown] = useState(false);
  const [searchParams, setSearchParams] = useState<{
    source: string;
    destination: string;
    departureDate: string;
  } | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      source: "",
      destination: "",
      passengers: {
        adults: 1,
        children: 0,
        infants: 0,
      },
    },
  });

  const handleSubmit = (data: FormValues) => {
    // add data into data layer
    // added for re reinitialized on search
    window.dataLayer = [];
    pushToDataLayer({ 
      event:"flightsearch",
      flightContext:{
        tripType: "one-way",  // or "round-trip", "multi-city"
        origin: form.getValues("source"),
        destination: form.getValues("destination"),
        departureDate: form.getValues("departureDate").toISOString(),
        returnDate: "",
        passengerCount: form.getValues("passengers"),
        cabinClass: "economy",
      }
    });

    // Navigate to dummy flight results page
    navigate('/flight-results', {
      state: {
        source: form.getValues("source"),
        destination: form.getValues("destination"),
        flights: DEMO_FLIGHTS,
      },
    });
  };
  
  // Helper to increment/decrement passenger counts
  const updatePassengerCount = (type: 'adults' | 'children' | 'infants', increment: boolean) => {
    const currentValue = form.getValues(`passengers.${type}`);
    const newValue = increment ? currentValue + 1 : Math.max(currentValue - 1, type === 'adults' ? 1 : 0);
    form.setValue(`passengers.${type}`, newValue);
  };
  
  // Get the total number of passengers
  const totalPassengers = () => {
    const values = form.getValues().passengers;
    return values.adults + values.children + values.infants;
  };
  
  const passengersLabel = () => {
    const total = totalPassengers();
    if (total === 1) return "1 Adult";
    return `${total} Passengers`;
  };

  const handleNewSearch = () => {
    form.reset({
      source: "",
      destination: "",
      passengers: {
        adults: 1,
        children: 0,
        infants: 0,
      },
    });
  };

  

  return (
    <div className="booking-wizard  mx-auto  w-full    shadow-lg ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* <div style={{height:'23px'}}>

          </div> */}


          <div className=" flex items-center justify-center  ">
    <div className="w-full ">
      <div className="rounded-2xl overflow-hidden shadow-lg bg-[#E6205A]">
        {/* BANNER HEADER - red/magenta per screenshot */}
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-white text-3xl font-extrabold mt-1">
                Sydney <span>(SYD)</span>
              </h1>
            </div>
          </div>

          {/* TABS - dark teal bg, white text, selected with white border */}
          <div className="mt-6 flex justify-start">
            <div className="inline-flex gap-0 mr-6 bg-[#024e49] border border-[#024e49] rounded-md overflow-hidden">
              <button type="button" className="px-3 py-2 rounded-l-md border border-white text-base font-medium text-white bg-[#024e49] shadow-sm">
                <GiCommercialAirplane className="inline-block" /> Flights
              </button>
              <button type="button" className="px-3 py-2 text-base font-medium text-white bg-[#024e49] hover:bg-[#036b65]">
                <MdLocalHotel className="inline-block" /> Hotels
              </button>
              <button type="button" className="px-3 py-2 rounded-r-md text-base font-medium text-white bg-[#024e49] hover:bg-[#036b65]">
                <TbCarSuvFilled className="inline-block" /> Cars
              </button>
            </div>

            <div className="inline-flex gap-3">
              <div className="text-white text-base font-bold pt-2">Use Velocity Points</div>
            </div>
          </div>
        </div>

        {/* WHITE CONTENT PANEL */}
        <div className=" p-6 pt-0">
          <div className="flex flex-col md:flex-row md:items-center md:gap-6">
            <div className="flex-1">
              {/* <p className="text-sm text-gray-500 mt-2">Search flights, hotels or cars for your next trip.</p> */}

              <div className="flex justify-between pb-1">
                {/* <input
                  className="rounded-md border border-gray-200 p-2 focus:ring-2 focus:ring-red-200"
                  placeholder="From"
                />
                <input
                  className="rounded-md border border-gray-200 p-2 focus:ring-2 focus:ring-red-200"
                  placeholder="To"
                />
                <button className="rounded-md bg-red-600 text-white px-4 py-2">Search</button> */}



                 {/* Source City */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-1 mb-4 md:mb-0 relative">
              <label className="font-bold text-white pb-3">From</label>
              <div className="bg-[#024e49] rounded-md shadow-sm pt-2 pb-2 px-3 border border-[#024e49]">
                <Select
                  onValueChange={(value) => form.setValue("source", value)}
                  defaultValue={form.getValues("source")}
                >
                  <SelectTrigger className="w-full bg-transparent text-white text-base border-0 text-left p-0 text-[17px] placeholder:text-white/90 focus:ring-0">
                    <div className="w-full text-white">
                      <SelectValue placeholder="Departure City"/>
                    </div>
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {DEPARTURE_CITIES.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.source && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.source.message}
                  </p>
                )}
              </div>
            </div>

            {/* Destination City */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-1 mb-4 md:mb-0 relative">
              <label className="font-bold text-white pb-3">To</label>
              <div className="relative bg-[#024e49] rounded-md shadow-sm pt-2 pb-2 px-3 border border-[#024e49] focus-within:ring-2 focus-within:ring-white/30">
                <Select
                  onValueChange={(value) => form.setValue("destination", value)}
                  defaultValue={form.getValues("destination")}
                >
                  <SelectTrigger className="w-full bg-transparent text-white text-base border-0 text-left p-0 text-[17px] placeholder:text-white/90 focus:ring-0">
                    <div className="w-full text-white">
                      <SelectValue placeholder="Arrival City" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {ARRIVAL_CITIES.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.destination && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.destination.message}
                  </p>
                )}
              </div>
            </div>

            {/* Departure Date */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-1 mb-4 md:mb-0 relative">
              <label className="font-bold text-white pb-3">Departure Date</label>
              <div className="relative bg-[#024e49] rounded-md shadow-sm pt-2 pb-2 px-3 border border-[#024e49]">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full bg-transparent text-white hover:bg-transparent hover:text-white text-base border-0 text-left p-0 focus-ring-0",
                        !form.getValues("departureDate") && "text-white/90"
                      )}
                    >
                      {form.getValues("departureDate") ? (
                        format(form.getValues("departureDate"), "PPP")
                      ) : (
                        <span className="font-normal text-[18px] text-white">Select Date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0  ">
                    <Calendar
                      mode="single"
                      selected={form.getValues("departureDate")}
                      onSelect={(date) => date && form.setValue("departureDate", date)}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
                {form.formState.errors.departureDate && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.departureDate.message}
                  </p>
                )}
              </div>
            </div>

            {/* Passengers */}
            <div className="w-full lg:w-1/4 px-1 mb-4 md:mb-0 relative">
              <label className="font-bold text-white pb-3">Passengers</label>
              <div className="relative bg-[#024e49] rounded-md shadow-sm pt-2 pb-2 px-3 border border-[#024e49] focus-within:ring-2 focus-within:ring-white/30">
                <Popover open={showPassengersDropdown} onOpenChange={setShowPassengersDropdown}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent text-white hover:bg-transparent text-base border-0 text-left p-0 font-normal text-[17px] focus-ring-0"
                    >
                      {/* <Users className="mr-2 h-5 w-5 text-neutral-500" /> */}
                      <span>{passengersLabel()}</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-4">
                    <div className="space-y-4">
                      <div className="flex items-left justify-between">
                        <span className="font-medium">Adults</span>
                        <div className="flex items-left">
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updatePassengerCount('adults', false)}
                            disabled={form.getValues("passengers.adults") <= 1}
                          >
                            -
                          </Button>
                          <span className="mx-3 font-medium">{form.getValues("passengers.adults")}</span>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updatePassengerCount('adults', true)}
                            disabled={form.getValues("passengers.adults") >= 9}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Children</span>
                        <div className="flex items-center">
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updatePassengerCount('children', false)}
                            disabled={form.getValues("passengers.children") <= 0}
                          >
                            -
                          </Button>
                          <span className="mx-3 font-medium">{form.getValues("passengers.children")}</span>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updatePassengerCount('children', true)}
                            disabled={form.getValues("passengers.children") >= 9}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Infants</span>
                        <div className="flex items-center">
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updatePassengerCount('infants', false)}
                            disabled={form.getValues("passengers.infants") <= 0}
                          >
                            -
                          </Button>
                          <span className="mx-3 font-medium">{form.getValues("passengers.infants")}</span>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updatePassengerCount('infants', true)}
                            disabled={form.getValues("passengers.infants") >= 9}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      
                      <Button
                        type="button"
                        className="w-full bg-[#4361EE] text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                        onClick={() => setShowPassengersDropdown(false)}
                      >
                        Apply 
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>


             <div className="">
            <Button
              type="submit"
              className="mt-6 text-[17px] text-white px-8 py-6 rounded-md shadow-lg transition-all bg-[#024e49] font-bold hover:bg-[#036b65] border-0"
            >
              Search Flights
            </Button>
          </div>
              </div>
            </div>

          
          </div>
        </div>
      </div>

   
    </div>
  </div>

          

         
        </form>
      </Form>
    </div>
  );
};

export default BookingWizard;
