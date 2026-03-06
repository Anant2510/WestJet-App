import React from "react";
import Breadcrumb from "../components/Breadcrumb";

type Region = {
  name: string;
  description: string;
  destinations: string[];
  accentClass: string;
};

const REGIONS: Region[] = [
  {
    name: "Canada",
    description: "From rugged coasts to vibrant cities, discover every corner of Canada.",
    destinations: [
      "Alberta",
      "British Columbia",
      "Manitoba",
      "New Brunswick",
      "Newfoundland and Labrador",
      "Nova Scotia",
      "Ontario",
      "Prince Edward Island",
      "Quebec",
      "Saskatchewan",
      "Yukon",
      "Northwest Territories",
    ],
    accentClass: "from-[#00A0DF] to-[#024e49]",
  },
  {
    name: "Caribbean & Central America",
    description: "Warm waters, white‑sand beaches, and laid‑back island escapes.",
    destinations: [
      "Antigua",
      "Aruba",
      "Bahamas",
      "Barbados",
      "Belize",
      "Cayman Islands",
      "Costa Rica",
      "Cuba",
      "Curaçao",
      "Dominican Republic",
      "Grenada",
      "Honduras",
      "Jamaica",
      "Panama",
      "Puerto Rico",
      "Saint Lucia",
      "Saint Maarten / St. Martin",
      "Turks and Caicos Islands",
    ],
    accentClass: "from-[#FF9933] to-[#FFB366]",
  },
  {
    name: "Mexico",
    description: "From bustling cities to all‑inclusive beach resorts on both coasts.",
    destinations: [
      "Cancun",
      "Cozumel",
      "Guadalajara",
      "Huatulco",
      "Ixtapa",
      "Loreto",
      "Los Cabos",
      "Manzanillo",
      "Mazatlán",
      "Mérida",
      "Mexico City",
      "Puerto Escondido",
      "Puerto Vallarta",
      "Riviera Maya",
      "Tepic",
      "Tulum",
    ],
    accentClass: "from-[#0A1128] to-[#00A0DF]",
  },
  {
    name: "United States",
    description: "Iconic cities, national parks, and sunny escapes across the U.S.",
    destinations: [
      "Alaska",
      "Arizona",
      "California",
      "Colorado",
      "District of Columbia",
      "Florida",
      "Georgia",
      "Hawaiian Islands",
      "Illinois",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Nevada",
      "New York",
      "Oregon",
      "Tennessee",
      "Texas",
      "Utah",
      "Washington State",
    ],
    accentClass: "from-[#4361EE] to-[#00A0DF]",
  },
  {
    name: "Europe",
    description: "Historic capitals, seaside villages, and culture‑rich European getaways.",
    destinations: [
      "Denmark",
      "France",
      "Iceland",
      "Ireland",
      "Italy",
      "Netherlands",
      "Portugal",
      "Spain",
      "United Kingdom",
    ],
    accentClass: "from-[#152d32] to-[#00A0DF]",
  },
  {
    name: "Asia & South America",
    description: "Long‑haul adventures to unforgettable cities and landscapes.",
    destinations: ["Japan", "South Korea", "Colombia", "Brazil"],
    accentClass: "from-[#024e49] to-[#00A0DF]",
  },
];

const DestinationsPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 text-[#152d32]">
      <Breadcrumb />

      <header className="mb-10 text-center">
        <p className="uppercase tracking-wide text-sm font-semibold text-[#00A0DF] mb-1">
          Destination guide
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Explore our world</h1>
        <p className="text-base text-gray-700 max-w-2xl mx-auto">
          Choose from affordable domestic flights or vacation packages to destinations
          across Canada, the U.S., Mexico, the Caribbean, Europe, Asia and South America.
        </p>
      </header>

      <section className="space-y-6">
        {REGIONS.map((region) => (
          <article
            key={region.name}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
              <div
                className={`h-40 md:h-auto bg-gradient-to-r ${region.accentClass} relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
                <div className="relative h-full flex flex-col justify-end p-5 text-white">
                  <h2 className="text-2xl font-semibold mb-1">{region.name}</h2>
                  <p className="text-sm opacity-90">{region.description}</p>
                </div>
              </div>

              <div className="p-5 md:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Destinations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {region.destinations.map((destination) => (
                      <span
                        key={destination}
                        className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs md:text-sm text-gray-800"
                      >
                        {destination}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default DestinationsPage;

