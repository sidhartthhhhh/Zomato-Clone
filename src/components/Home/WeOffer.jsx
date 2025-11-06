import React from "react";
import "../Style/Home.css";

function WeOffer({ items }) {
  return (
    <section className="container we__offer">
      {items.map((item, index) => (
        <div className="we__offer_card" key={index}>
          <img src={item.image} alt={`item ${index + 1} offer card`} />
          <div className="we__offer_content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default WeOffer;
