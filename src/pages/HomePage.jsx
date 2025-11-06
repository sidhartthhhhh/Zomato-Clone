import React from "react";
import item1 from "../assets/images/item1.png";
import item2 from "../assets/images/item2.png";
import item3 from "../assets/images/item3.png";
import item4 from "../assets/images/item4.png";
import HeroSection from "../components/Home/HeroSection";
import WeOffer from "../components/Home/WeOffer";
import GetTheApp from "../components/Home/GetTheApp";
import Collections from "../components/Home/Collections";

function Home() {
  return (
    <div>
      <HeroSection />
      <WeOffer
        items={[
          {
            image: item1,
            title: "Order Online",
            description: "Stay home and order to your doorstep",
          },
          {
            image: item2,
            title: "Dining",
            description: "View the citys favourite dining venue",
          },
          {
            image: item3,
            title: "Nightlife and clubs",
            description: "Explore the citys top nightlife outlets",
          },
          {
            image: item4,
            title: "Order Online",
            description: "Stay home and order to your doorstep",
          },
        ]}
      />
      <Collections />
      <GetTheApp />
    </div>
  );
}

export default Home;
