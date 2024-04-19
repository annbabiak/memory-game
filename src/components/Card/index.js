import React, { useEffect, useState } from "react";
import "./style.css";

const Card = ({ card, setSelectedCards, selectedCards }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => setSelectedCards((prev) => [...prev, card]);

  useEffect(() => {
    setIsFlipped(
      selectedCards[0] === card || selectedCards[1] === card || card.matchFound
        ? true
        : false
    );
  }, [selectedCards, card.matchFound]);

  return (
    <div
      className={isFlipped ? "card open click_disabled" : "card"}
      onClick={handleClick}
    >
      <div className="front">
        <img src={card.image} alt={card.alt}></img>
      </div>
      <div className="back"></div>
    </div>
  );
};

export default Card;
