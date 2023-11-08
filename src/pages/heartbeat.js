import React from "react";
import "../pages/heartbeat";

const Heartbeat = () => {
  // Generating a range (e.g., 0 to 19) for 20 sprinkles
  const sprinkleElements = [...Array(30).keys()].map((i) => (
    <div
      key={i}
      className={`sprinkle`}
      style={{
        // Randomize the position of the sprinkle
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        // Apply random animation delays and durations to each sprinkle
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
      }}
    />
  ));
  return (
    <div id="container">
      {sprinkleElements}
      <div className="heart-part left"></div>
      <div className="heart-part right"></div>
    </div>
  );
};

export default Heartbeat;
