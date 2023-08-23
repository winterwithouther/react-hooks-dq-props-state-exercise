import React, { useState} from "react";
// import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({name, hobby, eyeColor}) {

  const [babyEyeColor, setBabyEyeColor] = useState(eyeColor)
  const [weight, setWeight] = useState(100);

  const whatever = {
    blue: BlueBaby,
    sun: SunBaby,
    glowing: GlowingBaby
  }

  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    const weightCounter = e.target.name === "+" ? weight + 10 : weight - 10;
    setWeight(weightCounter)
  }

  return (
    <li className="hogbabies">
      <h1>Name {name}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {babyEyeColor}</h4>

      <button onClick={handleChangeWeight} name="+">Increase Weight</button>
      <button onClick={handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={whatever[babyEyeColor]}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
