import React from "react";
import "../Style/Home.css";

// Reusable Card component
const Card = ({ title, places, image }) => (
  <div className={`card ${image}`}>
    <div className="overlay"></div>
    <div className="content">
      <h4>{title}</h4>
      <span>{places} Places</span>
    </div>
  </div>
);

function Collections() {
  const collectionData = [
    { title: "Live Cricket Screening", places: 56, image: "card1" },
    { title: "Malnad Special", places: 12, image: "card2" },
    { title: "Newly opened Restaurants", places: 36, image: "card3" },
    { title: "Trending Pubs Near Me", places: 16, image: "card4" },
  ];

  return (
    <section className="container collections">
      <h1>Collection</h1>
      <div className="sub__heading_container">
        <span>
          Explore curated lists of top restaurants, cafes, pubs in Hospet-Hampi
          based on trends
        </span>
        <span>All collections in Hospet-Hampi</span>
      </div>
      <div className="collections_card_container">
        {collectionData.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            places={data.places}
            image={data.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Collections;
