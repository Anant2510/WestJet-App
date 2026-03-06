// Indian departure cities
export const DEPARTURE_CITIES = [
  "Sydney ",
  "Melbourne ",
  "Brisbane ",
  "Perth ",
  "Adelaide ",
  "Canberra ",
  "Gold Coast",
  "Hobart ",
  "Darwin ",
  "Newcastle ",
  "Wollongong ",
  "Geelong ",
];

// International arrival cities
export const ARRIVAL_CITIES = [
  "London",
  "Dubai",
  "Perth ",
  "Singapore",
  "New York",
  "Paris",
  "Hobart ",
  "Tokyo",
  "Sydney",
  "Hong Kong",
  "Toronto",
  "Bangkok",
  "Wollongong ",
  "Kuala Lumpur",
  "San Francisco",
];

// India-themed colors
export const INDIA_COLORS = {
  saffron: "#FF9933",
  white: "#FFFFFF",
  green: "#138808",
  blue: "#4361EE",
  navy: "#0A1128",
};

// Demo flights (permutations of departure and arrival cities)
export const DEMO_FLIGHTS = DEPARTURE_CITIES.flatMap((departure) => 
  ARRIVAL_CITIES.map((arrival) => ({
    departure,
    arrival,
    airline:0,
    flightNumber: `VA${Math.floor(100 + Math.random() * 900)}`, // Random flight number
    duration: `${Math.floor(2 + Math.random() * 10)}h ${Math.floor(Math.random() * 60)}m`, // Random duration
    price: `₹${Math.floor(5000 + Math.random() * 20000)}`, // Random price
  }))
);
