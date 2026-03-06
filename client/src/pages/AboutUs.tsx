import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const AboutUs: React.FC = () => (
  <div className="max-w-3xl mx-auto py-12 px-4 text-[#152d32]">
    <Breadcrumb />
    <h1 className="text-3xl font-bold mb-6 text-center">About WestJet</h1>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Who We Are</h2>
      <p>
        WestJet is a leading Canadian airline, connecting people and communities across Canada and around the world. Since our first flight in 1996, we have grown from a small regional carrier to an international airline, serving more than 100 destinations in over 20 countries.
      </p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Our Mission & Values</h2>
      <p>
        Our mission is to enrich the lives of everyone in WestJet's world by providing safe, friendly, and affordable air travel. We are guided by our core values: caring from the heart, acting like an owner, rising to the challenge, and working together as one team.
      </p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Our History</h2>
      <p>
        Founded in Calgary, Alberta, WestJet began with just three aircraft and 220 employees. Today, we operate a modern fleet of Boeing 737, 787 Dreamliner, and De Havilland Dash 8 aircraft, and employ thousands of WestJetters dedicated to delivering a remarkable guest experience.
      </p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Commitment to Safety & Service</h2>
      <p>
        Safety is our top priority. We are committed to upholding the highest standards of safety, reliability, and guest care. Our team works tirelessly to ensure every journey is comfortable and secure.
      </p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Community Involvement</h2>
      <p>
        WestJet is proud to support the communities we serve through charitable partnerships, disaster relief efforts, and sustainability initiatives. We believe in making a positive impact both in the air and on the ground.
      </p>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Learn More</h2>
      <p>
        For more information about WestJet, our services, and our story, visit our official website at <a href="https://www.westjet.com/en-ca/who-we-are" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">westjet.com</a>.
      </p>
    </section>
  </div>
);

export default AboutUs;
