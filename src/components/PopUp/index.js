import React from "react";
import "./style.css";

const PopUp = ({ tries, setPopUp, setTries }) => {
  const handleClick = () => {
    setPopUp(false);
    setTries(0);
  };

  return (
    <div className="pop_up">
      <div className="pop_up_box">
        <div className="pop_up_text">
          <p>Гра завершена!</p>
          <p>Кількість спроб: {tries}</p>
        </div>
        <button onClick={handleClick}>Грати знову</button>
      </div>
    </div>
  );
};

export default PopUp;
