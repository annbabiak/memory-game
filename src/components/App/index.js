import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "../Card";
import PopUp from "../PopUp";
import cactus from "../../image/cactus.png";
import ficus from "../../image/ficus.png";
import flower_1 from "../../image/flower_1.png";
import goldenPothos from "../../image/golden-pothos.png";
import plant from "../../image/plant.png";
import succulent from "../../image/succulent.png";
import rubberPlant from "../../image/rubber-plant.png";
import flower_2 from "../../image/flower_2.png";
import leaf from "../../image/leaf.png";
import flower_3 from "../../image/flower_3.png";

function App() {
  const imagesArray = [
    {
      number: 1,
      image: cactus,
      alt: "cactus",
      matchFound: false,
    },
    {
      number: 2,
      image: ficus,
      alt: "ficus",
      matchFound: false,
    },
    {
      number: 3,
      image: flower_1,
      alt: "flower_1",
      matchFound: false,
    },
    {
      number: 4,
      image: goldenPothos,
      alt: "goldenPothos",
      matchFound: false,
    },
    {
      number: 5,
      image: plant,
      alt: "plant",
      matchFound: false,
    },
    {
      number: 6,
      image: succulent,
      alt: "succulent",
      matchFound: false,
    },
    {
      number: 7,
      image: rubberPlant,
      alt: "rubberPlant",
      matchFound: false,
    },
    {
      number: 8,
      image: flower_2,
      alt: "flower_2",
      matchFound: false,
    },
    {
      number: 9,
      image: flower_3,
      alt: "flower_3",
      matchFound: false,
    },
    {
      number: 10,
      image: leaf,
      alt: "leaf",
      matchFound: false,
    },
  ];

  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0); 
  const [tries, setTries] = useState(0); 
  const [popUp, setPopUp] = useState(false);

  const randomImages = () => {
    let randomizedArray = [...imagesArray, ...imagesArray]
      .map((item, index) => ({ ...item, id: index + 1 }))
      .sort(() => 0.5 - Math.random());

    setScore(0);
    setCards(randomizedArray);
  };

  useEffect(randomImages, []);

  useEffect(() => {
    if (selectedCards.length === 2) {
      setTimeout(() => setSelectedCards([]), 1000);
      compareSelectedCards();
    }
  }, [selectedCards]);

  const compareSelectedCards = () => {
    if (selectedCards[0].number === selectedCards[1].number) {
      setScore((prev) => prev + 1);
      let updatedCards = cards.map((card) =>
        card.number === selectedCards[0].number
          ? { ...card, matchFound: true }
          : card
      );
      setCards(updatedCards);
    } else {
      setTries((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (score === imagesArray.length) {
      setTimeout(() => {
        randomImages();
        setPopUp(true);
      }, 1000);
    }
  }, [score]);

  return (
    <>
      {popUp && <PopUp setTries={setTries} tries={tries} setPopUp={setPopUp} />}
      <div className="memory_game_container">
        <div className="scoreboard_container">
          <div className="score">Рахунок: {score}</div>
          <div className="tries">Кількість спроб: {tries}</div>
        </div>
        <div className="cards_container">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              setSelectedCards={setSelectedCards}
              selectedCards={selectedCards}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
