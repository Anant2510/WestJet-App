import React from 'react';
import Layout from '../components/Layout'; // Assuming Layout component includes Header and Footer
import { Button } from '@/components/ui/button'; // Assuming you use shadcn/ui Button
import { navigate } from 'wouter/use-browser-location';

const OffersPage: React.FC = () => {
  return (
    <Layout>
      <div className="offers-container">
        {/* Promotional Banner Section */}
        <section className="promotional-banner relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img src="https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/campaigns/global/destinations-promo/h1-destination-lon-nyc-bkk-collage-hn.jpg" alt="Airline Banner" className="w-full h-full object-cover"/>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="container mx-auto px-4 text-center relative z-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Exclusive Seat Upgrade Offer!
            </h1>
            <p className="text-2xl text-white mb-8">
            Fly in Comfort with Business Class - Enjoy 20% Off Seat Upgrades When You Reserve Today!
            </p>
            {/* Book Your Seat Now Button */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FF9933] to-[#FFB366] hover:from-[#F08620] hover:to-[#FF9933]"
              onClick={() => {
                // TODO: Add navigation logic to Seat Selection page
                navigate('/seat-selection');
                console.log("Navigate to Seat Selection");
              }}
            >
              Book Your Seat Now
            </Button>
          </div>
        </section>

        {/* Other content for the offers page can go here */}
      </div>
    </Layout>
  );
};

export default OffersPage;
