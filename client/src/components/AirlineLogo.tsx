import React from "react";
import westjetHeaderLogo from "../assets/images/New-WestJet-Logo.png";

interface AirlineLogoProps {
  className?: string;
}

const AirlineLogo: React.FC<AirlineLogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={westjetHeaderLogo} alt="WestJet Logo" className="w-[120px]" />
    </div>
  );
};

export default AirlineLogo;
