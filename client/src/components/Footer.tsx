import React from "react";
import AirlineLogo from "./AirlineLogo";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#152d32] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <AirlineLogo className="mb-6" />
            <p className="text-white opacity-80 mb-6">
              Connecting Canada to the world with comfort, culture, and care.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-[#00A0DF] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#001F3F] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-[#00A0DF] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#001F3F] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-[#00A0DF] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#001F3F] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-[#00A0DF] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#001F3F] transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 text-[#FFD700]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-white opacity-80 hover:text-[#00A0DF] hover:opacity-100 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-white opacity-80 hover:text-[#00A0DF] hover:opacity-100 transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white opacity-80 hover:text-[#00A0DF] hover:opacity-100 transition-colors"
                >
                  Book a Flight
                </a>
              </li>
              <li>
                <Link
                  to="/offers"
                  className="text-white opacity-80 hover:text-[#00A0DF] hover:opacity-100 transition-colors"
                >
                  Special Offers
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white opacity-80 hover:text-[#00A0DF] hover:opacity-100 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white opacity-80 hover:text-[#00A0DF] hover:opacity-100 transition-colors"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 text-[#FFD700]">Travel Information</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white opacity-80 hover:text-[#00A0DF] hover:opacity-100 transition-colors"
                >
                  Baggage
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white opacity-80 hover:text-[#00A0DF] hover:opacity-100 transition-colors"
                >
                  Check-in
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white opacity-80 hover:text-[#00A0DF] hover:opacity-100 transition-colors"
                >
                  Special Assistance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white opacity-80 hover:text-[#00A0DF] hover:opacity-100 transition-colors"
                >
                  Travel Insurance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white opacity-80 hover:text-[#00A0DF] hover:opacity-100 transition-colors"
                >
                  Visa Requirements
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 text-[#FFD700]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#00A0DF] mt-1 mr-3" />
                <span className="text-white opacity-80">
                  WestJet House, Calgary International Airport, Calgary, Alberta, Canada
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#00A0DF] mr-3" />
                <span className="text-white opacity-80">+1 403 250 5839</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#00A0DF] mr-3" />
                <span className="text-white opacity-80">contact@westjet.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00A0DF] border-opacity-30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white opacity-60 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} WestJet. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="text-white opacity-60 text-sm hover:text-[#00A0DF] transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-white opacity-60 text-sm hover:text-[#00A0DF] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white opacity-60 text-sm hover:text-[#00A0DF] transition-colors"
              >
                Cookies Policy
              </a>
              <a
                href="#"
                className="text-white opacity-60 text-sm hover:text-[#00A0DF] transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
