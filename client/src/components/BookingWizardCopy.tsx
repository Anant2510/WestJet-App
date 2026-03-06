import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  Search,
  PlaneTakeoff,
  PlaneLanding,
  Users,
} from "lucide-react";
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
import {
  DEPARTURE_CITIES,
  ARRIVAL_CITIES,
  DEMO_FLIGHTS,
} from "@/lib/constants";
import { pushToDataLayer } from "../utils/dataLayer";

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

const BookingWizardCopy: React.FC = () => {
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
      event: "flightsearch",
      flightContext: {
        tripType: "one-way", // or "round-trip", "multi-city"
        origin: form.getValues("source"),
        destination: form.getValues("destination"),
        departureDate: form.getValues("departureDate").toISOString(),
        returnDate: "",
        passengerCount: form.getValues("passengers"),
        cabinClass: "economy",
      },
    });

    // Navigate to dummy flight results page
    navigate("/flight-results", {
      state: {
        source: form.getValues("source"),
        destination: form.getValues("destination"),
        flights: DEMO_FLIGHTS,
      },
    });
  };

  // Helper to increment/decrement passenger counts
  const updatePassengerCount = (
    type: "adults" | "children" | "infants",
    increment: boolean
  ) => {
    const currentValue = form.getValues(`passengers.${type}`);
    const newValue = increment
      ? currentValue + 1
      : Math.max(currentValue - 1, type === "adults" ? 1 : 0);
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
    <div className="booking-wizard max-w-5xl mx-auto w-full p-6 md:p-8 bg-white bg-opacity-95 rounded-lg shadow-lg backdrop-blur-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="flex flex-row flex-wrap items-end -mx-2">
            {/* Source City */}
            <div className="w-full md:w-1/2 lg:w-1/5 px-2 mb-4 md:mb-0">
              <label className="block text-neutral-700 text-xs font-medium mb-2 flex items-center gap-1">
                <span className="text-xs">From</span>
              </label>
              <div className="relative">
                <Select
                  onValueChange={(value) => form.setValue("source", value)}
                  defaultValue={form.getValues("source")}
                >
                  <SelectTrigger className="w-full px-4 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4361EE] text-xs">
                    <PlaneTakeoff className="h-4 w-4 text-neutral-500 inline-block" />
                    <div className="w-full flex items-center">
                      <SelectValue
                        placeholder="Departure City"
                        className="text-xs"
                      />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="max-h-60 text-xs">
                    {DEPARTURE_CITIES.map((city) => (
                      <SelectItem key={city} value={city} className="text-xs">
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
            <div className="w-full md:w-1/2 lg:w-1/5 px-2 mb-4 md:mb-0">
              <label className="block text-neutral-700 text-sm font-medium mb-2">
                To
              </label>
              <div className="relative">
                <Select
                  onValueChange={(value) => form.setValue("destination", value)}
                  defaultValue={form.getValues("destination")}
                >
                  <SelectTrigger className="w-full px-4 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4361EE] text-xs">
                    <PlaneLanding className="h-4 w-4 text-neutral-500 inline-block" />
                    {/* <PlaneTakeoff className="h-4 w-4 text-neutral-500 inline-block" /> */}
                    <div className="w-full flex items-center">
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
            <div className="w-full md:w-1/2 lg:w-1/5 px-2 mb-4 md:mb-0">
              <label className="block text-neutral-700 text-xs font-medium mb-2">
                Departure Date
              </label>
              <div className="relative">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left px-4 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4361EE] font-normal text-xs",
                        !form.getValues("departureDate") &&
                          "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-neutral-500" />
                      {form.getValues("departureDate") ? (
                        <span className="text-xs">
                          {format(form.getValues("departureDate"), "PPP")}
                        </span>
                      ) : (
                        <span className="text-xs">Select Date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={form.getValues("departureDate")}
                      onSelect={(date) =>
                        date && form.setValue("departureDate", date)
                      }
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
            <div className="w-full md:w-1/2 lg:w-1/5 px-2 mb-4 md:mb-0">
              <label className="block text-neutral-700 text-xs font-medium mb-2">
                Passengers
              </label>
              <div className="relative">
                <Popover
                  open={showPassengersDropdown}
                  onOpenChange={setShowPassengersDropdown}
                >
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left px-4 py-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4361EE] font-normal text-xs"
                    >
                      <Users className="mr-2 h-4 w-4 text-neutral-500" />
                      <span className="text-xs">{passengersLabel()}</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-4 text-xs">
                    <div className="space-y-4">
                      {/* ...repeat for Adults, Children, Infants with h-6 w-6 and text-xs for buttons and labels... */}
                      <Button
                        type="button"
                        className="w-full bg-[#4361EE] text-white py-1 rounded-lg hover:bg-opacity-90 transition-colors text-xs"
                        onClick={() => setShowPassengersDropdown(false)}
                      >
                        Apply
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Search Button on same line as fields */}
            <div className="w-full md:w-1/2 lg:w-1/5 px-2 mb-4 md:mb-0 flex items-end">
              <Button
                type="submit"
                className="bg-[#e10a0a] hover:bg-[#e10a0a] text-white font-medium px-4 py-4 rounded-sm shadow-lg flex items-center justify-center w-full text-xs"
              >
                <Search className=" h-4 w-4" />
                Search Flights
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BookingWizardCopy;
