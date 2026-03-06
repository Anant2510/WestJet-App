import React, { useState, useEffect } from "react";
import AirlineLogo from "./AirlineLogo";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  pageTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setLoggedInUser(user);
  }, []);

  
  return (
    <header className={pageTitle? `z-50 bg-[#152d32] py-3 shadow-lg`:`absolute fixed w-full z-50 bg-[#152d32] shadow-lg`}>

      <div className="bg-[#152d32]">
        
      <div className="container mx-auto pt-2 pb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <AirlineLogo />
            </Link>
          </div>

          {/* Navigation - Desktop */}
         

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {loggedInUser && <span className="hidden md:flex text-white font-semibold">Welcome, {loggedInUser}!</span>}
            <Link to="/profile" className="hidden md:flex text-white hover:text-[#FFD700] transition-colors">
              {/* <User className="h-5 w-5" /> */}
            </Link>
            {!loggedInUser && (
              <Link to="/login">
                <Button
                  variant="outline"
                  className="hidden md:inline-flex border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#00A0DF] font-montserrat font-medium text-base pe-5"
                >
                  <User className="h-5 w-5" />
                  Login
                </Button>
              </Link>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

             <nav className="hidden md:flex space-x-8">
            <Link to="/destinations" className="font-montserrat font-normal text-white hover:text-[#FFD700] transition-colors flex justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10H14M8 21V22M16 21V22M16 7V4C16 2.895 15.105 2 14 2H10C8.895 2 8 2.895 8 4V7M17 21H7C5.895 21 5 20.105 5 19V9C5 7.895 5.895 7 7 7H17C18.105 7 19 7.895 19 9V19C19 20.105 18.105 21 17 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              My Booking
            </Link>
            <Link to="/destinations" className="font-montserrat font-normal text-white hover:text-[#FFD700] transition-colors flex justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.30045 12H19.7M4.30045 17H19.7M4.30005 7H19.6996" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              Destinations
            </Link>
             <Link to="/offers" className="font-medium text-white hover:text-[#FFD700] transition-colors">
              Offers
            </Link>
            <Link to="/about" className="font-medium text-white hover:text-[#FFD700] transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="font-medium text-white hover:text-[#FFD700] transition-colors">
              Contact
            </Link>
          </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#152d32]">
          <div className="px-4 py-5 border-t border-white border-opacity-20">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-white hover:text-[#FFD700] transition-colors">
                Home
              </Link>
              <Link to="/destinations" className="font-medium text-white hover:text-[#FFD700] transition-colors">
                Destinations
              </Link>
              <Link to="/offers" className="font-medium text-white hover:text-[#FFD700] transition-colors">
                Offers
              </Link>
              <Link to="/about" className="font-medium text-white hover:text-[#FFD700] transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="font-medium text-white hover:text-[#FFD700] transition-colors">
                Contact
              </Link>
              {loggedInUser && <span className="text-[#FFD700] font-semibold">Welcome, {loggedInUser}!</span>}
              {!loggedInUser && (
                <Link to="/login">
                  <Button className="w-full bg-white text-[#00A0DF] hover:bg-[#FFD700] font-semibold">
                    Login
                  </Button>
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
      
      </div>
    </header>
  );
};

export default Header;
