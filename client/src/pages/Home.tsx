import React, {useEffect, useState} from "react";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Destinations2 from "@/components/Destinations2";
import Offers from "@/components/Offers";
import Promotion from "@/components/Promotion";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  useEffect(() => {
    localStorage.setItem('pageName', 'Home Page');
    const loggedUser = localStorage.getItem("loggedInUser");
    setUser(loggedUser);
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider user={user}/>
        <Destinations user={user} />
        {/* <Services /> */}
        <Offers />
        {/* <Promotion /> */}
        <Destinations2 user={user}/>
        <Testimonials />
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
